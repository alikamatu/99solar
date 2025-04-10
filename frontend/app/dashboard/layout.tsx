import { Providers } from './providers';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Toaster } from './components/ui/toaster';
import { ToastProvider } from '@radix-ui/react-toast';


interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
        <Providers>
            <ToastProvider>

    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 min-h-0"> {/* Crucial: min-h-0 */}
        <Header />
        <main className="flex-1 overflow-auto p-4"> {/* overflow-auto here */}
          {children}
          <Toaster />
        </main>
      </div>
    </div>
            </ToastProvider>
        </Providers>
  );
}