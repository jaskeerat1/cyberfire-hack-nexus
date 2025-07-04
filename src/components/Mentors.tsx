const Mentors = () => {
  const mentors = [
    {
      name: "Dr. Sarah Chen",
      title: "Senior Software Engineer at Google",
      bio: "Full-stack developer with 10+ years in AI/ML",
      expertise: ["Machine Learning", "Cloud Computing", "System Design"]
    },
    {
      name: "Raj Patel",
      title: "CTO at TechCorp",
      bio: "Startup founder and blockchain technology expert",
      expertise: ["Blockchain", "Fintech", "Entrepreneurship"]
    },
    {
      name: "Maria Rodriguez",
      title: "Principal Developer at Microsoft",
      bio: "Frontend architect and UX design specialist",
      expertise: ["Frontend", "UX/UI Design", "React"]
    },
    {
      name: "David Kim",
      title: "Lead DevOps Engineer at Amazon",
      bio: "Infrastructure and cloud deployment specialist",
      expertise: ["DevOps", "AWS", "Kubernetes"]
    },
    {
      name: "Priya Singh",
      title: "Data Scientist at Meta",
      bio: "AI researcher focused on computer vision",
      expertise: ["Data Science", "Computer Vision", "Python"]
    },
    {
      name: "Alex Johnson",
      title: "Mobile App Developer",
      bio: "Cross-platform mobile development expert",
      expertise: ["React Native", "Flutter", "Mobile UI"]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Meet Your Mentors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Learn from industry experts who will guide you throughout your hackathon journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mentors.map((mentor, index) => (
            <div key={index} className="card-cyber text-center group">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-2xl font-orbitron font-bold text-primary-foreground">
                  {mentor.name.split(' ').map(name => name[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-xl font-orbitron font-semibold text-foreground mb-2">
                {mentor.name}
              </h3>
              
              <p className="text-primary font-medium mb-3">
                {mentor.title}
              </p>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {mentor.bio}
              </p>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {mentor.expertise.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-3 py-1 text-xs font-orbitron bg-primary/10 text-primary rounded-full border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship info */}
        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-6">
              Mentorship Sessions
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-cyber">
                <h4 className="font-orbitron font-semibold text-primary mb-2">Round 1</h4>
                <p className="text-muted-foreground text-sm">Initial guidance and idea validation</p>
              </div>
              <div className="card-cyber">
                <h4 className="font-orbitron font-semibold text-secondary mb-2">Round 2</h4>
                <p className="text-muted-foreground text-sm">Mid-development support and troubleshooting</p>
              </div>
              <div className="card-cyber">
                <h4 className="font-orbitron font-semibold text-accent mb-2">Final Round</h4>
                <p className="text-muted-foreground text-sm">Pre-submission review and presentation tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;