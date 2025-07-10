import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ServiceCardProps {
  title: string
  description: string
  features: string[]
  icon: LucideIcon
  delay?: number
}

const ServiceCard = ({ title, description, features, icon: Icon, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className="h-full shadow-business hover:shadow-accent transition-all duration-300 border-border hover:border-accent/50 group">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
            <Icon className="w-8 h-8 text-accent" />
          </div>
          <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
            {title}
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-accent rounded-full mr-3 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
          <Button 
            variant="outline" 
            className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
          >
            Learn More
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default ServiceCard