import { Twitter, Send, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-5 h-5 rounded-md bg-accent" />
          <span className="text-xs text-muted-foreground">
            © Internet Money 2026
          </span>
        </div>
        <div className="flex items-center gap-5 text-muted-foreground">
          <a href="#" aria-label="Twitter" className="hover:text-foreground transition-colors">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" aria-label="Telegram" className="hover:text-foreground transition-colors">
            <Send className="w-4 h-4" />
          </a>
          <a href="#" aria-label="YouTube" className="hover:text-foreground transition-colors">
            <Youtube className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
