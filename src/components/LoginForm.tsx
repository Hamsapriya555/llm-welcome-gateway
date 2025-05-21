
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface LoginFormProps {
  onSwitchToSignup: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Mock login behavior
    setTimeout(() => {
      toast({
        title: "Success",
        description: "You have been logged in successfully",
      });
      setIsLoading(false);
      // In a real app, you would redirect to dashboard or handle login
    }, 1500);
  };

  return (
    <div className="auth-form-container">
      <div className="auth-tabs">
        <div className="auth-tab active">Login</div>
        <div 
          className="auth-tab cursor-pointer"
          onClick={onSwitchToSignup}
        >
          Sign up
        </div>
      </div>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <Label htmlFor="password">Password</Label>
            <a href="#" className="text-sm text-primary-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary-500 hover:bg-primary-600 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
        <div className="text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <span
            className="text-primary-600 hover:underline cursor-pointer"
            onClick={onSwitchToSignup}
          >
            Sign up
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
