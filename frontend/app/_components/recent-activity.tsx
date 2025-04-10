'use client';

import { format } from 'date-fns';
import { FileText, Upload, Award, CheckCircle } from 'lucide-react';

const activities = [
  {
    id: 1,
    type: 'file',
    description: 'Processed Verizon CSV file',
    date: new Date('2023-07-01T10:30:00'),
    icon: FileText,
    color: 'text-blue-500',
  },
  {
    id: 2,
    type: 'submission',
    description: 'Submitted bids to Verizon',
    date: new Date('2023-07-01T14:45:00'),
    icon: Upload,
    color: 'text-purple-500',
  },
  {
    id: 3,
    type: 'award',
    description: 'Received awards from Verizon',
    date: new Date('2023-06-30T09:15:00'),
    icon: Award,
    color: 'text-green-500',
  },
  {
    id: 4,
    type: 'invoice',
    description: 'Generated 5 customer invoices',
    date: new Date('2023-06-29T16:20:00'),
    icon: CheckCircle,
    color: 'text-yellow-500',
  },
];

export function RecentActivity() {
  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-start">
          <div className={`flex-shrink-0 ${activity.color}`}>
            <activity.icon className="w-5 h-5" />
          </div>
          <div className="ml-3 space-y-0.5">
            <p className="text-sm font-medium">{activity.description}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {format(activity.date, 'MMM d, h:mm a')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}