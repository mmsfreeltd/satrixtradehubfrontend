import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart4, Globe, Shield, Clock, BarChartHorizontal, Lightbulb, Zap, BookOpen } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="border bg-card h-full transition-all duration-200 hover:shadow-md">
      <CardHeader>
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

export function FeaturesSection() {
  const features = [
    {
      icon: <BarChart4 className="h-6 w-6 text-primary" />,
      title: "Advanced Analytics",
      description: "Access detailed market analysis and real-time data to make informed trading decisions."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Global Markets",
      description: "Trade in multiple global markets and access a wide range of cryptocurrency and forex pairs."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Secure Trading",
      description: "Enterprise-grade security ensures your trades and personal information remain protected."
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "24/7 Trading",
      description: "Access markets and execute trades around the clock with our always-on platform."
    },
    {
      icon: <BarChartHorizontal className="h-6 w-6 text-primary" />,
      title: "Technical Indicators",
      description: "Utilize over 100 technical indicators to analyze market trends and patterns."
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "Expert Insights",
      description: "Receive trading recommendations and market insights from industry experts."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Fast Execution",
      description: "Execute trades with lightning-fast speed, ensuring you never miss market opportunities."
    },
    {
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      title: "Educational Resources",
      description: "Access comprehensive educational materials to enhance your trading knowledge and skills."
    }
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Powerful Trading Features
          </h2>
          <p className="text-xl text-muted-foreground">
            Our platform offers comprehensive tools and resources to enhance your trading experience and maximize your potential.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}