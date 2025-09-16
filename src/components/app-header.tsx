"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PanelLeft,
  LayoutGrid,
  FileText,
  Calendar,
  Wrench,
  Search,
  CodeXml,
  CircleUser,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";

const navItems = [
  { href: "/dashboard", icon: LayoutGrid, label: "Dashboard" },
  { href: "/content", icon: FileText, label: "Content" },
  { href: "/schedule", icon: Calendar, label: "Schedule" },
  { href: "/tools", icon: Wrench, label: "AI Tools" },
];

export default function AppHeader() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean);

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-card px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              href="/"
              className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
            >
              <CodeXml className="h-5 w-5 transition-all group-hover:scale-110" />
              <span className="sr-only">Workstation Solutions Ltd</span>
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-4 px-2.5 ${
                  pathname.startsWith(item.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.slice(1).map((segment, index) => (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === pathSegments.length - 2 ? (
                   <BreadcrumbPage className="capitalize">{segment}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link href={`/${pathSegments.slice(0, index + 2).join('/')}`} className="capitalize">
                      {segment}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
      <div className="relative ml-auto flex-1 md:grow-0">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="overflow-hidden rounded-full"
          >
            <CircleUser className="h-5 w-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
