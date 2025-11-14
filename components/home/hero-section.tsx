"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "@/lib/motion";
import { MiniChart } from "../trading-widget";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Trade Smarter with Advanced Crypto & Forex Tools
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional trading platform with real-time analytics, market
                insights, and powerful tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/pricing">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/tools">Explore Tools</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg bg-muted/30 border">
              {/* Empty state before motion is loaded */}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-muted/50 text-primary border"
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Trade with confidence
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Trade Smarter with Advanced Crypto & Forex Tools
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Professional trading platform with real-time analytics, market
              insights, and powerful tools.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="group" asChild>
                <Link href="/pricing">
                  Get Started{" "}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/tools">Explore Tools</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg bg-gradient-to-br from-primary/5 to-secondary/10 border overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-20"></div> */}

            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="w-4/5 h-4/5 bg-card/80 backdrop-blur-sm rounded-lg border shadow-lg  flex flex-col justify-between">
                <MiniChart autosize symbol="BTC" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
