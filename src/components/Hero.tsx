import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Secure & Fast Money Transfers</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            Send Money to
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              MTN Mobile Money
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-200">
            Fast, secure, and simple money transfers to MTN Mobile Money users across Ghana. 
            Send money in seconds with just a phone number.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-in fade-in slide-in-from-bottom-16 duration-700 delay-300">
            <Link to="/auth">
              <Button size="lg" variant="hero" className="text-lg">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/auth">
              <Button size="lg" variant="outline" className="text-lg">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-20 duration-700 delay-500">
            <div className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Instant Transfer</h3>
                <p className="text-sm text-muted-foreground">Money reaches recipients in seconds</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Secure & Safe</h3>
                <p className="text-sm text-muted-foreground">Bank-level encryption protects your data</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Trusted Platform</h3>
                <p className="text-sm text-muted-foreground">Join thousands of happy users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
