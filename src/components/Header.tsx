import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-card/95">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-orange to-maroon-core rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-lg">AI</span>
            </div>
            <div>
              <h1 className="font-serif font-bold text-xl text-gradient-primary">
                AIPracticalist
              </h1>
              <p className="text-sm text-muted-foreground font-sans">
                Practical AI Insights & Tutorials
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#articles" className="font-sans text-foreground hover:text-primary transition-colors">
              Articles
            </a>
            <a href="#tutorials" className="font-sans text-foreground hover:text-primary transition-colors">
              Tutorials
            </a>
            <a href="#resources" className="font-sans text-foreground hover:text-primary transition-colors">
              Resources
            </a>
            <Button variant="outline" className="font-sans">
              Subscribe
            </Button>
          </nav>
          
          <Button variant="outline" className="md:hidden">
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;