const Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Title Sponsor",
      description: "Premier partnership with maximum visibility",
      benefits: ["Keynote speaker slot", "Logo on all materials", "Dedicated booth space", "Social media promotion"],
      color: "primary"
    },
    {
      title: "Platinum Sponsors",
      description: "Premium sponsorship with extensive benefits",
      benefits: ["Speaker session", "Large logo placement", "Swag distribution", "Mentorship opportunities"],
      color: "secondary"
    },
    {
      title: "Gold Sponsors",
      description: "Significant brand exposure and engagement",
      benefits: ["Medium logo placement", "Booth space", "Resume access", "Networking opportunities"],
      color: "accent"
    },
    {
      title: "Silver Sponsors",
      description: "Supporting partnership with brand visibility",
      benefits: ["Small logo placement", "Swag inclusion", "Digital promotion", "Event recognition"],
      color: "muted"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Our Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Partnering with industry leaders to create an unforgettable hackathon experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="card-cyber text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full border-2 border-${tier.color} flex items-center justify-center`}>
                <div className={`w-8 h-8 rounded-full bg-${tier.color}`}></div>
              </div>
              <h3 className="text-xl font-orbitron font-semibold text-foreground mb-3">
                {tier.title}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {tier.description}
              </p>
              <ul className="space-y-2">
                {tier.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="text-sm text-foreground/80 flex items-center">
                    <div className={`w-2 h-2 rounded-full bg-${tier.color} mr-2 flex-shrink-0`}></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Sponsor logos placeholder */}
        <div className="text-center">
          <h3 className="text-2xl font-orbitron font-semibold text-foreground mb-8">
            Interested in Sponsoring?
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join us in empowering the next generation of tech innovators
          </p>
          <div className="inline-block">
            <a href="mailto:collab.geekroom@gmail.com" className="btn-cyber inline-block">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;