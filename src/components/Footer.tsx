import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Weborix Technologies
            </h3>
            <p className="text-background/80 mb-4">
              We build brands, not just websites. Transform your digital presence with our cutting-edge solutions that drive real business results.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61580947276115" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jaydeb-pal-836299263/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-background/80 hover:text-background transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-background/80 hover:text-background transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-background/80 hover:text-background transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/80 hover:text-background transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:8967821570" className="text-background/80 hover:text-background transition-colors">
                  +91 8967821570
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:weborix.com@gmail.com" className="text-background/80 hover:text-background transition-colors text-sm">
                  weborix.com@gmail.com
                </a>
              </li>
              <li className="text-background/80 text-sm mt-4">
                <strong>Jhargram Office:</strong><br />
                Jhargram, West Bengal<br />
                India, 721514
              </li>
              <li className="text-background/80 text-sm mt-4">
                <strong>Kolkata Office:</strong><br />
                Sukant Nagar, Sector IV<br />
                Bidhannagar, Kolkata<br />
                West Bengal 700098, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/80 mb-2">
            © {currentYear} Weborix Technologies. All Rights Reserved.
          </p>
          <p className="text-background/60 text-sm italic">
            Smart Digital Solutions for Growing Businesses.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;