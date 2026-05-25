'use client';

import { Sparkles, ArrowRight, Check, Star, Zap, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type {AnimatedNumberProps,CardProps} from "@/utils/types"
import { plans } from '@/utils/constants';
import CustomButton from './button';
import { StaggerItem } from './stagger-item';


const Card: React.FC<CardProps> = ({ className, children }) => (
  <div className={cn('rounded-lg border bg-card text-card-foreground shadow-sm', className)}>
    {children}
  </div>
);

const CardHeader: React.FC<CardProps> = ({ className, children }) => (
  <div className={cn('flex flex-col space-y-1.5 p-6', className)}>
    {children}
  </div>
);

const CardTitle: React.FC<CardProps> = ({ className, children }) => (
  <h3 className={cn('text-2xl font-semibold leading-none tracking-tight', className)}>
    {children}
  </h3>
);

const CardDescription: React.FC<CardProps> = ({ className, children }) => (
  <div className={cn('text-sm text-muted-foreground', className)}>
    {children}
  </div>
);

const CardContent: React.FC<CardProps> = ({ className, children }) => (
  <div className={cn('p-6 pt-0', className)}>
    {children}
  </div>
);

const CardFooter: React.FC<CardProps> = ({ className, children }) => (
  <div className={cn('flex items-center p-6 pt-0', className)}>
    {children}
  </div>
);

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, format, className }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    const duration = 500; 

    const animate = (timestamp: DOMHighResTimeStamp) => {
      if (!startTimeRef.current) {
        startTimeRef.current = timestamp;
      }

      const progress = (timestamp - startTimeRef.current) / duration;
      const easedProgress = Math.min(1, progress); 

      const newValue = easedProgress * value;
      setCurrentValue(newValue);

      if (progress < 1) {
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(value); 
        startTimeRef.current = null; 
      }
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    startTimeRef.current = null; 
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [value]);

  const formatter = new Intl.NumberFormat('en-US', {
    style: format.style,
    currency: format.currency,
    maximumFractionDigits: format.maximumFractionDigits,
  });

  return <span className={className}>{formatter.format(currentValue)}</span>;
};





export default function SimplePricing() {
  //const [frequency, setFrequency] = useState<'monthly' | 'yearly'>('monthly');
  const frequency ="monthly"
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
        <div className="w-full  grid grid-cols-1 md:grid-cols-2  xl:grid-cols-4 gap-4 p-4 md:p-6 h-fit">
          {plans.map((plan, index) => (
            <StaggerItem key={plan.id}>
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -5 }} 
              className="flex"
            >
              <Card
                className={cn(
                  'relative h-full w-full bg-secondary/20 text-left transition-all duration-300 hover:shadow-lg',
                  plan.popular
                    ? 'shadow-md ring-2 ring-primary/50 dark:shadow-primary/10'
                    : 'hover:border-primary/30',
                  plan.popular &&
                    'bg-gradient-to-b from-primary/[0.03] to-transparent',
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                    <span className="inline-flex items-center rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-sm">
                      <Sparkles className="mr-1 h-3.5 w-3.5" />
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className={cn('pb-4', plan.popular && 'pt-8')}>
                  <div className="flex items-center gap-2">

                    <div
                      className={cn(
                        'flex h-8 w-8 items-center justify-center rounded-full',
                        plan.popular
                          ? 'bg-primary/10 text-primary'
                          : 'bg-secondary text-foreground',
                      )}
                    >
                      <plan.icon className="h-4 w-4" />
                    </div>

                    <CardTitle
                      className={cn(
                        'text-xl font-bold',
                        plan.popular && 'text-primary',
                      )}
                    >
                      {plan.name}
                    </CardTitle>
                  </div>
                  <CardDescription className="mt-3 space-y-2">

                    <p className="text-sm">{plan.description}</p>

                    <div className="pt-2">
                      {typeof plan.price[frequency] === 'number' ? (
                        <div className="flex items-baseline">
                          <AnimatedNumber 
                            className={cn(
                              'text-3xl font-bold',
                              plan.popular ? 'text-primary' : 'text-foreground',
                            )}
                            format={{
                              style: 'currency',
                              currency: 'USD',
                              maximumFractionDigits: 0,
                            }}
                            value={plan.price[frequency] as number}
                          />
                          <span className="ml-1 text-sm text-muted-foreground">
                            /month
                          </span>
                        </div>
                      ) : (
                        <span
                          className={cn(
                            'text-2xl font-bold',
                            plan.popular ? 'text-primary' : 'text-foreground',
                          )}
                        >
                          {plan.price[frequency]}
                        </span>
                      )}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3 pb-6">
                  
                  {plan.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + featureIndex * 0.05 }}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div
                        className={cn(
                          'flex h-5 w-5 items-center justify-center rounded-full',
                          plan.popular
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary text-secondary-foreground',
                        )}
                      >
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span
                        className={
                          plan.popular
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter>
                  <CustomButton isActive={!!plan?.popular}>
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </CustomButton>

                </CardFooter>

                {plan.popular ? (
                  <>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-primary/[0.05] to-transparent" />
                    <div className="pointer-events-none absolute inset-0 rounded-lg border border-primary/20" />
                  </>
                ) : (
                  <div className="pointer-events-none absolute inset-0 rounded-lg border border-transparent opacity-0 transition-opacity duration-300 hover:border-primary/10 hover:opacity-100" />
                )}
              </Card>
            </motion.div>
            </StaggerItem>
          ))}
        </div>
  );
}
