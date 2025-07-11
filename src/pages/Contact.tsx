import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send ,User} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useRef, useEffect,useState } from "react";
import { useLocation } from "react-router-dom";
import { set } from "date-fns";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const hrName = "Anjali Sharma";
  const hrEmail = "hr@businesspro.com";
  const hrAddress = "123 Business Ave, New York, NY";


  const hrCardRef = useRef<HTMLDivElement | null>(null);
  const location = useLocation();

useEffect(() => {
  if (location.hash === "#hr-contact" && hrCardRef.current) {
    const offset = 122; 
    const element = hrCardRef.current;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    setTimeout(() => {
    window.scrollTo({
      top,
      behavior: "smooth",
    });
    }, 1000);

    element.classList.add("shadow-accent", "scale-[1.015]", "border-accent", "ring-2", "ring-accent", "ring-offset-2");

    const timeout = setTimeout(() => {
      element.classList.remove("shadow-accent", "scale-[1.015]", "border-accent", "ring-2", "ring-accent", "ring-offset-2");
    }, 5000);

    return () => clearTimeout(timeout);
  }
}, [location]);



  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "info@businesspro.com",
      secondary: "support@businesspro.com",
      description: "Send us an email anytime",
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+1 (555) 987-6543",
      description: "Mon-Fri from 8am to 6pm",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "123 Business Street",
      secondary: "Suite 100, New York, NY 10001",
      description: "Our headquarters",
    },
    {
      icon: Clock,
      title: "Business Hours",
      primary: "Monday - Friday",
      secondary: "8:00 AM - 6:00 PM EST",
      description: "We're here to help",
    },
  ];

  const offices = [
    {
      city: "New York",
      address: "123 Business Street, Suite 100",
      phone: "+1 (555) 123-4567",
      email: "ny@businesspro.com",
    },
    {
      city: "Los Angeles",
      address: "456 Innovation Blvd, Floor 5",
      phone: "+1 (555) 234-5678",
      email: "la@businesspro.com",
    },
    {
      city: "Chicago",
      address: "789 Commerce Ave, Suite 200",
      phone: "+1 (555) 345-6789",
      email: "chicago@businesspro.com",
    },
  ];

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
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Ready to transform your business? We'd love to hear from you.
              Reach out to discuss your project or schedule a free consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center shadow-business hover:shadow-accent transition-all duration-300 border-border hover:border-accent/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-accent" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {info.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="font-semibold text-primary">
                        {info.primary}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {info.secondary}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {info.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {/* hr Contact */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <a href={`mailto:${hrEmail}`} className="block group" id="hr-contact">
                  <Card ref={hrCardRef} className="transition-all duration-300 shadow-business hover:shadow-accent group-hover:scale-[1.015] hover:border-accent border border-border cursor-pointer">
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-primary mb-4">
                        Contact HR
                      </h4>

                      <div className="space-y-3 text-sm text-muted-foreground">
                        {/* HR Name */}
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-accent" />
                          <span className="font-medium text-foreground">
                            {hrName}
                          </span>
                        </div>

                        {/* Address */}
                        <div className="flex items-start space-x-2">
                          <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                          <span>{hrAddress}</span>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-accent" />
                          <span className="underline group-hover:text-accent">
                            {hrEmail}
                          </span>
                        </div>
                      </div>

                      {/* Optional CTA */}
                      <div className="mt-5 text-right">
                        <span className="text-accent text-sm font-medium">
                          Click to send email →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-business">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary">
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within
                      24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your company name"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="How can we help you?"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your project or requirements..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Office Locations */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office, index) => (
                    <motion.div
                      key={office.city}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="shadow-business hover:shadow-accent transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-primary mb-3">
                            {office.city}
                          </h4>
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <div className="flex items-start space-x-2">
                              <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                              <span>{office.address}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Phone className="w-4 h-4 text-accent" />
                              <span>{office.phone}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="w-4 h-4 text-accent" />
                              <span>{office.email}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Response Time */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-accent/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    Quick Response Guarantee
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Email inquiries: Within 2 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Phone calls: Immediate response</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Project inquiries: Within 24 hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>Emergency support: 24/7 availability</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get quick answers to common questions about our services and
              process.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What's included in a free consultation?",
                answer:
                  "Our free consultation includes a comprehensive analysis of your current challenges, discussion of your goals, and a preliminary recommendation of solutions that could benefit your business.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on scope and complexity. Most projects range from 2-12 weeks. We provide detailed timelines during the planning phase.",
              },
              {
                question: "Do you work with small businesses?",
                answer:
                  "Absolutely! We work with businesses of all sizes, from startups to enterprise companies. Our solutions are scalable and customized to fit your specific needs and budget.",
              },
              {
                question: "What's your pricing structure?",
                answer:
                  "We offer flexible pricing models including project-based, retainer, and hourly rates. Pricing depends on the scope and complexity of your requirements.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full shadow-business">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-primary mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
