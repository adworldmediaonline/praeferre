'use client';

import { ReactNode, forwardRef } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = forwardRef<HTMLDivElement, PageTransitionProps>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className="min-h-screen bg-background">
        {children}
      </div>
    );
  }
);

PageTransition.displayName = 'PageTransition';

export default PageTransition;
