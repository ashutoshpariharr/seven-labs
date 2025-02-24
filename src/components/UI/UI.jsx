import React from "react";
import { cn } from "../../lib/utils";
// import { cn } from "@/lib/utils";

export function Card({ className, children }) {
  return (
    <div className={cn("bg-white shadow-md rounded-2xl p-6", className)}>
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return (
    <div className={cn("mb-4", className)}>
      {children}
    </div>
  );
}

export function CardTitle({ className, children }) {
  return (
    <h2 className={cn("text-xl font-semibold", className)}>
      {children}
    </h2>
  );
}

export function CardDescription({ className, children }) {
  return (
    <p className={cn("text-gray-500", className)}>
      {children}
    </p>
  );
}

export function CardContent({ className, children }) {
  return (
    <div className={cn("mt-2", className)}>
      {children}
    </div>
  );
}
