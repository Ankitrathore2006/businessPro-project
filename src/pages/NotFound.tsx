import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "Page Not Found";
  }, [location.pathname]);

  const isServiceRoute = location.pathname.startsWith("/services/");
  return (
    <div className="min-h-screen pt-16 flex items-center justify-center bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="w-24 h-24 mx-auto mb-8 bg-accent/10 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-accent" />
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
            404
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            {isServiceRoute ? "Service Not Found" : "Page Not Found"}
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            {isServiceRoute
              ? "The service you're looking for doesn't exist or may have been moved."
              : "The page you're looking for doesn't exist or may have been moved."}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isServiceRoute && (
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                <Link to="/services">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  View All Services
                </Link>
              </Button>
            )}

            <Button
              asChild
              variant={isServiceRoute ? "outline" : "default"}
              size="lg"
              className={
                isServiceRoute
                  ? "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  : "bg-accent hover:bg-accent/90 text-accent-foreground"
              }
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Return to Home
              </Link>
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 text-sm text-muted-foreground"
          >
            <p>
              If you believe this is an error, please contact our support team.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
