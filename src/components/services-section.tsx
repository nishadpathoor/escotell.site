import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Truck, 
  Shield, 
  Globe, 
  Package, 
  Headphones, 
  CreditCard,
  CheckCircle,
  Clock,
  Users
} from "lucide-react"

const services = [
  {
    icon: Package,
    title: "Bulk Wholesale",
    description: "Large quantity orders with competitive pricing for retailers and distributors",
    features: ["Minimum order quantities", "Volume discounts", "Flexible payment terms"],
    color: "text-blue-600"
  },
  {
    icon: Truck,
    title: "GCC Delivery",
    description: "Comprehensive delivery network covering all GCC countries",
    features: ["Dubai to all GCC", "Express shipping", "Tracked deliveries"],
    color: "text-green-600"
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous testing and verification of all devices before shipment",
    features: ["100% authentic", "Quality testing", "Warranty support"],
    color: "text-purple-600"
  },
  {
    icon: Globe,
    title: "Global Sourcing",
    description: "Direct partnerships with suppliers in US, Canada, and Japan",
    features: ["Direct sourcing", "Latest models", "Competitive rates"],
    color: "text-orange-600"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Dedicated business support for all your wholesale needs",
    features: ["Business hours support", "Technical assistance", "Order tracking"],
    color: "text-red-600"
  },
  {
    icon: CreditCard,
    title: "Flexible Payment",
    description: "Multiple payment options tailored for business transactions",
    features: ["Credit terms", "Multiple currencies", "Secure transactions"],
    color: "text-indigo-600"
  }
]

const process = [
  {
    step: "01",
    title: "Inquiry",
    description: "Contact us with your requirements and quantities"
  },
  {
    step: "02", 
    title: "Quote",
    description: "Receive detailed pricing and availability within 24 hours"
  },
  {
    step: "03",
    title: "Order",
    description: "Confirm your order with flexible payment terms"
  },
  {
    step: "04",
    title: "Delivery",
    description: "Fast and secure delivery across GCC regions"
  }
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        {/* Services */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Users className="h-4 w-4 mr-2" />
            Business Services
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Complete Wholesale Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end services designed for businesses looking to scale their iPhone distribution 
            across the GCC market with reliable partnership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ${service.color} mb-4`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="bg-section-gradient rounded-3xl p-8 lg:p-16">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Clock className="h-4 w-4 mr-2" />
              Simple Process
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              How It Works
            </h3>
            <p className="text-lg text-muted-foreground">
              Get started with your bulk iPhone orders in just 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8" />
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Start Your Order
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}