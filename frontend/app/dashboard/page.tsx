'use client';

import { Users, DollarSign, Gavel, Upload } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { OverviewChart } from '../_components/overview-charts';
import { RecentActivity } from '../_components/recent-activity';
import { QuickActions } from '../_components/quick-actions';

// app/dashboard/page.tsx
export default function DashboardPage() {
    const stats = [
      { title: 'Total Bids', value: '1,234', icon: Gavel, change: '+12%' },
      { title: 'Active Customers', value: '89', icon: Users, change: '+5%' },
      { title: 'Pending Submissions', value: '24', icon: Upload, change: '-3%' },
      { title: 'Monthly Revenue', value: '$12,345', icon: DollarSign, change: '+8%' },
    ];
  
    return (
      <div className="space-y-4 h-full overflow-scroll"> {/* Add h-full here */}
        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Card key={i}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className="w-4 h-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-gray-500">{stat.change} from last month</p>
              </CardContent>
            </Card>
          ))}
        </div>
  
        {/* Chart and Activity */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 h-[400px]"> {/* Fixed height */}
          <Card className="col-span-4 h-full"> {/* h-full */}
            <CardHeader>
              <CardTitle>Bid Activity Overview</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-57px)]"> {/* Adjust for header */}
              <OverviewChart />
            </CardContent>
          </Card>
          <Card className="col-span-3 h-full"> {/* h-full */}
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="h-[calc(100%-57px)] overflow-y-auto"> {/* Scrollable content */}
              <RecentActivity />
            </CardContent>
          </Card>
        </div>
  
        {/* Quick Actions */}
        {/* <div className="lg:mt-20">
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <QuickActions />
          </CardContent>
        </Card>
        </div> */}
      </div>
    );
  }