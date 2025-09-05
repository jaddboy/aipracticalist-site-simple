import logo from "@/assets/aipracticalist-logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="AIPracticalist Logo" 
                className="w-10 h-10"
              />
              <div>
                <h3 className="font-serif font-bold text-xl text-secondary-foreground">
                  AIPracticalist
                </h3>
                <p className="text-sm text-secondary-foreground/80 font-sans">
                  Practical AI Insights & Tutorials
                </p>
              </div>
            </div>
            <p className="font-sans text-secondary-foreground/80 leading-relaxed max-w-md">
              Empowering professionals and enthusiasts with practical AI knowledge, 
              tools, and strategies for real-world implementation.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-secondary-foreground">
              Content
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#articles" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Latest Articles
                </a>
              </li>
              <li>
                <a href="#tutorials" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#tools" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  AI Tools Reviews
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-4 text-secondary-foreground">
              Connect
            </h4>
            <ul className="space-y-2 font-sans">
              <li>
                <a href="#newsletter" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#about" className="text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="font-sans text-sm text-secondary-foreground/60">
            © 2024 AIPracticalist.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;