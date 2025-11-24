"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";

export function Hero() {
    return (
        <Section id="hero" className="min-h-screen flex items-center justify-center pt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold font-outfit tracking-tight">
                        Hi, I'm <span className="text-primary">{DATA.profile.name}</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl font-medium text-muted-foreground">
                        {DATA.profile.role}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-lg">
                        {DATA.profile.tagline}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild size="lg">
                            <Link href="#projects">
                                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <a href={DATA.profile.resumeUrl} download>
                                Download Resume <Download className="ml-2 h-4 w-4" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="lg" asChild>
                            <Link href="#contact">
                                Let's Connect <Mail className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt={DATA.profile.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}
