
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-obvian-black text-white p-4">
      <div className="glass-card p-10 max-w-md w-full text-center animate-fade-in">
        <div className="mb-6 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-obvian-cyan/20 flex items-center justify-center">
            <AlertTriangle className="h-12 w-12 text-obvian-cyan animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-obvian-cyan to-white bg-clip-text text-transparent">404</h1>
        <p className="text-xl text-obvian-gray mb-8">This space doesn't exist yet</p>
        
        <p className="text-obvian-gray/80 mb-8">
          The page you're looking for hasn't been built or converted yet. Let's take you back to our existing spaces.
        </p>
        
        <Link to="/">
          <Button className="bg-obvian-cyan text-obvian-black hover:bg-obvian-cyan/80 w-full button-hover">
            <Home className="mr-2 h-5 w-5" /> Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
