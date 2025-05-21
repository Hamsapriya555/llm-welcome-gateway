
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

interface SignupFormProps {
  onSwitchToLogin: () => void;
}

const SignupForm: React.FC<SignupFormProps> = ({ onSwitchToLogin }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }
    
    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters long",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Mock signup behavior
    setTimeout(() => {
      toast({
        title: "Success",
        description: "Your account has been created successfully",
      });
      setIsLoading(false);
      // In a real app, you would redirect to dashboard or login page
    }, 1500);
  };

  return (
    <div className="auth-form-container">
      <div className="auth-tabs">
        <div 
          className="auth-tab cursor-pointer"
          onClick={onSwitchToLogin}
        >
          Login
        </div>
        <div className="auth-tab active">Sign up</div>
      </div>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
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
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <p className="text-xs text-gray-500">
            Must be at least 8 characters long
          </p>
        </div>
        <Button
          type="submit"
          className="w-full bg-primary-500 hover:bg-primary-600 text-white"
          disabled={isLoading}
        >
          {isLoading ? "Creating account..." : "Create account"}
        </Button>
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <span
            className="text-primary-600 hover:underline cursor-pointer"
            onClick={onSwitchToLogin}
          >
            Login
          </span>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
