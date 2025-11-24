"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DATA } from "@/lib/data";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";

type FormData = {
    name: string;
    email: string;
    message: string;
};

export function Contact() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || "Failed to send message");
            }

            setStatus("success");
            reset();
        } catch (error) {
            console.error("Contact form error:", error);
            setStatus("error");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <Section id="contact" className="bg-muted/30">
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                <div>
                    <h2 className="text-3xl font-bold font-outfit mb-4">Get in touch</h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Have a project or question? I’m open to opportunities and collaborations.
                    </p>

                    <div className="space-y-6">
                        {DATA.profile.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 p-4 rounded-lg bg-background border hover:border-primary transition-colors"
                            >
                                <social.icon className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-medium">{social.name}</p>
                                    <p className="text-sm text-muted-foreground">Connect on {social.name}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="mt-8 text-sm text-muted-foreground">
                        <p className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500" />
                            {DATA.profile.location}
                        </p>
                        <p className="mt-2">
                            Privacy note: I respect your privacy — your message will be used only to respond.
                        </p>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Send a Message</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">Name</label>
                                <input
                                    id="name"
                                    {...register("name", { required: "Name is required" })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your name"
                                />
                                {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address"
                                        }
                                    })}
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="your.email@example.com"
                                />
                                {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    {...register("message", { required: "Message is required" })}
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can I help you?"
                                />
                                {errors.message && <p className="text-sm text-destructive">{errors.message.message}</p>}
                            </div>

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...
                                    </>
                                ) : status === "success" ? (
                                    <>
                                        <CheckCircle className="mr-2 h-4 w-4" /> Sent Successfully
                                    </>
                                ) : status === "error" ? (
                                    <>
                                        <AlertCircle className="mr-2 h-4 w-4" /> Failed to Send
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </Section>
    );
}
