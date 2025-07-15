import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Smartphone,
  ExternalLink
} from "lucide-react"

const footerSections = [
  {
    title: "Products",
    links: [
      { label: "iPhone 13 Pro", href: "#products" },
      { label: "iPhone 14 Pro", href: "#products" },
      { label: "iPhone 15 Pro", href: "#products" },
      { label: "iPhone 16 Pro", href: "#products" },
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Bulk Wholesale", href: "#services" },
      { label: "GCC Delivery", href: "#services" },
      { label: "Quality Assurance", href: "#services" },
      { label: "24/7 Support", href: "#services" },
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Our Mission", href: "#about" },
      { label: "Partnership", href: "#contact" },
      { label: "Contact", href: "#contact" },
    ]
  }
]

const regions = [
  "United Arab Emirates",
  "Saudi Arabia", 
  "Kuwait",
  "Qatar",
  "Bahrain",
  "Oman"
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">escotell</h3>
                <p className="text-sm text-muted-foreground">iphone at scale</p>
              </div>
              
              <p className="text-muted-foreground mb-6">
                Your trusted iPhone wholesale partner in the GCC region. 
                Sourcing premium devices from global markets for business success.
              </p>

              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <MapPin className="h-4 w-4 mr-2 text-primary" />
                  <span>Business Bay, Dubai, UAE</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  <a href="tel:+971522451443" className="hover:text-primary transition-colors">
                    +971 522451443
                  </a>
                </div>
                <div className="flex items-center text-sm">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  <a href="mailto:info@escotell.com" className="hover:text-primary transition-colors">
                    info@escotell.com
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Service Regions */}
        <div className="py-8 border-t border-border">
          <div className="text-center mb-6">
            <Badge variant="secondary" className="mb-2">
              <Globe className="h-4 w-4 mr-2" />
              GCC Coverage
            </Badge>
            <h4 className="text-lg font-semibold mb-2">We Serve</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((region) => (
              <Badge key={region} variant="outline" className="text-xs">
                {region}
              </Badge>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-8 border-t border-border">
          <div className="text-center">
            <h4 className="text-xl font-bold mb-2">Ready to Start Your Wholesale Journey?</h4>
            <p className="text-muted-foreground mb-6">
              Contact us today for competitive pricing and reliable iPhone wholesale solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <a href="#contact">
                  <Smartphone className="h-4 w-4 mr-2" />
                  Get Quote
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+971522451443">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {currentYear} Escotell. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="https://escotell.com" className="flex items-center hover:text-primary transition-colors">
                escotell.com
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}