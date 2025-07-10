import { motion } from "framer-motion";
import {
  ArrowRight,
  Monitor,
  Megaphone,
  Users,
  Headphones,
  BarChart3,
  TrendingUp,
  CheckCircle,
  Award,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ServiceCard from "@/components/ServiceCard";
import TestimonialSlider from "@/components/TestimonialSlider";

const Home = () => {
  const services = [
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      features: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Software Development",
        "System Integration",
        "Technical Support",
      ],
      icon: Monitor,
    },
    {
      title: "Digital Marketing",
      description: "Strategic digital presence and marketing campaigns",
      features: [
        "SEO Optimization",
        "Social Media Management",
        "Content Marketing",
        "PPC Advertising",
        "Analytics & Reporting",
      ],
      icon: Megaphone,
    },
    {
      title: "HR & Recruitment",
      description: "Expert talent acquisition and human resource management",
      features: [
        "Talent Sourcing",
        "Executive Search",
        "HR Consulting",
        "Employee Training",
        "Performance Management",
      ],
      icon: Users,
    },
    {
      title: "Customer Support",
      description: "24/7 professional customer service solutions",
      features: [
        "Multi-channel Support",
        "Live Chat Services",
        "Help Desk Solutions",
        "Customer Success Programs",
        "Quality Assurance",
      ],
      icon: Headphones,
    },
    {
      title: "Business Process Automation",
      description: "Streamline operations with intelligent automation",
      features: [
        "Workflow Automation",
        "Process Optimization",
        "Integration Solutions",
        "Data Analytics",
        "ROI Tracking",
      ],
      icon: BarChart3,
    },
    {
      title: "Sentiment Marketing",
      description:
        "Data-driven marketing strategies based on customer sentiment",
      features: [
        "Sentiment Analysis",
        "Brand Monitoring",
        "Consumer Insights",
        "Reputation Management",
        "Market Research",
      ],
      icon: TrendingUp,
    },
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
  ];

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Tech Innovations",
    feedback:
      "The team at this company transformed our IT infrastructure, leading to significant efficiency gains.",
    image:
      "https://images.unsplash.com/photo-1623366302587-b38b1ddaefd9?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Marketing Director, Creative Agency",
    feedback:
      "Their digital marketing strategies have significantly increased our online presence and customer engagement.",
    image:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "HR Manager, Global Corp",
    feedback:
      "Exceptional HR services that helped us find the right talent quickly and efficiently.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 4,
    name: "Sarah Lee",
    designation: "Product Manager, SoftHub",
    feedback:
      "From UX to deployment, the team delivered a sleek and scalable SaaS product right on schedule.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 5,
    name: "David Kim",
    designation: "Founder, FinStack",
    feedback:
      "Their fintech expertise helped us create a secure and intuitive mobile experience for our users.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 6,
    name: "Emily Clark",
    designation: "Operations Lead, SupplyNet",
    feedback:
      "Workflow automation improved our team productivity by 30%. Highly efficient and collaborative process.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 7,
    name: "James Patel",
    designation: "CTO, SecureLayer",
    feedback:
      "We now have robust cloud security thanks to their seamless DevSecOps integration and constant support.",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: 8,
    name: "Laura Nguyen",
    designation: "Design Lead, StudioNova",
    feedback:
      "Elegant and minimal design delivered perfectly to brief — it elevated our brand instantly.",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80",
  },
];


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/20 to-accent/10 pt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 leading-tight">
              Professional Business
              <span className="text-accent block">Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Empowering businesses with comprehensive IT services, digital
              marketing, HR solutions, and advanced automation to drive growth
              and success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/services">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Link to="/contact">Get Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary/5 rounded-full"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our Professional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive business solutions designed to accelerate your
              growth and optimize your operations for maximum efficiency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-[#e5e5e5] py-20">
        <h2 className="text-3xl font-bold text-center text-[#14213d] mb-10">
          What Our Clients Say
        </h2>
        <TestimonialSlider testimonials={testimonials} />
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Join hundreds of successful businesses that trust us with their
              growth. Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/contact">Start Your Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary-foreground text-accent-foreground hover:bg-primary-foreground hover:text-accent"
              >
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
