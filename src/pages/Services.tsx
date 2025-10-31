import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, TrendingUp, HardHat, Wind, Refrigerator, ShirtIcon } from "lucide-react";
import residentialImg from "@/assets/service-residential.jpg";
import commercialImg from "@/assets/service-commercial.jpg";
import deepCleanImg from "@/assets/service-deep.jpg";
import moveInImg from "@/assets/service-movein.jpg";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Detailed and consistent care for every room in your home. We handle everything from kitchen and bathrooms to bedrooms and living spaces, ensuring your home is always guest-ready.",
      features: ["Weekly or bi-weekly service", "Custom cleaning plans", "All supplies provided", "Satisfaction guaranteed"],
      image: residentialImg,
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning for offices and facilities. We maintain your business environment to the highest standards, creating a clean and productive workspace for your team.",
      features: ["After-hours scheduling", "Daily or weekly service", "Eco-friendly products", "Professional team"],
      image: commercialImg,
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough top-to-bottom refresh for neglected spaces. Perfect for spring cleaning, preparing for guests, or tackling areas that need extra attention.",
      features: ["Detailed surface cleaning", "Behind appliances", "Baseboards & fixtures", "Cabinet interiors"],
      image: deepCleanImg,
    },
    {
      icon: TrendingUp,
      title: "Move In/Out Cleaning",
      description: "Stress-free transitions for new or vacated homes. We ensure your old place is spotless for the next tenant or your new home is fresh and ready for you.",
      features: ["Complete property cleaning", "Appliance cleaning", "Window washing", "Flexible scheduling"],
      image: moveInImg,
    },
    {
      icon: HardHat,
      title: "Post-Construction Cleaning",
      description: "Remove dust and debris for a flawless finish after renovations or new construction. We handle the tough cleanup so you can enjoy your newly completed space.",
      features: ["Dust removal", "Paint & sticker removal", "Floor polishing", "Final touch cleaning"],
      image: deepCleanImg,
    },
  ];

  const addOns = [
    {
      icon: Wind,
      title: "Window Cleaning",
      description: "Crystal clear windows inside and out",
    },
    {
      icon: Refrigerator,
      title: "Fridge & Oven Deep Clean",
      description: "Thorough appliance interior cleaning",
    },
    {
      icon: ShirtIcon,
      title: "Laundry Service",
      description: "Washing, drying, and folding",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            From homes to offices, we make every space shine. Professional cleaning solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-gradient rounded-2xl overflow-hidden hover-lift border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
                    </div>
                    <div className="p-8 md:p-10">
                      <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-4">{service.title}</h2>
                      <p className="text-muted-foreground text-lg mb-6">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-foreground">
                            <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link to="/contact">
                        <Button variant="cta" size="lg">
                          Request Quote
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Additional Services</h2>
            <p className="text-muted-foreground text-lg">Enhance your cleaning experience with our add-on services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOns.map((addon, index) => {
              const Icon = addon.icon;
              return (
                <div
                  key={index}
                  className="card-gradient rounded-xl p-6 text-center hover-lift border border-border"
                >
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{addon.title}</h3>
                  <p className="text-muted-foreground">{addon.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and let us create a custom cleaning plan for your needs.
          </p>
          <Link to="/contact">
            <Button variant="cta" size="xl">
              Get Your Free Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
