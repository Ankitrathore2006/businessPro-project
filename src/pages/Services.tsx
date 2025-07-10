import { motion } from 'framer-motion'
import { Monitor, Megaphone, Users, Headphones, BarChart3, TrendingUp, CheckCircle } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const Services = () => {
  const services = [
    {
      title: 'IT Services',
      description: 'Comprehensive technology solutions designed to modernize your infrastructure and enhance operational efficiency.',
      features: [
        'Cloud Infrastructure Management',
        'Cybersecurity & Data Protection',
        'Custom Software Development',
        'System Integration & Migration',
        '24/7 Technical Support',
        'Disaster Recovery Planning'
      ],
      icon: Monitor,
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that drive engagement, increase brand visibility, and generate qualified leads.',
      features: [
        'Search Engine Optimization (SEO)',
        'Pay-Per-Click (PPC) Advertising',
        'Social Media Management',
        'Content Marketing Strategy',
        'Email Marketing Campaigns',
        'Analytics & Performance Tracking'
      ],
      icon: Megaphone,
    },
    {
      title: 'HR & Recruitment',
      description: 'Professional human resource solutions to help you attract, retain, and develop top talent for your organization.',
      features: [
        'Executive Search & Recruitment',
        'Talent Acquisition Strategy',
        'HR Policy Development',
        'Employee Training Programs',
        'Performance Management Systems',
        'Compensation & Benefits Consulting'
      ],
      icon: Users,
    },
    {
      title: 'Customer Support',
      description: 'World-class customer service solutions that enhance customer satisfaction and build lasting relationships.',
      features: [
        '24/7 Multi-channel Support',
        'Live Chat & Phone Support',
        'Help Desk Management',
        'Customer Success Programs',
        'Quality Assurance & Training',
        'CRM Integration & Management'
      ],
      icon: Headphones,
    },
    {
      title: 'Business Process Automation',
      description: 'Intelligent automation solutions that streamline operations, reduce costs, and improve productivity.',
      features: [
        'Workflow Automation Design',
        'Process Optimization Analysis',
        'RPA Implementation',
        'Data Integration Solutions',
        'Performance Monitoring',
        'ROI Measurement & Reporting'
      ],
      icon: BarChart3,
    },
    {
      title: 'Sentiment Marketing',
      description: 'Data-driven marketing strategies based on real-time customer sentiment analysis and market insights.',
      features: [
        'Sentiment Analysis & Monitoring',
        'Brand Reputation Management',
        'Consumer Behavior Insights',
        'Market Research & Analysis',
        'Crisis Communication Management',
        'Competitive Intelligence'
      ],
      icon: TrendingUp,
    },
  ]

  const benefits = [
    'Proven track record with 500+ successful projects',
    'Industry-certified professionals and experts',
    'Customized solutions tailored to your business needs',
    '24/7 support and maintenance services',
    'Scalable solutions that grow with your business',
    'Competitive pricing with transparent billing'
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Professional <span className="text-accent">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Comprehensive business solutions designed to accelerate your growth and optimize 
              your operations for maximum efficiency and success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From technology infrastructure to marketing strategy, we provide end-to-end 
              solutions that drive measurable results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Why Choose BusinessPro?
              </h2>
              <p className="text-muted-foreground mb-8">
                We understand that every business is unique. That's why we take a personalized 
                approach to every project, ensuring our solutions align perfectly with your 
                goals and objectives.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-primary mb-6">
                Ready to Get Started?
              </h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how our services can help transform your business. 
                Schedule a free consultation with our experts today.
              </p>
              <div className="space-y-4">
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
                <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and client satisfaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery & Analysis',
                description: 'We start by understanding your business goals, challenges, and requirements through comprehensive analysis.'
              },
              {
                step: '02',
                title: 'Strategy & Planning',
                description: 'Our experts develop a customized strategy and detailed project plan tailored to your specific needs.'
              },
              {
                step: '03',
                title: 'Implementation & Support',
                description: 'We execute the plan with precision and provide ongoing support to ensure long-term success.'
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-accent-foreground">{process.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-primary mb-4">{process.title}</h3>
                <p className="text-muted-foreground">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services