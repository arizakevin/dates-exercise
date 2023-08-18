import { Appointment, weekAppointments } from './data';

export function timeToMinutes(time: string): number {
	const [hour, minute] = time.split(':').map(Number);
	return hour * 60 + minute;
}

export function availableSlotsForDay(appointments: Appointment[]): number {
	let availableSlots = 0;
	let lastEndTime = timeToMinutes("9:00"); // start of the day

	appointments.forEach(appointment => {
		const startTime = timeToMinutes(appointment.start);
		availableSlots += (startTime - lastEndTime) / 30;
		lastEndTime = startTime + appointment.duration;
	});

	// Add slots available after the last appointment till 17:00
	availableSlots += (timeToMinutes("17:00") - lastEndTime) / 30;

	return availableSlots;
}

export function totalAvailableSlots(weekAppointments: Appointment[][]): number {
	return weekAppointments.reduce((total, dayAppointments) => {
		// Sort appointments for the day based on start time
		const sortedAppointments = dayAppointments.sort((a, b) => timeToMinutes(a.start) - timeToMinutes(b.start));
		return total + availableSlotsForDay(sortedAppointments);
	}, 0);
}

console.log(totalAvailableSlots(weekAppointments)); // This will give the total number of 30-minute slots available in the week
