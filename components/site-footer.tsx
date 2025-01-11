"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react'

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function SiteFooter() {
  const [isSubscribed, setIsSubscribed] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would typically send the email to your API
    console.log(values)
    setIsSubscribed(true)
  }

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: "GitHub", icon: Github, url: "https://github.com/BittuSingh147" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/bittusingh14/" },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/BittuSi56134973" },
    { name: "Email", icon: Mail, url: "mailto:bittusinghh2002@gmail.com" },
  ]

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">About Me</h3>
            <p className="text-sm text-muted-foreground">
              Passionate full-stack developer creating innovative solutions and pushing the boundaries of web technology.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Projects", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <div className="flex space-x-2">
              {socialLinks.map((link) => (
                <TooltipProvider key={link.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link href={link.url} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="icon" className="h-9 w-9">
                          <link.icon className="h-4 w-4" />
                          <span className="sr-only">{link.name}</span>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{link.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            {isSubscribed ? (
              <p className="text-sm text-muted-foreground">Thanks for subscribing!</p>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Subscribe</Button>
                </form>
              </Form>
            )}
          </div>
        </div>
        <div className="mt-10 border-t pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-center text-sm text-muted-foreground sm:text-left">
              © {currentYear} Bittu Singh. All rights reserved.
            </p>
            <motion.p
              className="flex items-center text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              Built with <Heart className="mx-1 h-4 w-4 text-red-500" /> using Next.js and Tailwind CSS
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  )
}

