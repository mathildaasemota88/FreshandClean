import { Users, Award, Clock, Heart, Star, Shield, Leaf, Calendar, CheckCircle } from "lucide-react";
import teamImage from "@/assets/team.jpg";
import teamImage2 from "@/assets/janitors-2.jpg";
import TestimonialCarousel from "@/components/TestimonialCarousel";

const AboutPage = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "ShineCraft exceeded all my expectations! My home has never looked better. The team was professional, punctual, and incredibly thorough. I especially appreciate how they pay attention to the little details that other services miss.",
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "I've been using ShineCraft for my office for over a year now. Consistently excellent service. They're reliable and pay attention to every detail. The team is always professional and respectful of our workspace.",
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      text: "The deep cleaning service was amazing! They tackled areas I hadn't cleaned in years. Highly recommend for anyone needing a fresh start. My kitchen and bathrooms look brand new!",
      date: "3 weeks ago",
    },
    {
      name: "David Thompson",
      rating: 5,
      text: "Best cleaning service in the DC area! They helped us prepare our home for sale and the results were incredible. Our realtor was impressed and we got multiple offers within days.",
      date: "2 months ago",
    },
    {
      name: "Jennifer Lee",
      rating: 5,
      text: "I was skeptical about hiring a cleaning service, but ShineCraft won me over. They use eco-friendly products which was important to me, and the team is so friendly. My weekly cleanings are the highlight of my week!",
      date: "1 week ago",
    },
    {
      name: "Robert Martinez",
      rating: 5,
      text: "The move-out cleaning service was exceptional. Our landlord was so impressed that we got our full security deposit back. Thank you ShineCraft for making our move stress-free!",
      date: "3 weeks ago",
    },
    {
      name: "Amanda Foster",
      rating: 5,
      text: "Professional, efficient, and thorough. The post-construction cleaning after our kitchen renovation was perfect. They removed all the dust and made everything spotless. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "James Wilson",
      rating: 5,
      text: "I've tried several cleaning services over the years, but ShineCraft is by far the best. Consistent quality, great communication, and reasonable prices. They've earned a customer for life!",
      date: "2 weeks ago",
    },
    {
      name: "Lisa Anderson",
      rating: 5,
      text: "The team at ShineCraft is wonderful! They're always on time, work efficiently, and my home smells and looks amazing after every visit. I love coming home to a clean house!",
      date: "4 weeks ago",
    },
    {
      name: "Thomas Brown",
      rating: 5,
      text: "Outstanding service from start to finish. The quote process was easy, scheduling was flexible, and the actual cleaning exceeded expectations. Worth every penny!",
      date: "1 month ago",
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "5 Years", label: "Experience" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: Heart, value: "100%", label: "Satisfaction Rate" },
  ];

  const values = [
    { icon: Users, title: "Customer First", description: "Your satisfaction is our top priority" },
    { icon: Award, title: "Quality Service", description: "Exceptional results every time" },
    { icon: Clock, title: "Always Punctual", description: "We respect your time" },
    { icon: Heart, title: "Genuine Care", description: "We treat your space like our own" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            About ShineCraft
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Your local cleaning experts dedicated to excellence, integrity, and care
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  Founded with a passion for cleanliness and customer satisfaction, ShineCraft Cleaning Services 
                  has been serving the DC Metro Area with pride, dedication, and unwavering commitment to excellence.
                </p>
                <p>
                  We understand that your home or office is more than just a space—it's where life happens, where 
                  memories are made, and where you deserve to feel comfortable and safe. That's why we approach 
                  every job with meticulous attention to detail, genuine respect, and unmatched professionalism.
                </p>
                <p>
                  Our team is fully trained, certified, insured, and committed to using only premium eco-friendly 
                  products that are safe for your family, pets, and the environment. We don't just clean—we care.
                </p>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={teamImage} 
                alt="ShineCraft Team" 
                className="rounded-2xl shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose ShineCraft?</h2>
            <p className="text-muted-foreground text-lg">What makes us stand out from the rest</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={teamImage2} 
                alt="Professional Cleaning Team" 
                className="rounded-2xl shadow-xl hover-lift"
              />
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Insured & Certified</h3>
                  <p className="text-muted-foreground">Fully licensed, bonded, and insured for your peace of mind. Our team undergoes rigorous background checks and professional training to ensure the highest standards of service and safety.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Eco-Friendly Products</h3>
                  <p className="text-muted-foreground">We use only environmentally responsible, non-toxic cleaning solutions that are safe for your family, pets, and the planet. Clean spaces shouldn't come at the cost of our environment.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Flexible Scheduling</h3>
                  <p className="text-muted-foreground">Your schedule is unique, and so is ours. We offer convenient booking options including evenings, weekends, and emergency services to fit seamlessly into your busy life.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-accent/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-7 w-7 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Satisfaction Guaranteed</h3>
                  <p className="text-muted-foreground">We stand behind our work with a 100% satisfaction guarantee. If you're not completely happy, we'll return and make it right—no questions asked.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="card-gradient rounded-xl p-6 text-center hover-lift border border-border">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Customer Reviews</h2>
            <div className="flex justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-muted-foreground text-lg">See what our clients are saying about us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="card-gradient rounded-xl p-6 hover-lift border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <p className="text-foreground mb-4 leading-relaxed">{review.text}</p>
                <p className="font-semibold text-primary">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
