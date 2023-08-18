"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalAvailableSlots = exports.availableSlotsForDay = exports.timeToMinutes = void 0;
var data_1 = require("./data");
function timeToMinutes(time) {
    var _a = time.split(':').map(Number), hour = _a[0], minute = _a[1];
    return hour * 60 + minute;
}
exports.timeToMinutes = timeToMinutes;
function availableSlotsForDay(appointments) {
    var availableSlots = 0;
    var lastEndTime = timeToMinutes("9:00"); // start of the day
    appointments.forEach(function (appointment) {
        var startTime = timeToMinutes(appointment.start);
        availableSlots += (startTime - lastEndTime) / 30;
        lastEndTime = startTime + appointment.duration;
    });
    // Add slots available after the last appointment till 17:00
    availableSlots += (timeToMinutes("17:00") - lastEndTime) / 30;
    return availableSlots;
}
exports.availableSlotsForDay = availableSlotsForDay;
function totalAvailableSlots(weekAppointments) {
    return weekAppointments.reduce(function (total, dayAppointments) {
        // Sort appointments for the day based on start time
        var sortedAppointments = dayAppointments.sort(function (a, b) { return timeToMinutes(a.start) - timeToMinutes(b.start); });
        return total + availableSlotsForDay(sortedAppointments);
    }, 0);
}
exports.totalAvailableSlots = totalAvailableSlots;
console.log(totalAvailableSlots(data_1.weekAppointments)); // This will give the total number of 30-minute slots available in the week
