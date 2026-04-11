import React, { useEffect, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import { Sun, Moon, Monitor, Mail } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// SVG Icons for Github and Linkedin since they aren't in this lucid-react version
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function ThemeFooter() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'light' || storedTheme === 'dark') {
      setTheme(storedTheme);
    } else {
      setTheme('system');
    }
  }, []);

  const handleThemeChange = (value: string) => {
    setTheme(value as any);
    const root = document.documentElement;
    if (value === 'system') {
      localStorage.removeItem('theme');
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      root.classList[isDark ? 'add' : 'remove']('dark');
    } else {
      localStorage.setItem('theme', value);
      root.classList[value === 'dark' ? 'add' : 'remove']('dark');
    }
  };

  if (!mounted) return <div className="h-10" />;

  return (
    <footer className="mt-20 border-t border-border/50 bg-background/50 backdrop-blur-md">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          
          {/* Branding Left */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-foreground">Eastrix Labs</span>
          </div>

          {/* Right Section: Theme Switcher & Socials */}
          <div className="flex items-center gap-6">
            
            {/* Theme Switcher Tabs */}
            <Tabs.Root value={theme} onValueChange={handleThemeChange} className="inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground">
              <Tabs.List className="flex items-center space-x-1">
                <Tabs.Trigger value="light" className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm")}>
                  <Sun className="h-4 w-4" />
                </Tabs.Trigger>
                <Tabs.Trigger value="system" className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm")}>
                  <Monitor className="h-4 w-4" />
                </Tabs.Trigger>
                <Tabs.Trigger value="dark" className={cn("inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm")}>
                  <Moon className="h-4 w-4" />
                </Tabs.Trigger>
              </Tabs.List>
            </Tabs.Root>

            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>

          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 sm:flex-row text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Eastrix Labs. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
