"use client";

import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/lib/data";

export function Projects() {
    return (
        <Section id="projects" className="bg-muted/30">
            <h2 className="text-3xl font-bold font-outfit mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {DATA.projects.map((project, index) => (
                    <Card key={index} className="flex flex-col overflow-hidden group">
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle>{project.title}</CardTitle>
                            <CardDescription className="mt-2">{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 bg-background border rounded text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {project.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="outline" size="sm" className="w-full">
                                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
