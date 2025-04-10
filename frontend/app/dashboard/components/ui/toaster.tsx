'use client';

import * as React from 'react';
import { Toast } from './toast';
import { useToast } from './use-toast';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <div className="fixed top-0 right-0 z-[100] flex flex-col p-4 space-y-2 max-w-xs w-full">
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="grid gap-1">
            {title && <Toast.Title>{title}</Toast.Title>}
            {description && (
              <Toast.Description>{description}</Toast.Description>
            )}
          </div>
          {action}
          <Toast.Close />
        </Toast>
      ))}
    </div>
  );
}