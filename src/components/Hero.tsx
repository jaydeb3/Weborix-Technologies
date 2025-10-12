import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDevices from "@/assets/hero-devices.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-secondary/30">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Building Digital Dreams into{" "}
              <span className="gradient-text">Reality</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              We design and develop modern websites, apps, and brands that help your business grow online.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="group shadow-lg hover:shadow-xl transition-all">
                Let's Build Together
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="shadow-md">
                View Our Work
              </Button>
            </div>

            <div className="flex items-center gap-8 justify-center lg:justify-start text-sm">
              <div>
                <p className="text-2xl font-bold gradient-text">50+</p>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold gradient-text">100%</p>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <p className="text-2xl font-bold gradient-text">24/7</p>
                <p className="text-muted-foreground">Support</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero image */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <img 
              src={heroDevices} 
              alt="Modern web and mobile applications" 
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;