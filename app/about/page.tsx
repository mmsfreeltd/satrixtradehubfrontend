import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SITE_NAME } from "@/global/constant";

export const metadata = {
  title: "About Us | " + SITE_NAME,
  description:
    "Learn about our mission, vision, and the team behind " + SITE_NAME,
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "Alex Thompson",
    role: "Founder & CEO",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: `With over 15 years of experience in financial markets, Alex founded ${SITE_NAME} to bring professional-grade trading tools to everyone.`,
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sophia Rodriguez",
    role: "CTO",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Sophia leads our technology team, focusing on building scalable, secure, and innovative trading solutions.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "David Chen",
    role: "Head of Trading",
    image:
      "https://images.pexels.com/photos/2128807/pexels-photo-2128807.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "David brings his expertise as a former institutional trader to help develop and refine our trading algorithms and strategies.",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Priya Patel",
    role: "Chief Financial Officer",
    image:
      "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Priya oversees our financial operations and ensures we maintain the highest standards of fiscal responsibility.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "James Wilson",
    role: "Head of Customer Success",
    image:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "James leads our customer success team, ensuring traders get the most out of our platform and receive exceptional support.",
    social: {
      linkedin: "#",
    },
  },
  {
    name: "Lisa Zhang",
    role: "Director of Education",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    bio: "Lisa develops our educational content, helping traders of all levels improve their skills and knowledge.",
    social: {
      twitter: "#",
    },
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              About {SITE_NAME}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our mission is to democratize access to professional trading tools
              and empower traders of all levels to succeed in crypto and forex
              markets.
            </p>
            <Button asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Our Story
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, {SITE_NAME} emerged from a simple observation:
                while institutional traders had access to powerful tools and
                resources, individual traders were often left with basic
                platforms that limited their potential.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our founder, Alex Thompson, having spent over a decade in
                institutional trading, decided to bridge this gap by creating a
                platform that would bring professional-grade tools to everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, {SITE_NAME} serves thousands of traders across the globe,
                continuously innovating and expanding our offerings to meet the
                evolving needs of the trading community.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7567434/pexels-photo-7567434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-primary/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              These principles guide everything we do at {SITE_NAME}, from product
              development to customer support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in full transparency in all our operations, from
                  pricing to platform performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously innovate to provide cutting-edge tools and
                  features that give our traders a competitive edge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  Were committed to educating our users, believing that informed
                  traders make better decisions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20" id="team">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Our diverse team of experts is dedicated to building the best
              trading platform for you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                    <Image
                      src={member.image}
                      width={500}
                      height={500}
                      alt={member.name}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <h3 className="text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">{member.bio}</p>
                    <div className="flex gap-2">
                      {member.social.linkedin && (
                        <Link
                          href={member.social.linkedin}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                      )}
                      {member.social.twitter && (
                        <Link
                          href={member.social.twitter}
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Twitter className="h-5 w-5" />
                          <span className="sr-only">Twitter</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="py-20 bg-muted/30" id="careers">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Were always looking for talented individuals who are passionate
              about trading and technology to join our growing team.
            </p>
            <Button asChild>
              <Link href="/contact">View Open Positions</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
