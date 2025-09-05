import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Lightbulb } from "lucide-react";

const Hero = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl mb-6 text-gradient-primary leading-tight">
            Practical AI for Everyone
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Learn, implement, and master AI tools through hands-on tutorials, 
            real-world examples, and practical insights from industry experts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="font-sans font-medium bg-primary hover:bg-primary/90 text-primary-foreground">
              Start Learning
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="font-sans font-medium">
              Browse Articles
              <BookOpen className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-secondary">Practical Insights</h3>
              <p className="font-sans text-muted-foreground">
                Real-world applications and case studies
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-secondary">Step-by-Step Guides</h3>
              <p className="font-sans text-muted-foreground">
                Detailed tutorials for all skill levels
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 text-secondary">Latest Tools</h3>
              <p className="font-sans text-muted-foreground">
                Stay updated with cutting-edge AI technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;