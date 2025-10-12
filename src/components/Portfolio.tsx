import { Card, CardContent } from "@/components/ui/card";
import portfolioSchool from "@/assets/portfolio-school.png";
import portfolioHospital from "@/assets/portfolio-hospital.png";
import portfolioBikeParts from "@/assets/portfolio-bikeparts.png";
import portfolioRestaurant from "@/assets/portfolio-restaurant.png";
import portfolioEvents from "@/assets/portfolio-events.png";
import portfolioSocial from "@/assets/portfolio-social.png";
import portfolioCoaching from "@/assets/portfolio-coaching.png";
import portfolioHotel from "@/assets/portfolio-hotel.png";
import portfolioSaree from "@/assets/portfolio-saree.png";

const portfolioItems = [
  {
    title: "Hospital Management System",
    description: "Streamlined patient records, appointment scheduling, and billing solutions.",
    image: portfolioHospital,
    category: "Healthcare"
  },
  {
    title: "School Management System",
    description: "Complete portal for attendance tracking, results management, and online admissions.",
    image: portfolioSchool,
    category: "Education"
  },
  {
    title: "Bike Parts E-commerce",
    description: "Modern online store for motorcycle parts with inventory management and secure checkout.",
    image: portfolioBikeParts,
    category: "E-commerce"
  },
  {
    title: "Restaurant Ordering App",
    description: "Mobile-first food ordering platform with real-time menu updates and delivery tracking.",
    image: portfolioRestaurant,
    category: "Food & Beverage"
  },
  {
    title: "Event Booking & Management",
    description: "Comprehensive event platform for ticket sales, venue management, and attendee tracking.",
    image: portfolioEvents,
    category: "Events"
  },
  {
    title: "Social Media Marketing Dashboard",
    description: "Complete social media management with analytics, campaign tracking, and scheduling tools.",
    image: portfolioSocial,
    category: "Digital Marketing"
  },
  {
    title: "Custom Coaching Mobile Apps",
    description: "Educational apps for coaching institutes with live classes, assignments, and progress monitoring.",
    image: portfolioCoaching,
    category: "Education"
  },
  {
    title: "Hotel Booking Website",
    description: "Luxury hotel website with room booking system, payment integration, photo gallery, and customer reviews.",
    image: portfolioHotel,
    category: "Hospitality"
  },
  {
    title: "Saree & Garments E-commerce App",
    description: "Traditional fashion e-commerce app with product listings, shopping cart, and secure payment gateway.",
    image: portfolioSaree,
    category: "E-commerce"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our successful projects across various industries and platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <Card 
              key={item.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {item.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;