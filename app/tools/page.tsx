"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Check,
  Info,
  ArrowRight,
  BookOpen,
  LineChart,
  BarChart2,
  PieChart,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { SymbolInfo } from "@/components/trading-widget";

export default function ToolsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Trading Tools & Resources
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Access professional-grade tools and resources designed to enhance
              your trading experience and improve your results.
            </p>
            <Button asChild>
              <Link href="/pricing">Upgrade Your Account</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20" id="charts">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Advanced Chart Analysis
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our advanced charting tools provide comprehensive technical
                analysis capabilities, allowing you to identify trends,
                patterns, and potential entry and exit points with precision.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Multiple Chart Types</h3>
                    <p className="text-muted-foreground">
                      Access line, candlestick, bar, and other chart types to
                      visualize market data in the way that works best for you.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Technical Indicators</h3>
                    <p className="text-muted-foreground">
                      Choose from over 100 technical indicators, including
                      moving averages, RSI, MACD, and Bollinger Bands.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Custom Drawing Tools</h3>
                    <p className="text-muted-foreground">
                      Draw trendlines, Fibonacci retracements, and other custom
                      annotations directly on your charts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card>
                <CardHeader className="pb-0">
                  <div className="flex items-center justify-between">
                    <CardTitle>BTC/USD Performance</CardTitle>
                  </div>
                  <CardDescription>
                    Showing price movement over past 7 days
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <SymbolInfo symbol="BTC" autosize />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Market Analytics Section */}
      <section className="py-20 bg-muted/30" id="analytics">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Comprehensive Market Analytics
            </h2>
            <p className="text-lg text-muted-foreground">
              Get deeper insights into market behavior with our advanced
              analytics tools.
            </p>
          </div>

          <Tabs defaultValue="market" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-[600px] grid-cols-3">
                <TabsTrigger value="market">Market Overview</TabsTrigger>
                <TabsTrigger value="sentiment">Sentiment Analysis</TabsTrigger>
                <TabsTrigger value="correlation">
                  Correlation Matrix
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="market">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary" />
                      <CardTitle>Price Analysis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Track price movements across multiple timeframes to
                      identify trends and potential reversals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Historical price data</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Support and resistance levels</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Price pattern recognition</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BarChart2 className="h-5 w-5 text-primary" />
                      <CardTitle>Volume Analysis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Analyze trading volumes to confirm trends and identify
                      potential market reversals.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Volume indicators</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Volume profile analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Money flow indicators</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-primary" />
                      <CardTitle>Market Breadth</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Assess the overall health of the market by analyzing the
                      breadth of market participation.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Advance-decline indicators</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Market capitalization analysis</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>Sector rotation analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="sentiment">
              <Card>
                <CardHeader>
                  <CardTitle>Market Sentiment Analysis</CardTitle>
                  <CardDescription>
                    Gauge market sentiment through social media, news analysis,
                    and trader positioning data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <h3 className="font-medium">Social Media Sentiment</h3>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-green-500 w-[65%]"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Bearish</span>
                          <span className="text-green-500 font-medium">
                            65% Bullish
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">News Sentiment</h3>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-amber-500 w-[52%]"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Bearish</span>
                          <span className="text-amber-500 font-medium">
                            52% Bullish
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-medium">Trader Positioning</h3>
                        <div className="h-4 w-full bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 w-[40%]"></div>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-red-500 font-medium">
                            40% Bullish
                          </span>
                          <span className="text-muted-foreground">Bearish</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="font-medium mb-2">Sentiment Overview</h3>
                      <p className="text-muted-foreground">
                        Current market sentiment shows a moderate bullish bias
                        based on social media analysis, while trader positioning
                        data indicates potential caution. News sentiment remains
                        neutral with a slight bullish tilt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="correlation">
              <Card>
                <CardHeader>
                  <CardTitle>Asset Correlation Matrix</CardTitle>
                  <CardDescription>
                    Analyze the relationships between different assets to
                    identify diversification opportunities and risk management
                    strategies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] border-collapse">
                      <thead>
                        <tr>
                          <th className="p-2 text-left font-medium">Asset</th>
                          <th className="p-2 text-center font-medium">BTC</th>
                          <th className="p-2 text-center font-medium">ETH</th>
                          <th className="p-2 text-center font-medium">SOL</th>
                          <th className="p-2 text-center font-medium">
                            EUR/USD
                          </th>
                          <th className="p-2 text-center font-medium">Gold</th>
                          <th className="p-2 text-center font-medium">
                            S&P 500
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-t">
                          <td className="p-2 font-medium">BTC</td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            0.85
                          </td>
                          <td className="p-2 text-center bg-green-500/10">
                            0.72
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.21
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.18
                          </td>
                          <td className="p-2 text-center bg-amber-500/20">
                            0.42
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-medium">ETH</td>
                          <td className="p-2 text-center bg-green-500/20">
                            0.85
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            0.81
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.15
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.12
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.38
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-medium">SOL</td>
                          <td className="p-2 text-center bg-green-500/10">
                            0.72
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            0.81
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.11
                          </td>
                          <td className="p-2 text-center bg-amber-500/5">
                            0.08
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.32
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-medium">EUR/USD</td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.21
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.15
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.11
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                          <td className="p-2 text-center bg-amber-500/20">
                            0.48
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.35
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-medium">Gold</td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.18
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.12
                          </td>
                          <td className="p-2 text-center bg-amber-500/5">
                            0.08
                          </td>
                          <td className="p-2 text-center bg-amber-500/20">
                            0.48
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                          <td className="p-2 text-center bg-amber-500/5">
                            0.10
                          </td>
                        </tr>
                        <tr className="border-t">
                          <td className="p-2 font-medium">S&P 500</td>
                          <td className="p-2 text-center bg-amber-500/20">
                            0.42
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.38
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.32
                          </td>
                          <td className="p-2 text-center bg-amber-500/10">
                            0.35
                          </td>
                          <td className="p-2 text-center bg-amber-500/5">
                            0.10
                          </td>
                          <td className="p-2 text-center bg-green-500/20">
                            1.00
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 flex items-start gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-green-500/20 rounded"></div>
                      <span>Strong Correlation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-amber-500/10 rounded"></div>
                      <span>Weak Correlation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-3 w-3 bg-amber-500/5 rounded"></div>
                      <span>No Correlation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20" id="education">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-6">
                Trading Education Resources
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Our comprehensive educational resources are designed to help
                traders of all levels improve their skills and knowledge.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Trading Courses</h3>
                    <p className="text-muted-foreground">
                      Structured courses covering everything from trading basics
                      to advanced strategies for both crypto and forex markets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Market Analysis</h3>
                    <p className="text-muted-foreground">
                      Weekly market reports and analysis providing insights into
                      current market conditions and potential opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Trading Strategies</h3>
                    <p className="text-muted-foreground">
                      Detailed guides on various trading strategies, complete
                      with examples and implementation tips.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/pricing">
                    Access Educational Resources{" "}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="col-span-2">
                <CardHeader>
                  <CardTitle>Featured Course</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-md mb-4 relative">
                    <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-60 rounded-md"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <h3 className="font-medium text-lg mb-2">
                    Technical Analysis Masterclass
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Learn how to analyze market trends, identify patterns, and
                    make data-driven trading decisions.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Info className="h-4 w-4 mr-1" />
                      <span>12 modules • 6 hours</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Preview
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">
                    Risk Management Essentials
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Learn to protect your capital with proper risk management
                    techniques.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4">
                  <h3 className="font-medium mb-2">
                    Crypto Trading Fundamentals
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Master the basics of cryptocurrency trading and blockchain.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Tools CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="relative overflow-hidden rounded-lg border bg-card p-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Ready to Elevate Your Trading?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Access our full suite of professional trading tools and
                resources. Choose a plan that suits your needs and start trading
                smarter today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group" asChild>
                  <Link href="/pricing">
                    View Pricing Plans{" "}
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
