import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, Clock, Globe } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering businesses through innovative technology and strategic solutions.'
    },
    {
      icon: Eye,
      title: 'Visionary Approach',
      description: 'Leading the future of business transformation with cutting-edge solutions.'
    },
    {
      icon: Award,
      title: 'Excellence First',
      description: 'Committed to delivering exceptional quality in every project we undertake.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our priority. We build lasting partnerships with our clients.'
    }
  ]

  const achievements = [
    { icon: Users, number: '500+', label: 'Satisfied Clients' },
    { icon: Clock, number: '10+', label: 'Years Experience' },
    { icon: Globe, number: '25+', label: 'Countries Served' },
    { icon: Award, number: '98%', label: 'Client Retention' }
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
              About <span className="text-accent">BusinessPro</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              A leading provider of comprehensive business solutions, dedicated to helping 
              organizations achieve their full potential through innovative technology and strategic expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <p className="text-muted-foreground mb-6">
                Founded over a decade ago, BusinessPro emerged from a simple yet powerful vision: 
                to bridge the gap between traditional business practices and modern technological solutions. 
                Our journey began with a small team of passionate professionals who believed that every 
                business, regardless of size, deserves access to world-class services.
              </p>
              <p className="text-muted-foreground mb-6">
                Today, we've grown into a trusted partner for over 500 businesses worldwide, offering 
                comprehensive solutions in IT services, digital marketing, human resources, customer 
                support, and business process automation. Our success is measured not just by our 
                growth, but by the success of our clients.
              </p>
              <p className="text-muted-foreground">
                We continue to innovate and evolve, staying ahead of industry trends to provide 
                our clients with the most effective and efficient solutions available.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <achievement.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-2xl font-bold text-primary mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our work and define our commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-background rounded-xl shadow-business hover:shadow-accent transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses of all sizes with innovative technology solutions, 
                strategic expertise, and exceptional service delivery. We strive to be 
                the catalyst that transforms business challenges into growth opportunities, 
                enabling our clients to achieve sustainable success in an ever-evolving 
                digital landscape.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the world's most trusted partner for business transformation, 
                recognized for our innovation, integrity, and impact. We envision a 
                future where every business has access to the tools, knowledge, and 
                support needed to thrive in the digital age, creating lasting value 
                for stakeholders and communities worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About