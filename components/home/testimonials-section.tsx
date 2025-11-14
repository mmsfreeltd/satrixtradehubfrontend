"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import axios from "axios";
import { SITE_TESTIMONIES } from "@/global/constant";
import { useEffect, useState } from "react";

export type TestimonyType = {
  id: number;
  tpix: string;
  tname: string;
  toccupation: string;
  tdescription: string;
};

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<TestimonyType[]>([]);
  async function refreshData() {
    try {
      const res = await axios.get<TestimonyType[]>(SITE_TESTIMONIES);
      setTestimonials(res.data);
    } catch (err) {
      console.error("Failed to reload testimonies", err);
    }
  }
  useEffect(() => {
    refreshData();
  }, []);
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            What Our Traders Say
          </h2>
          <p className="text-xl text-muted-foreground">
            Hear from the trading community about their experiences with our
            platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.slice(0.5).map((testimonial, index) => (
            <Card key={index} className="border bg-card h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.tpix}
                      alt={testimonial.tname}
                    />
                    <AvatarFallback>
                      {testimonial.tname.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{testimonial.tname}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.toccupation}
                    </p>
                  </div>
                </div>

                <blockquote className="text-muted-foreground italic flex-1 mb-6">
                  {testimonial.tdescription}
                </blockquote>

                {/* <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating
                          ? "text-amber-500 fill-amber-500"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
