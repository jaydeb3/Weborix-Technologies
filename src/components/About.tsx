import { Target, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Weborix Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Weborix Technologies, we believe in empowering small businesses, schools, and startups 
            with digital solutions that make a difference. We're not just another tech company—we're 
            your partner in digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-muted-foreground">
              To make technology simple and accessible for everyone, from local businesses to educational institutions.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
              <Lightbulb className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-muted-foreground">
              We aim to bridge the digital divide by providing world-class technology solutions to businesses of all sizes.
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-secondary/50 hover:bg-secondary transition-colors animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Our Approach</h3>
            <p className="text-muted-foreground">
              We combine innovation with affordability, ensuring every client gets premium quality without breaking the bank.
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <blockquote className="text-2xl md:text-3xl font-semibold gradient-text italic">
            "Your dream project, our smart solution."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;