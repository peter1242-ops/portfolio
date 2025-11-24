"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { Briefcase, GraduationCap, Award, ExternalLink } from "lucide-react";

export function Experience() {
    return (
        <Section id="experience" className="space-y-20">
            {/* Experience */}
            <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                        <Briefcase className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold font-outfit">Experience</h2>
                </div>

                <div className="relative border-l-2 border-primary/20 ml-6 space-y-12 pl-8 py-2">
                    {DATA.experience.map((exp, index) => (
                        <div key={index} className="relative">
                            <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-background bg-primary" />
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold">{exp.role}</h3>
                                <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                                    <span className="font-medium text-primary">{exp.company}</span>
                                    <span>•</span>
                                    <span>{exp.period}</span>
                                </div>
                                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                                    {exp.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <GraduationCap className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-outfit">Education</h2>
                    </div>

                    <div className="space-y-6">
                        {DATA.education.map((edu, index) => (
                            <Card key={index} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                                    <p className="text-primary font-medium text-sm">{edu.institution}</p>
                                    <p className="text-xs text-muted-foreground">{edu.period}</p>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Achievements */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 rounded-full bg-primary/10 text-primary">
                            <Award className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl font-bold font-outfit">Achievements</h2>
                    </div>

                    <div className="space-y-6">
                        {DATA.achievements.map((ach, index) => (
                            <Card key={index} className="border-none shadow-none bg-muted/30 hover:bg-muted/50 transition-colors">
                                <CardHeader>
                                    <CardTitle className="text-lg">{ach.title}</CardTitle>
                                    <p className="text-primary font-medium text-sm">{ach.issuer}</p>
                                    <a
                                        href={ach.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs text-muted-foreground hover:text-primary flex items-center gap-1 mt-2 transition-colors"
                                    >
                                        View Certificate <ExternalLink className="h-3 w-3" />
                                    </a>
                                </CardHeader>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
