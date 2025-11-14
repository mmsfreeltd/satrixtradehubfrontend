// import { CheckCircle2, XCircle, ArrowRight, Info } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Link from "next/link";
// import { SITE_NAME } from "@/global/constant";

// export const metadata = {
//   title: "Pricing | " + SITE_NAME,
//   description: "Transparent pricing plans for crypto and forex trading.",
// };

// interface PricingFeature {
//   name: string;
//   basic: boolean | string;
//   pro: boolean | string;
//   enterprise: boolean | string;
// }

// const features: PricingFeature[] = [
//   {
//     name: "Real-time Market Data",
//     basic: true,
//     pro: true,
//     enterprise: true,
//   },
//   {
//     name: "Basic Chart Analysis",
//     basic: true,
//     pro: true,
//     enterprise: true,
//   },
//   {
//     name: "Market News",
//     basic: true,
//     pro: true,
//     enterprise: true,
//   },
//   {
//     name: "Number of Supported Markets",
//     basic: "10",
//     pro: "50+",
//     enterprise: "100+",
//   },
//   {
//     name: "Advanced Chart Types",
//     basic: false,
//     pro: true,
//     enterprise: true,
//   },
//   {
//     name: "Technical Indicators",
//     basic: "5",
//     pro: "30+",
//     enterprise: "100+",
//   },
//   {
//     name: "Historical Data",
//     basic: "1 Month",
//     pro: "1 Year",
//     enterprise: "Full History",
//   },
//   {
//     name: "Educational Resources",
//     basic: "Basic",
//     pro: "Advanced",
//     enterprise: "Premium",
//   },
//   {
//     name: "Trading Alerts",
//     basic: false,
//     pro: true,
//     enterprise: true,
//   },
//   {
//     name: "API Access",
//     basic: false,
//     pro: "Limited",
//     enterprise: "Full",
//   },
//   {
//     name: "Priority Support",
//     basic: false,
//     pro: false,
//     enterprise: true,
//   },
//   {
//     name: "Custom Indicators",
//     basic: false,
//     pro: false,
//     enterprise: true,
//   },
// ];

// export default function PricingPage() {
//   return (
//     <>
//       {/* Hero Section */}
//       <section className="py-20 md:py-28 bg-muted/30">
//         <div className="container">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
//               Transparent Pricing
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               Choose the plan thats right for your trading needs. All plans
//               include access to our platform with varying levels of features and
//               support.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20">
//         <div className="container">
//           <Tabs defaultValue="monthly" className="w-full">
//             <div className="flex justify-center mb-8">
//               <TabsList className="grid w-[400px] grid-cols-2">
//                 <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
//                 <TabsTrigger value="annual">Annual Billing</TabsTrigger>
//               </TabsList>
//             </div>

//             <TabsContent value="monthly" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Basic Plan */}
//                 <Card className="flex flex-col border">
//                   <CardHeader>
//                     <CardTitle>Basic</CardTitle>
//                     <CardDescription>
//                       Essential tools for beginning traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <p className="text-3xl font-bold">$19</p>
//                       <p className="text-muted-foreground">per month</p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Real-time market data</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Basic charting tools</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Market news</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>10 supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Email support</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full" variant="outline">
//                       Get Started
//                     </Button>
//                   </CardFooter>
//                 </Card>

//                 {/* Pro Plan */}
//                 <Card className="flex flex-col border relative">
//                   <div className="absolute -top-4 left-0 right-0 flex justify-center">
//                     <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
//                       Most Popular
//                     </div>
//                   </div>
//                   <CardHeader>
//                     <CardTitle>Pro</CardTitle>
//                     <CardDescription>
//                       Advanced tools for serious traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <p className="text-3xl font-bold">$49</p>
//                       <p className="text-muted-foreground">per month</p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Everything in Basic</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Advanced charting tools</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>30+ technical indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>50+ supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Trading alerts</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Advanced educational resources</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full">Get Started</Button>
//                   </CardFooter>
//                 </Card>

//                 {/* Enterprise Plan */}
//                 <Card className="flex flex-col border">
//                   <CardHeader>
//                     <CardTitle>Enterprise</CardTitle>
//                     <CardDescription>
//                       Custom solutions for professional traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <p className="text-3xl font-bold">$99</p>
//                       <p className="text-muted-foreground">per month</p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Everything in Pro</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>100+ technical indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>100+ supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Full API access</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Custom indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Priority support</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full" variant="outline">
//                       Get Started
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </div>
//             </TabsContent>

//             <TabsContent value="annual" className="space-y-8">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                 {/* Basic Plan Annual */}
//                 <Card className="flex flex-col border">
//                   <CardHeader>
//                     <CardTitle>Basic</CardTitle>
//                     <CardDescription>
//                       Essential tools for beginning traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <div className="flex items-center gap-2">
//                         <p className="text-3xl font-bold">$15</p>
//                         <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
//                           Save 20%
//                         </div>
//                       </div>
//                       <p className="text-muted-foreground">
//                         per month, billed annually
//                       </p>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         $180 total per year
//                       </p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Real-time market data</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Basic charting tools</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Market news</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>10 supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Email support</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full" variant="outline">
//                       Get Started
//                     </Button>
//                   </CardFooter>
//                 </Card>

//                 {/* Pro Plan Annual */}
//                 <Card className="flex flex-col border relative">
//                   <div className="absolute -top-4 left-0 right-0 flex justify-center">
//                     <div className="bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
//                       Most Popular
//                     </div>
//                   </div>
//                   <CardHeader>
//                     <CardTitle>Pro</CardTitle>
//                     <CardDescription>
//                       Advanced tools for serious traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <div className="flex items-center gap-2">
//                         <p className="text-3xl font-bold">$39</p>
//                         <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
//                           Save 20%
//                         </div>
//                       </div>
//                       <p className="text-muted-foreground">
//                         per month, billed annually
//                       </p>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         $468 total per year
//                       </p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Everything in Basic</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Advanced charting tools</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>30+ technical indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>50+ supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Trading alerts</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Advanced educational resources</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full">Get Started</Button>
//                   </CardFooter>
//                 </Card>

//                 {/* Enterprise Plan Annual */}
//                 <Card className="flex flex-col border">
//                   <CardHeader>
//                     <CardTitle>Enterprise</CardTitle>
//                     <CardDescription>
//                       Custom solutions for professional traders
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent className="flex-1">
//                     <div className="mb-6">
//                       <div className="flex items-center gap-2">
//                         <p className="text-3xl font-bold">$79</p>
//                         <div className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
//                           Save 20%
//                         </div>
//                       </div>
//                       <p className="text-muted-foreground">
//                         per month, billed annually
//                       </p>
//                       <p className="text-sm text-muted-foreground mt-1">
//                         $948 total per year
//                       </p>
//                     </div>
//                     <ul className="space-y-2 mb-6">
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Everything in Pro</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>100+ technical indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>100+ supported markets</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Full API access</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Custom indicators</span>
//                       </li>
//                       <li className="flex items-start gap-2">
//                         <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
//                         <span>Priority support</span>
//                       </li>
//                     </ul>
//                   </CardContent>
//                   <CardFooter>
//                     <Button className="w-full" variant="outline">
//                       Get Started
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </div>
//             </TabsContent>
//           </Tabs>

//           <div className="mt-16">
//             <h2 className="text-2xl font-bold tracking-tight mb-6 text-center">
//               Compare All Features
//             </h2>
//             <div className="overflow-x-auto">
//               <table className="w-full border-collapse min-w-[800px]">
//                 <thead>
//                   <tr className="border-b">
//                     <th className="py-4 px-6 text-left font-medium">
//                       Features
//                     </th>
//                     <th className="py-4 px-6 text-center font-medium">Basic</th>
//                     <th className="py-4 px-6 text-center font-medium">Pro</th>
//                     <th className="py-4 px-6 text-center font-medium">
//                       Enterprise
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {features.map((feature, index) => (
//                     <tr key={index} className="border-b">
//                       <td className="py-4 px-6">{feature.name}</td>
//                       <td className="py-4 px-6 text-center">
//                         {typeof feature.basic === "boolean" ? (
//                           feature.basic ? (
//                             <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
//                           ) : (
//                             <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
//                           )
//                         ) : (
//                           <span>{feature.basic}</span>
//                         )}
//                       </td>
//                       <td className="py-4 px-6 text-center">
//                         {typeof feature.pro === "boolean" ? (
//                           feature.pro ? (
//                             <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
//                           ) : (
//                             <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
//                           )
//                         ) : (
//                           <span>{feature.pro}</span>
//                         )}
//                       </td>
//                       <td className="py-4 px-6 text-center">
//                         {typeof feature.enterprise === "boolean" ? (
//                           feature.enterprise ? (
//                             <CheckCircle2 className="h-5 w-5 text-green-500 mx-auto" />
//                           ) : (
//                             <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
//                           )
//                         ) : (
//                           <span>{feature.enterprise}</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-muted/30">
//         <div className="container">
//           <div className="text-center max-w-3xl mx-auto mb-16">
//             <h2 className="text-3xl font-bold tracking-tight mb-4">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Find answers to common questions about our pricing and platform.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-xl">
//                   Can I change plans later?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   Yes, you can upgrade, downgrade, or cancel your plan at any
//                   time. Changes to your subscription will take effect on your
//                   next billing cycle.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-xl">
//                   Is there a free trial?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   Yes, we offer a 7-day free trial on all plans. No credit card
//                   required to start your trial.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-xl">
//                   What payment methods do you accept?
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   We accept all major credit cards, PayPal, and cryptocurrency
//                   payments including Bitcoin and Ethereum.
//                 </p>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-xl">Do you offer refunds?</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-muted-foreground">
//                   We offer a 30-day money-back guarantee if youre not satisfied
//                   with our service. Contact our support team to request a
//                   refund.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container">
//           <div className="relative overflow-hidden rounded-lg border bg-card p-10">
//             <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

//             <div className="relative z-10 max-w-3xl mx-auto text-center">
//               <h2 className="text-3xl font-bold tracking-tight mb-4">
//                 Still Have Questions?
//               </h2>
//               <p className="text-xl text-muted-foreground mb-8">
//                 Our team is here to help you find the right plan for your
//                 trading needs. Contact us for personalized assistance.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button size="lg" className="group" asChild>
//                   <Link href="/contact">
//                     Contact Us{" "}
//                     <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
//                   </Link>
//                 </Button>
//                 <Button size="lg" variant="outline" asChild>
//                   <Link href="#" className="inline-flex items-center">
//                     <Info className="mr-2 h-4 w-4" />
//                     Schedule a Demo
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import { SITE_DASHBOARD, SITE_NAME } from "@/global/constant";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
  title: `${SITE_NAME}`,
};
export default function HomePage() {
  return redirect(SITE_DASHBOARD);
}
