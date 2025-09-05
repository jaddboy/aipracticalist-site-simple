import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  featured?: boolean;
}

const ArticleCard = ({ 
  title, 
  excerpt, 
  author, 
  date, 
  category, 
  readTime,
  featured = false 
}: ArticleCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 cursor-pointer ${
      featured ? 'border-primary-orange bg-gradient-to-br from-card to-sandstone' : ''
    }`}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <Badge variant={featured ? "default" : "secondary"} className="font-sans text-xs">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground font-mono">{readTime}</span>
        </div>
        <h3 className={`font-serif font-bold group-hover:text-primary transition-colors ${
          featured ? 'text-xl' : 'text-lg'
        }`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground font-sans mb-4 leading-relaxed">
          {excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            <span className="font-sans">{author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span className="font-mono">{date}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;