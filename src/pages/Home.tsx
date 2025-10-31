import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, Building2, Sparkles, ArrowRight, CheckCircle, Shield, Leaf, Calendar, Star } from "lucide-react";
import heroVideo from "@/assets/hero-video.mp4";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const HomePage = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Cleaning",
      description: "Keep your home sparkling with our detailed and consistent care for every room.",
    },
    {
      icon: Building2,
      title: "Commercial Cleaning",
      description: "Professional cleaning for offices and facilities that keeps your business looking its best.",
    },
    {
      icon: Sparkles,
      title: "Deep Cleaning",
      description: "Thorough top-to-bottom refresh for spaces that need extra attention.",
    },
    {
      icon: ArrowRight,
      title: "Move In/Out Cleaning",
      description: "Stress-free transitions for new or vacated homes with complete cleaning.",
    },
  ];

  const benefits = [
    { icon: Shield, text: "Insured & Certified" },
    { icon: Leaf, text: "Eco-Friendly Products" },
    { icon: Calendar, text: "Flexible Scheduling" },
    { icon: CheckCircle, text: "Satisfaction Guaranteed" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/80" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in leading-tight">
            Where Clean Meets Care
          </h1>
          <p className="text-2xl md:text-3xl text-primary-foreground mb-4 font-semibold animate-slide-up">
            Every Surface, Every Room, Every Time
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-up">
            We don't just tidy up; we create a healthier, happier environment so you can relax, recharge, and enjoy the spaces you love.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </section>

      {/* Quick Intro */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl text-foreground leading-relaxed">
            We provide residential and commercial cleaning with care, consistency, and attention to detail. 
            Our experienced team delivers exceptional results that exceed expectations every time.
          </p>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground text-lg">Professional cleaning solutions for every need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card-gradient rounded-xl p-6 hover-lift border border-border"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="cta" size="lg">
                See All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ShineCraft?</h2>
            <p className="text-muted-foreground text-lg">What makes us stand out from the rest</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <p className="font-semibold text-foreground text-lg">{benefit.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Teaser */}
      <section className="section-padding bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-lg">Rated 5/5 by our satisfied customers</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <TestimonialCarousel />
          </div>

          <div className="text-center mt-10">
            <p className="text-lg font-semibold text-foreground mb-4">Review Us On</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card hover:bg-secondary px-6 py-3 rounded-lg transition-colors border border-border">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-medium">Google</span>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card hover:bg-secondary px-6 py-3 rounded-lg transition-colors border border-border">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-medium">Facebook</span>
              </a>
              <a href="https://yelp.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-card hover:bg-secondary px-6 py-3 rounded-lg transition-colors border border-border">
                <Star className="h-5 w-5 text-accent fill-accent" />
                <span className="font-medium">Yelp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-primary-foreground mb-6">
            Get a Cleaning Quote Today
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Ready to experience the ShineCraft difference? Contact us for a free, no-obligation quote.
          </p>
          <Link to="/contact">
            <Button variant="hero" size="xl">
              Contact Us
            </Button>
          </Link>
          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 text-primary-foreground">
            <a href="tel:2405551182" className="flex items-center gap-2 hover:text-accent transition-colors">
              📞 (240) 555-1182
            </a>
            <a href="mailto:hello@shinecraftcleaning.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              ✉️ hello@shinecraftcleaning.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

