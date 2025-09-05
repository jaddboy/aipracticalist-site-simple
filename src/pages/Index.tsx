import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArticleCard from "@/components/ArticleCard";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Plus, Edit } from "lucide-react";

const Index = () => {
  // Sample articles data - easy to modify and add new content
  const articles = [
    {
      title: "Getting Started with ChatGPT for Business",
      excerpt: "A comprehensive guide to implementing ChatGPT in your business workflow, covering best practices, use cases, and practical tips for maximizing productivity.",
      author: "AI Team",
      date: "2024-12-01",
      category: "Tutorial",
      readTime: "8 min read",
      featured: true
    },
    {
      title: "Prompt Engineering Fundamentals",
      excerpt: "Master the art of prompt engineering with proven techniques and real-world examples that will help you get better results from AI models.",
      author: "AI Team",
      date: "2024-11-28",
      category: "Guide",
      readTime: "12 min read"
    },
    {
      title: "AI Tools for Content Creation",
      excerpt: "Explore the latest AI-powered tools for content creation, from writing assistants to image generators, and how to integrate them into your workflow.",
      author: "AI Team",
      date: "2024-11-25",
      category: "Tools",
      readTime: "10 min read"
    },
    {
      title: "Building Custom GPTs: A Step-by-Step Guide",
      excerpt: "Learn how to create custom GPT models tailored to your specific needs, including training data preparation and fine-tuning techniques.",
      author: "AI Team",
      date: "2024-11-22",
      category: "Advanced",
      readTime: "15 min read"
    },
    {
      title: "AI Ethics and Best Practices",
      excerpt: "Understanding the ethical implications of AI implementation and establishing best practices for responsible AI use in your organization.",
      author: "AI Team",
      date: "2024-11-20",
      category: "Ethics",
      readTime: "7 min read"
    },
    {
      title: "Automation with AI: Real Case Studies",
      excerpt: "Real-world examples of successful AI automation implementations across different industries and business functions.",
      author: "AI Team",
      date: "2024-11-18",
      category: "Case Study",
      readTime: "9 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12">
        {/* Admin Actions - Easy Content Management */}
        <div className="bg-card border border-border rounded-lg p-6 mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif font-bold text-2xl text-secondary">Content Management</h2>
            <div className="flex gap-3">
              <Button className="font-sans">
                <Plus className="w-4 h-4 mr-2" />
                Add Article
              </Button>
              <Button variant="outline" className="font-sans">
                <Edit className="w-4 h-4 mr-2" />
                Edit Page
              </Button>
            </div>
          </div>
          <p className="font-sans text-muted-foreground">
            Easily manage your content by adding new articles, editing existing posts, or updating page sections. 
            All content can be modified directly through this simple interface.
          </p>
        </div>

        {/* Featured Article Section */}
        <section id="articles" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-4xl mb-4 text-gradient-secondary">
              Featured Article
            </h2>
            <p className="font-sans text-xl text-muted-foreground max-w-2xl mx-auto">
              Our latest insights and practical guides for AI implementation
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto mb-12">
            <ArticleCard {...articles[0]} featured={true} />
          </div>
        </section>

        {/* Recent Articles Grid */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-serif font-bold text-3xl text-secondary">Recent Articles</h2>
            <Button variant="outline" className="font-sans">
              View All Articles
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section id="tutorials" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl mb-4 text-secondary">
              Explore by Category
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Find content tailored to your interests and skill level
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Tutorials", "Tools", "Case Studies", "Advanced Guides"].map((category) => (
              <div key={category} className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <h3 className="font-serif font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {category}
                </h3>
                <p className="font-sans text-sm text-muted-foreground">
                  Explore {category.toLowerCase()}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section id="resources" className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 md:p-12 text-center">
          <h2 className="font-serif font-bold text-3xl mb-4 text-secondary">
            Stay Updated
          </h2>
          <p className="font-sans text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest AI insights, tutorials, and tool reviews delivered directly to your inbox. 
            Join our community of AI practitioners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-2 rounded-md border border-border font-sans"
            />
            <Button className="font-sans font-medium">
              Subscribe
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;