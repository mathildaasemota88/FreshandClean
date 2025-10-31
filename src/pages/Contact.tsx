import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real application, this would send data to a backend
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient section-padding text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
            Let's Get Your Place Sparkling!
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Request a free quote and we'll get back to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="card-gradient rounded-2xl p-8 border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(240) 555-1234"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                    Service Type *
                  </label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential">Residential Cleaning</SelectItem>
                      <SelectItem value="commercial">Commercial Cleaning</SelectItem>
                      <SelectItem value="deep">Deep Cleaning</SelectItem>
                      <SelectItem value="move">Move In/Out Cleaning</SelectItem>
                      <SelectItem value="construction">Post-Construction Cleaning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your cleaning needs..."
                    rows={5}
                  />
                </div>

                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Request a Quote
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="bg-card rounded-2xl p-8 border border-border h-fit">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href="tel:2405551182" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">(240) 555-1182</p>
                  </div>
                </a>

                <a href="mailto:hello@shinecraftcleaning.com" className="flex items-start gap-4 hover:opacity-80 transition-opacity">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@shinecraftcleaning.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Service Area</h4>
                    <p className="text-muted-foreground">DC Metro Area</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Hours</h4>
                    <div className="text-muted-foreground">
                      <p>Mon–Fri: 7AM–7PM</p>
                      <p>Sat: 8AM–4PM</p>
                      <p>Sun: Emergency Only</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="card-gradient rounded-2xl overflow-hidden border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198821.71243788906!2d-77.20613039999999!3d38.8993488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c6de5af6e45b%3A0xc2524522d4885d2a!2sWashington%2C%20DC!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Service Area Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">Find answers to common questions about our services</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What areas do you service?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We proudly serve the entire DC Metro Area including Washington DC, Maryland, and Northern Virginia. Contact us to confirm if we service your specific location.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Do I need to provide cleaning supplies?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No! We bring all necessary supplies and equipment. We use professional-grade, eco-friendly cleaning products that are safe for your family and pets.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How much does cleaning cost?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Pricing varies based on the size of your space, service type, and frequency. Contact us for a free, no-obligation quote tailored to your specific needs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are you insured and bonded?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we are fully licensed, insured, and bonded. All our team members undergo thorough background checks and professional training for your peace of mind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What if I'm not satisfied with the cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                We offer a 100% satisfaction guarantee. If you're not completely happy with our service, let us know within 24 hours and we'll return to make it right at no additional charge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I schedule recurring cleanings?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! We offer flexible scheduling options including weekly, bi-weekly, and monthly recurring services. Regular customers also enjoy special discounted rates.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card rounded-lg border border-border px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Do I need to be home during the cleaning?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                No, you don't need to be present. Many of our clients provide us with access instructions and go about their day. We'll securely lock up when we're finished.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
