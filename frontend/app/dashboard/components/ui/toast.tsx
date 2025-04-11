// toast.tsx
'use client';

import * as React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/app/lib/utils';

const toastVariants = cva(/* your variants */);

export interface ToastProps
  extends React.HTMLAttributes<HTMLLIElement>,
    VariantProps<typeof toastVariants> {}

function Toast({ className, variant, ...props }: ToastProps) {
  return (
    <li
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  );
}

const ToastTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
));
ToastTitle.displayName = 'ToastTitle';

const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
));
ToastDescription.displayName = 'ToastDescription';

const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      'absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100',
      className
    )}
    {...props}
  >
    <Cross2Icon className="h-4 w-4" />
  </button>
));
ToastClose.displayName = 'ToastClose';

export { Toast, ToastTitle, ToastDescription, ToastClose };