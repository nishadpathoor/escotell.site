import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Zap, Shield, Smartphone } from "lucide-react"
import iphone13Pro from "@/assets/iphone-13-pro.jpg"
import iphone14Pro from "@/assets/iphone-14-pro.jpg"
import iphone15Pro from "@/assets/iphone-15-pro.jpg"
import iphone16Pro from "@/assets/iphone-16-pro.jpg"

const products = [
  {
    id: 1,
    name: "iPhone 13 Pro",
    image: iphone13Pro,
    features: ["A15 Bionic Chip", "Pro Camera System", "Super Retina XDR"],
    colors: ["Graphite", "Gold", "Silver", "Sierra Blue"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    badge: "Popular"
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    image: iphone14Pro,
    features: ["A16 Bionic Chip", "Dynamic Island", "48MP Main Camera"],
    colors: ["Space Black", "Silver", "Gold", "Deep Purple"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    badge: "Best Value"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    image: iphone15Pro,
    features: ["A17 Pro Chip", "Titanium Design", "Action Button"],
    colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    badge: "Premium"
  },
  {
    id: 4,
    name: "iPhone 16 Pro",
    image: iphone16Pro,
    features: ["A18 Pro Chip", "Camera Control", "Enhanced AI"],
    colors: ["Black Titanium", "Natural Titanium", "White Titanium", "Desert Titanium"],
    storage: ["128GB", "256GB", "512GB", "1TB"],
    badge: "Latest"
  }
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            <Smartphone className="h-4 w-4 mr-2" />
            Premium Collection
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Latest iPhone Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From iPhone 13 to the latest iPhone 16 Pro - all models available in bulk quantities 
            with competitive wholesale pricing for GCC distribution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-contain bg-gradient-to-b from-muted/20 to-transparent p-4"
                />
                <Badge 
                  className="absolute top-4 right-4"
                  variant={product.badge === "Latest" ? "default" : "secondary"}
                >
                  {product.badge}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <Star className="h-3 w-3 mr-2 text-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Available Colors:</h4>
                  <div className="flex flex-wrap gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {color}
                      </Badge>
                    ))}
                    {product.colors.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{product.colors.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium mb-2">Storage Options:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {product.storage.map((storage, index) => (
                      <Badge key={index} variant="secondary" className="text-xs justify-center">
                        {storage}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full">
                  Request Quote
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-primary/5 border-primary/20">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-primary mr-3" />
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Official Apple Warranty Available</h3>
            <p className="text-muted-foreground mb-4">
              Select models come with official Apple warranty coverage
            </p>
            <Button variant="outline">
              Learn More
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}