"use client";

import * as React from "react";
import { cn } from "./utils";

// Inline SVG icon
const CircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

interface RadioGroupContextValue {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

const RadioGroupContext = React.createContext<RadioGroupContextValue>({});

interface RadioGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  onValueChange?: (value: string) => void;
  name?: string;
}

function RadioGroup({
  className,
  value,
  onValueChange,
  name,
  ...props
}: RadioGroupProps) {
  return (
    <RadioGroupContext.Provider value={{ value, onValueChange, name }}>
      <div
        data-slot="radio-group"
        className={cn("grid gap-3", className)}
        role="radiogroup"
        {...props}
      />
    </RadioGroupContext.Provider>
  );
}

interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
}

function RadioGroupItem({
  className,
  value,
  id,
  ...props
}: RadioGroupItemProps) {
  const context = React.useContext(RadioGroupContext);
  const isChecked = context.value === value;
  const inputId = id || `radio-${value}`;

  const handleChange = () => {
    if (context.onValueChange) {
      context.onValueChange(value);
    }
  };

  return (
    <div className="relative inline-flex items-center">
      <input
        type="radio"
        id={inputId}
        value={value}
        checked={isChecked}
        onChange={handleChange}
        name={context.name}
        className="sr-only"
        {...props}
      />
      <label
        htmlFor={inputId}
        data-slot="radio-group-item"
        className={cn(
          "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer flex items-center justify-center",
          className,
        )}
      >
        {isChecked && (
          <div
            data-slot="radio-group-indicator"
            className="relative flex items-center justify-center"
          >
            <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
          </div>
        )}
      </label>
    </div>
  );
}

export { RadioGroup, RadioGroupItem };
