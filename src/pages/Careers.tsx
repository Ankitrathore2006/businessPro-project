import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  Target,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Careers = () => {

  const openPositions = []
  

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive medical, dental, and vision insurance plus wellness programs.",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description:
        "Professional development opportunities, training programs, and clear advancement paths.",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Collaborative, inclusive environment with team events and flexible work arrangements.",
    },
    {
      icon: Target,
      title: "Work-Life Balance",
      description:
        "Flexible hours, remote work options, and generous PTO to maintain healthy balance.",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Senior":
        return "bg-accent/20 text-accent";
      case "Mid-level":
        return "bg-primary/20 text-primary";
      case "Junior":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };


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
              Join Our <span className="text-accent">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Build your career with a company that values innovation, growth,
              and making a meaningful impact. Discover opportunities to work
              with cutting-edge technology and talented professionals.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              <Link to={"/careers#positions"} onClick={() => { window.scrollTo(0, 1117); }} >View Open Positions</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
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
              Why Work With Us?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe our people are our greatest asset. That's why we've
              created an environment where talented individuals can thrive and
              grow.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-card rounded-xl shadow-business hover:shadow-accent transition-all duration-300"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-primary rounded-2xl p-8 text-primary-foreground">
            {[
              { number: "500+", label: "Team Members" },
              { number: "95%", label: "Employee Satisfaction" },
              { number: "25+", label: "Countries" },
              { number: "10+", label: "Years Growing" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
       <section id="positions" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore current opportunities to join our growing team and make an
            impact.
          </p>
        </motion.div>

        {/* Position Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {openPositions && openPositions.length > 0 ? (
            openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-business hover:shadow-accent transition-all duration-300 border border-border hover:border-accent/50">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <CardTitle className="text-xl text-primary mb-2">
                          {position.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {position.department}
                        </CardDescription>
                      </div>
                      <Badge className={getLevelColor(position.level)}>
                        {position.level}
                      </Badge>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mt-2">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {position.description}
                    </p>

                    {/* Requirements */}
                    {position.requirements && position.requirements.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-primary mb-2">
                          Requirements:
                        </h4>
                        <ul className="space-y-1">
                          {position.requirements.map((req, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            
              <div className="h-full w-[76vw] flex flex-col items-center justify-center ">
                <div className="py-11 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
                    <HelpCircle className="w-8 h-8 text-gray-500" />
                  </div>
                  <div className="text-xl text-gray-500 text-muted-foreground mb-2">
                    No open positions at the moment
                  </div>
                  <div className="text-gray-400 text-sm">
                    Check back later or send us your resume.
                  </div>
                </div>
              </div>
          )}
        </div>
      </div>
    </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              We're always looking for talented individuals to join our team.
              Send us your resume and let us know how you'd like to contribute
              to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact#hr-contact">Send Your Resume</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
