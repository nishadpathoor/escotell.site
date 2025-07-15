import { ArrowRight, Globe, Shield, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import dubaiHero from "@/assets/dubai-hero.jpg"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={dubaiHero} 
          alt="Dubai Business Bay" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 dark:bg-background/80" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Globe className="h-4 w-4 mr-2" />
              Trusted Wholesale Partner in GCC
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                iPhone
              </span>
              <br />
              <span className="text-foreground">at Scale</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Premium bulk iPhones sourced directly from US, Canada, and Japan. 
              Wholesale distribution across GCC with official Apple warranty available.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Inventory
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Shield, title: "Apple Warranty", desc: "Official warranty available" },
                { icon: Truck, title: "GCC Delivery", desc: "All over GCC regions" },
                { icon: Globe, title: "Global Sourcing", desc: "US, Canada & Japan" },
              ].map((feature, index) => (
                <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
                  <feature.icon className="h-8 w-8 text-primary mb-2" />
                  <h3 className="font-semibold text-sm">{feature.title}</h3>
                  <p className="text-xs text-muted-foreground">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="lg:justify-self-end">
            <Card className="p-8 bg-card/80 backdrop-blur-lg shadow-elegant">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Escotell?</h3>
              <div className="space-y-6">
                {[
                  { number: "1000+", label: "Devices Monthly", desc: "Bulk inventory management" },
                  { number: "7", label: "GCC Countries", desc: "Complete regional coverage" },
                  { number: "3", label: "Source Markets", desc: "US, Canada, Japan" },
                  { number: "24/7", label: "Support", desc: "Dedicated business support" },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm font-medium">{stat.label}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{stat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}