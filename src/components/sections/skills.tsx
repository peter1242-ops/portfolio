"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/lib/data";

export function Skills() {
    return (
        <Section id="skills">
            <h2 className="text-3xl font-bold font-outfit mb-12 text-center">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(DATA.skills).map(([category, skills], index) => (
                    <Card key={category} className="hover:border-primary/50 transition-colors">
                        <CardHeader>
                            <CardTitle className="text-xl text-primary">{category}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
