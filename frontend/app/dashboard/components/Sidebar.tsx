'use client';

import { cn } from '@/app/lib/utils';
import { motion } from 'framer-motion';
import { Home, FileText, Users, Gavel, Upload, Award, LineChart, Settings, FileInput } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: Home },
  { name: 'File Management', href: '/dashboard/file-upload', icon: FileText },
  { name: 'Customer Bidding', href: '/customer-bidding', icon: Users },
  { name: 'Bid Processing', href: '/bid-processing', icon: Gavel },
  { name: 'Verizon Submissions', href: '/verizon-submissions', icon: Upload },
  { name: 'Award Management', href: '/award-management', icon: Award },
  { name: 'Invoicing', href: '/invoicing', icon: FileInput },
  { name: 'Reports', href: '/reports', icon: LineChart },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div 
      initial={{ x: 0 }}
      animate={{ x: 0 }}
      className="hidden md:flex md:flex-shrink-0 bg-black"
    >
      <div className="flex flex-col w-64 h-full border-r border-gray-200 bg-white ">
        <div className="flex items-center h-16 px-4 border-b border-gray-200 ">
          <h1 className="text-xl font-bold text-gray-900">99 Solar Bid Manager</h1>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <nav className="flex-1 px-2 py-4 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    isActive
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-100'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.div>
  );
}