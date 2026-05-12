export interface Plan {
  id: string;
  name: string;
  icon: React.ElementType; 
  price: {
    monthly: number | string;
    yearly: number | string;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean; 
}

export interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export interface AnimatedNumberProps {
  value: number;
  format: {
    style: 'currency' | 'decimal' | 'percent';
    currency?: string;
    maximumFractionDigits: number;
  };
  className?: string;
}