const  Sponsors = () => {
  const sponsorTiers = [
    {
      title: "Devfolio",
      logo : 'https://raw.githubusercontent.com/devfolioco/brand-assets/f523906e2faeabd9e9f12d4ba62f53aa5b45b385/Logo%20+%20Text%20-%20White/Devfolio%20-%20White.svg',
      color: "primary"
    },
    {
      title: "ETH India",
      logo : 'https://github.com/ETHIndia/brand-assets/blob/master/On%20Dark/ETHIndia.png?raw=true',
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
              Sponsors
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Partnering with industry leaders to create an unforgettable hackathon experience
          </p>
        </div>

        {/* Centered sponsor tiers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-0 mb-8 justify-center items-center">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="card-cyber text-center group mx-auto my-4">
              <div>
                <img src={tier.logo} className="m-4 md:w-[10vw] w-[60vw]" />
              </div>
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
            <a href="mailto:collab.geekroom@gmail.com" className="btn-cyber inline-block cursor-target">
              Become a Sponsor
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;