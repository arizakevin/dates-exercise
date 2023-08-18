import { Appointment, weekAppointments } from './data';

export function timeToMinutes(time: string): number | null {
	const [hour, minute] = time.split(':').map(Number);
	if (isNaN(hour) || isNaN(minute) || hour < 0 || hour >= 24 || minute < 0 || minute >= 60) {
			return null;
	}
	return hour * 60 + minute;
}


export function availableSlotsForDay(appointments: Appointment[]): number | null {
	let availableSlots = 0;
	let lastEndTime = timeToMinutes("9:00");

	if (lastEndTime === null) {
		return null; // Handle the potential null value
	}

	for (const appointment of appointments) {
		const startTime = timeToMinutes(appointment.start);
		if (!startTime) return null; // Invalid start time

		const endTime = startTime + appointment.duration;

		// Check if appointment is outside of 9:00 to 17:00
		const dayStart = timeToMinutes("9:00");
		const dayEnd = timeToMinutes("17:00");
		if (dayStart && dayEnd && (startTime < dayStart || endTime > dayEnd)) {
			continue; // Skip this appointment
		}

		// Check for overlapping appointments
		if (startTime < lastEndTime) return null;

		availableSlots += (startTime - lastEndTime) / 30;
		lastEndTime = endTime;
	}

	const endOfDay = timeToMinutes("17:00");
	if (!endOfDay) {
		return null; // Handle the potential null value
	}

	// Add slots available after the last appointment till 17:00
	availableSlots += (endOfDay - lastEndTime) / 30;

	return availableSlots;
}

export function toSortedAppointments(appointments: Appointment[]): Appointment[] {
	return [...appointments].sort((a, b) => {
		const timeA = timeToMinutes(a.start);
		const timeB = timeToMinutes(b.start);

		if (timeA === null || timeB === null) {
			return 0;
		}

		return timeA - timeB;
	});
}

export function totalAvailableSlots(weekAppointments: Appointment[][]): number {
	return weekAppointments.reduce((total, dayAppointments) => {
		const sortedAppointments = toSortedAppointments(dayAppointments);
		const availableForDay = availableSlotsForDay(sortedAppointments);
		return total + (availableForDay ?? 0);
	}, 0);
}

console.log("Total Available Slots: ", totalAvailableSlots(weekAppointments)); // This will give the total number of 30-minute slots available in the week
