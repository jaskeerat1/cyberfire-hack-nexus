const Vision = () => {
  const visionItems = [
    {
      title: "Foster Collaboration",
      description: "Build connections between developers, designers, and innovators from diverse backgrounds.",
      icon: "🤝"
    },
    {
      title: "Solve Real Problems",
      description: "Address real-world challenges through technology and creative problem-solving.",
      icon: "🧩"
    },
    {
      title: "Mentorship & Growth",
      description: "Provide guidance from industry experts and experienced developers.",
      icon: "🚀"
    },
    {
      title: "Celebrate Innovation",
      description: "Recognize and reward creative solutions and technological breakthroughs.",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Our Vision
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Empowering the next generation of tech innovators through collaboration, 
            mentorship, and cutting-edge challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {visionItems.map((item, index) => (
            <div key={index} className="card-cyber text-center group">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-orbitron font-semibold text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;