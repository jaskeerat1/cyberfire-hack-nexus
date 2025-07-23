const Timeline = () => {
  const timelineEvents = [
    {
      time: "Day 1 - 10:00 AM",
      title: "Opening Ceremony",
      description: "Welcome address, rules briefing, and team formation",
      status: "upcoming"
    },
    {
      time: "Day 1 - 12:00 PM",
      title: "Hacking Begins",
      description: "48-hour coding marathon officially starts",
      status: "upcoming"
    },
    {
      time: "Day 1 - 2:00 PM",
      title: "First Mentoring Round",
      description: "Get guidance from industry experts",
      status: "upcoming"
    },
    {
      time: "Day 1 - 6:00 PM",
      title: "Industry Speaker Session",
      description: "Keynote by leading tech professionals",
      status: "upcoming"
    },
    {
      time: "Day 2 - 12:00 AM",
      title: "Midnight Chill Zone",
      description: "Games, snacks, and networking break",
      status: "upcoming"
    },
    {
      time: "Day 2 - 10:00 AM",
      title: "Second Mentoring Round",
      description: "Final guidance before submissions",
      status: "upcoming"
    },
    {
      time: "Day 3 - 12:00 PM",
      title: "Submission Deadline",
      description: "All projects must be submitted",
      status: "upcoming"
    },
    {
      time: "Day 3 - 4:00 PM",
      title: "Judging & Closing",
      description: "Project presentations and award ceremony",
      status: "upcoming"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Event Timeline
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-subheading">
            48 hours of intense coding, learning, and innovation
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent"></div>

          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className="relative flex items-start gap-8"
                data-aos={index % 4 === 0 ? "fade-up" : index % 4 === 1 ? "fade-right" : index % 4 === 2 ? "fade-left" : "zoom-in"}
                data-aos-delay={index * 80}
              >
                {/* Timeline dot */}
                <div className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                  event.status === 'completed' 
                    ? 'bg-primary border-primary' 
                    : event.status === 'active' 
                    ? 'bg-secondary border-secondary animate-pulse' 
                    : 'bg-card border-muted'
                }`}>
                  <div className={`w-3 h-3 rounded-full ${
                    event.status === 'completed' 
                      ? 'bg-primary-foreground' 
                      : event.status === 'active' 
                      ? 'bg-secondary-foreground' 
                      : 'bg-muted-foreground'
                  }`}></div>
                </div>

                {/* Event content */}
                <div className="flex-1 pb-8">
                  <div className="card-cyber">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <h3 className="text-xl font-orbitron font-semibold text-foreground">
                        {event.title}
                      </h3>
                      <span className="text-sm font-orbitron text-primary">
                        {event.time}
                      </span>
                    </div>
                    <p className="text-muted-accessible">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;