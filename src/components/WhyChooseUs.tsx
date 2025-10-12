import { Zap, DollarSign, Shield, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery, Reliable Results",
    description: "We deliver quality projects on time, every time."
  },
  {
    icon: DollarSign,
    title: "Affordable Packages",
    description: "Premium solutions that fit every budget and business size."
  },
  {
    icon: Shield,
    title: "Trusted by Local Clients",
    description: "Building long-term relationships with businesses in our community."
  },
  {
    icon: Sparkles,
    title: "Innovative & Scalable",
    description: "Future-proof designs that grow with your business."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="gradient-text">Weborix</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine innovation, affordability, and reliability to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group text-center p-8 rounded-2xl bg-card hover:bg-card/80 border-2 border-transparent hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent mb-6 group-hover:scale-110 transition-transform">
                <reason.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;