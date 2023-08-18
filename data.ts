export type Appointment = {
start: string;
duration: number;
};

export const weekAppointments: Appointment[][] = [
	[ // Monday
		{ start: "9:00", duration: 30 },
		{ start: "10:00", duration: 60 },
		{ start: "11:30", duration: 90 },
		{ start: "14:00", duration: 60 },
		{ start: "16:00", duration: 30 }
	],
	[ // Tuesday
		{ start: "9:30", duration: 30 },
		{ start: "10:30", duration: 60 },
		{ start: "12:00", duration: 90 },
		{ start: "15:00", duration: 60 }
	],
	[ // Wednesday
		{ start: "9:15", duration: 30 },
		{ start: "10:45", duration: 60 },
		{ start: "13:30", duration: 90 },
		{ start: "16:15", duration: 30 }
	],
	[ // Thursday
		{ start: "9:00", duration: 60 },
		{ start: "11:00", duration: 30 },
		{ start: "13:00", duration: 90 },
		{ start: "15:30", duration: 60 }
	],
	[ // Friday
		{ start: "9:45", duration: 30 },
		{ start: "10:45", duration: 60 },
		{ start: "12:15", duration: 90 },
		{ start: "14:45", duration: 60 },
		{ start: "16:45", duration: 30 }
	]
];
