import { timeToMinutes, availableSlotsForDay, totalAvailableSlots, toSortedAppointments } from './main';
import { weekAppointments } from './data';

describe('timeToMinutes', () => {
	it('should convert time to minutes since start of day', () => {
		expect(timeToMinutes("9:00")).toBe(540);
		expect(timeToMinutes("12:00")).toBe(720);
		expect(timeToMinutes("17:00")).toBe(1020);
	});
});

describe('availableSlotsForDay', () => {
	it('should calculate available 30-minute slots for a day', () => {
		const appointments = [
			{ start: "9:15", duration: 30 },
			{ start: "10:00", duration: 60 }
		];
		expect(availableSlotsForDay(appointments)).toBe(13);
	});
});

describe('totalAvailableSlots', () => {
	it('should calculate total available 30-minute slots for a week', () => {
		expect(totalAvailableSlots(weekAppointments)).toBeGreaterThan(0);
	});
});

describe('timeToMinutes Edge Cases', () => {
	it('should return null for invalid time format', () => {
		expect(timeToMinutes("25:00")).toBeNull();
		expect(timeToMinutes("12:70")).toBeNull();
		expect(timeToMinutes("invalid")).toBeNull();
	});
});

describe('availableSlotsForDay Edge Cases', () => {
	it('should return 16 slots for a day with no appointments', () => {
		expect(availableSlotsForDay([])).toBe(16);
	});

	it('should not count appointments outside of 9:00 to 17:00', () => {
		const appointments = [
			{ start: "8:00", duration: 60 },
			{ start: "17:00", duration: 60 }
		];
		expect(availableSlotsForDay(appointments)).toBe(16);
	});

	it('should handle overlapping appointments', () => {
			const appointments = [
				{ start: "9:00", duration: 30 },
				{ start: "9:15", duration: 30 }
			];
			// This should ideally throw an error or return a special value
			// For this test, we'll assume overlapping appointments are invalid and should return null
			expect(availableSlotsForDay(appointments)).toBeNull();
	});
});

describe('totalAvailableSlots Edge Cases', () => {
	it('should return 80 slots for a week with no appointments', () => {
		expect(totalAvailableSlots([[], [], [], [], []])).toBe(80); // 5 days * 16 slots/day
	});

	it('should return 0 slots for a week fully booked', () => {
		const fullyBookedDay = [
			{ start: "9:00", duration: 480 } // 8 hours
		];
		expect(totalAvailableSlots([fullyBookedDay, fullyBookedDay, fullyBookedDay, fullyBookedDay, fullyBookedDay])).toBe(0);
	});
});

describe('toSortedAppointments', () => {
	it('should sort appointments based on start time', () => {
		const appointments = [
			{ start: "11:00", duration: 30 },
			{ start: "9:00", duration: 60 },
			{ start: "10:00", duration: 90 }
		];
		const sorted = toSortedAppointments(appointments);
		expect(sorted[0].start).toBe("9:00");
		expect(sorted[1].start).toBe("10:00");
		expect(sorted[2].start).toBe("11:00");
	});

	it('should handle invalid time formats', () => {
		const appointments = [
			{ start: "invalid", duration: 30 },
			{ start: "9:00", duration: 60 }
		];
		const sorted = toSortedAppointments(appointments);
		// Assuming invalid times are treated as 0 minutes, they'll be at the start of the sorted array
		expect(sorted[0].start).toBe("invalid");
		expect(sorted[1].start).toBe("9:00");
	});
});
