"use client";

import { BarChart4, MonitorPlay } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const sidebarRoute = [
    { icon: <MonitorPlay />, label: "Courses", path: "/admin/courses" },
    { icon: <BarChart4 />, label: "Performance", path: "/admin/performance" },
  ];
  return (
    <div className="max-sm:hidden flex flex-col w-64 border-r shadow-md gap-4 px-3 my-4 text-sm font-medium">
      {sidebarRoute.map((route) => (
        <Link
          href={route.path}
          key={route.path}
          className={`flex items-center rounded-lg p-3 gap-4 ${
            pathname.startsWith(route.path)
              ? "bg-main-teal hover:bg-main-teal/80"
              : "hover:bg-main-teal/20"
          }`}
        >
          {route.icon} {route.label}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
