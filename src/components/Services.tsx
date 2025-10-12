import { Code, Smartphone, Palette, TrendingUp } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Code,
    title: "Website Development",
    description: "Custom websites for businesses, schools, and hospitals. Responsive, fast, and SEO-optimized.",
    features: ["Business Websites", "School Portals", "Hospital Management", "E-commerce Stores"]
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native Android and iOS applications that provide seamless user experiences.",
    features: ["Android Apps", "iOS Apps", "Cross-platform", "Progressive Web Apps"]
  },
  {
    icon: Palette,
    title: "Graphics & Logo Design",
    description: "Eye-catching designs that make your brand stand out and leave lasting impressions.",
    features: ["Logo Design", "Brand Identity", "Social Media Graphics", "Marketing Materials"]
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to grow your online presence and reach your audience.",
    features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "Brand Campaigns"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From design to development — everything your business needs, all in one place.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;