import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Building, 
  Award, 
  TrendingUp, 
  Globe2,
  Handshake,
  Target,
  Zap
} from "lucide-react"

const stats = [
  { number: "2020", label: "Founded", icon: Building },
  { number: "50K+", label: "Devices Sold", icon: TrendingUp },
  { number: "200+", label: "Business Partners", icon: Handshake },
  { number: "7", label: "GCC Countries", icon: Globe2 },
]

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "Every device undergoes rigorous quality checks to ensure premium standards"
  },
  {
    icon: Handshake,
    title: "Trust & Reliability", 
    description: "Building long-term partnerships through transparent business practices"
  },
  {
    icon: Zap,
    title: "Speed & Efficiency",
    description: "Fast processing and delivery to meet your business timelines"
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering exceptional service and support"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge variant="secondary" className="mb-4">
              <Building className="h-4 w-4 mr-2" />
              About Escotell
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted iPhone Wholesale Partner
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Based in the heart of Business Bay, Dubai, Escotell has emerged as a leading wholesale 
              distributor of premium iPhones across the GCC region. We specialize in sourcing 
              authentic devices from established markets and delivering them at scale to businesses 
              throughout the Middle East.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our strategic partnerships with suppliers in the US, Canada, and Japan enable us to 
              offer competitive pricing while maintaining the highest quality standards. With official 
              Apple warranty options and comprehensive business support, we're committed to powering 
              your success in the mobile device market.
            </p>

            <div className="flex items-center mb-8">
              <MapPin className="h-5 w-5 text-primary mr-2" />
              <span className="text-muted-foreground">Business Bay, Dubai, UAE</span>
            </div>

            <Button size="lg" className="px-8">
              Partner With Us
            </Button>
          </div>

          {/* Stats & Values */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>

            {/* Values */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6 text-center">Our Values</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="text-center">
                    <value.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">{value.title}</h4>
                    <p className="text-xs text-muted-foreground">{value.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <Card className="max-w-4xl mx-auto p-8 lg:p-12 bg-primary/5 border-primary/20">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              "To be the most trusted and efficient iPhone wholesale partner in the GCC region, 
              providing businesses with premium devices, competitive pricing, and exceptional service 
              that drives their growth and success in the mobile technology market."
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}