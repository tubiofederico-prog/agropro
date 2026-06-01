import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col lg:ml-64">
        <Topbar />
        <main className="flex-1 overflow-auto mt-16">
          <div className="p-6 lg:p-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
