"use client";

import { Section } from "@/components/ui/section";
import { DATA } from "@/lib/data";

export function About() {
    return (
        <Section id="about" className="bg-muted/30">
            <div className="space-y-6 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold font-outfit">About Me</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                    {DATA.profile.bio}
                </p>
            </div>
        </Section>
    );
}
