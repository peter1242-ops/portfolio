"use client";

import { DATA } from "@/lib/data";

export function Footer() {
    return (
        <footer className="py-8 border-t bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground text-center md:text-left">
                    © {new Date().getFullYear()} {DATA.profile.name} — Crafted with purpose and passion.
                </p>
                <div className="flex gap-6">
                    {DATA.profile.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.name}</span>
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
