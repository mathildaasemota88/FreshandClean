import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ShineCraft Logo" className="h-12 w-12" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">ShineCraft</span>
                <span className="text-sm text-primary-foreground/70">Cleaning Services</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Your trusted cleaning partner. Affordable, reliable, and spotless every time.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-primary-foreground/10 hover:bg-primary-foreground/20 p-2 rounded-lg transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm">
              <a href="tel:2405551182" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="h-4 w-4" />
                <span>(240) 555-1182</span>
              </a>
              <a href="mailto:hello@shinecraftcleaning.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="h-4 w-4" />
                <span>hello@shinecraftcleaning.com</span>
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>DC Metro Area</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Hours</h3>
            <div className="flex items-start gap-2 text-sm">
              <Clock className="h-4 w-4 mt-0.5" />
              <div>
                <p>Mon–Fri: 7AM–7PM</p>
                <p>Sat: 8AM–4PM</p>
                <p>Sun: Emergency Only</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} ShineCraft Cleaning. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
