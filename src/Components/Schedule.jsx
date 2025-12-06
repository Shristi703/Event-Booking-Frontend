import React from "react";

const sessions = [
  {
    time: "05:00 – 06:00 PM",
    title: "Entry & Check-in",
    desc: "Scan your QR code, get your entry band and find your seat.",
    speakers: [],
  },
  {
    time: "06:00 – 07:30 PM",
    title: "Opening Performances",
    desc: "Warm-up acts and performances to kick-start the evening.",
    speakers: ["Local Artists"],
  },
  {
    time: "07:30 – 09:00 PM",
    title: "Main Event",
    desc: "Headline performance with full sound and light experience.",
    speakers: ["Headliner Artist"],
  },
  {
    time: "09:00 – 09:30 PM",
    title: "Audience Interaction",
    desc: "Photo ops, shoutouts and special announcements.",
    speakers: [],
  },
  {
    time: "09:30 – 10:00 PM",
    title: "Closing & Exit",
    desc: "Orderly exit from venue with support team assistance.",
    speakers: [],
  },
];

const Schedule = () => {
  return (
    <div className="max-w-6xl mx-auto px-4" id="schedule">
      <div className="mb-8 max-w-xl">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary mb-2">
          Example Schedule
        </p>
        <h2 className="text-3xl font-semibold mb-2">
          How a typical event evening looks.
        </h2>
        <p className="text-slate-300 text-sm">
          Every event is different, but here is a sample flow for a concert
          booked through Event Booking.
        </p>
      </div>

      <div className="space-y-4">
        {sessions.map((s) => (
          <div
            key={s.title}
            className="border border-white/10 rounded-2xl p-4 md:p-5 bg-slate-900/40"
          >
            <div className="flex flex-col md:flex-row md:justify-between gap-2">
              <div>
                <p className="text-xs text-secondary font-medium">{s.time}</p>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-slate-300 mt-1">{s.desc}</p>
              </div>
              {s.speakers.length > 0 && (
                <div className="text-xs text-slate-400 md:text-right">
                  <p className="font-semibold text-slate-200 mb-1">
                    Highlights
                  </p>
                  {s.speakers.map((sp) => (
                    <p key={sp}>{sp}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedule;
