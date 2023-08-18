import { timeToMinutes, availableSlotsForDay, totalAvailableSlots } from './main';
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
