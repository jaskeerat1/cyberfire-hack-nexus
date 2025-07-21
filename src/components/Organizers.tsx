import organizerLogo from "@/assets/organizer-logo.jpg";

const organizers = [
  { name: "Jastej Singh", role: "Head Organizer" },
  { name: "Dhairyajeet Singh", role: "Head Organizer" },
  { name: "Japneet Singh", role: "Head Organizer" },
  { name: "Jaskeerat Singh", role: "Head Organizer" },
];

export default function Organizers() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-card/80 to-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold text-primary mb-6">
            Head Organizers
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8"></div>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Meet the team behind Hack Odyssey
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mx-2 md:mx-8">
          {organizers.map((org, idx) => (
            <div
              key={org.name}
              className="card-cyber text-center group flex flex-col items-center p-10 bg-background/90 rounded-2xl shadow-xl mx-auto"
              style={{ minHeight: 360, minWidth: 250, maxWidth: 300 }}
            >
              <div className="w-32 h-32 mb-6 rounded-full border-2 border-primary bg-background flex items-center justify-center overflow-hidden shadow-[0_4px_24px_hsl(266,100%,86%,0.08)]">
                <img
                  src={organizerLogo}
                  alt={org.name}
                  className="w-28 h-28 object-cover rounded-full"
                  draggable={false}
                />
              </div>
              <h3 className="text-xl font-orbitron font-bold text-primary mb-2">
                {org.name}
              </h3>
              <p className="text-base text-secondary font-semibold uppercase tracking-wide">
                {org.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}