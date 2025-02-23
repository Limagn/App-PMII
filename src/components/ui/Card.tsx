import React from "react";
import { View, Text } from "react-native";
import { cn } from "../../libs/utils";

type CardPropsView = React.ComponentProps<typeof View> & {
  className?: string;
};

type CardPropsText = React.ComponentProps<typeof Text> & {
  className?: string;
};

const Card = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
    ref={ref}
    className={cn("bg-card mb-5 p-4 rounded-xl shadow-md w-full lg:w-1/4 border border-border", className)}
    {...props}
  />
));
Card.displayName = "Card";


const CardHeader = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between space-y-1.5 p-3", className)}
  {...props}
  />
));
Card.displayName = "CardHeader";


const CardTitle = React.forwardRef<View, CardPropsText>(({ className, ...props }, ref) => (
  <Text
  ref={ref}
  className={cn("text-3xl font-semibold text-foreground tracking-tight", className)}
  
  {...props}
  />
));
Card.displayName = "CardTitle";


const CardContent = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between p-3 pt-0", className)}
  {...props}
  />
));
Card.displayName = "CardContent";


const CardDescription = React.forwardRef<Text, CardPropsText>(({ className, ...props }, ref) => (
  <Text
  ref={ref}
  className={cn(" text-muted-foreground", className)}
  {...props}
  />
));
Card.displayName = "CardDescription";


const CardFooter = React.forwardRef<View, CardPropsView>(({ className, ...props }, ref) => (
  <View
  ref={ref}
  className={cn("flex flex-row justify-between p-3 pt-0", className)}
  {...props}
  />
));
Card.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };