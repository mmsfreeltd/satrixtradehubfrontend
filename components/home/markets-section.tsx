"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight } from "lucide-react";
import { MiniChart } from "../trading-widget";

interface MarketItem {
  name: string;
  symbol: string;
  price: string;
  change: string;
  changePercent: string;
  trend: "up" | "down";
}

const cryptoMarkets: MarketItem[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$42,856.20",
    change: "+$1,042.35",
    changePercent: "+2.45%",
    trend: "up",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,764.89",
    change: "+$87.52",
    changePercent: "+3.17%",
    trend: "up",
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$123.78",
    change: "+$12.54",
    changePercent: "+10.12%",
    trend: "up",
  },
  {
    name: "Cardano",
    symbol: "ADA",
    price: "$0.4856",
    change: "-$0.0125",
    changePercent: "-2.58%",
    trend: "down",
  },
  {
    name: "Ripple",
    symbol: "XRP",
    price: "$0.6231",
    change: "+$0.0089",
    changePercent: "+1.43%",
    trend: "up",
  },
  {
    name: "Polkadot",
    symbol: "DOT",
    price: "$6.4531",
    change: "-$0.1254",
    changePercent: "-1.91%",
    trend: "down",
  },
];

const forexMarkets: MarketItem[] = [
  {
    name: "Euro / US Dollar",
    symbol: "EUR/USD",
    price: "1.0862",
    change: "+0.0023",
    changePercent: "+0.21%",
    trend: "up",
  },
  {
    name: "Great Britain Pound / US Dollar",
    symbol: "GBP/USD",
    price: "1.2754",
    change: "-0.0015",
    changePercent: "-0.12%",
    trend: "down",
  },
  {
    name: "US Dollar / Japanese Yen",
    symbol: "USD/JPY",
    price: "147.23",
    change: "+0.43",
    changePercent: "+0.29%",
    trend: "up",
  },
  {
    name: "Australian Dollar / US Dollar",
    symbol: "AUD/USD",
    price: "0.6578",
    change: "-0.0034",
    changePercent: "-0.52%",
    trend: "down",
  },
  {
    name: "US Dollar / Canadian Dollar",
    symbol: "USD/CAD",
    price: "1.3456",
    change: "+0.0067",
    changePercent: "+0.50%",
    trend: "up",
  },
  {
    name: "South Africa / USDT",
    symbol: "ZARUSD",
    price: "0.8823",
    change: "-0.0012",
    changePercent: "-0.14%",
    trend: "down",
  },
];

export function MarketsSection() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeTab, setActiveTab] = useState("crypto");

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Live Market Data
          </h2>
          <p className="text-xl text-muted-foreground">
            Stay updated with the latest market trends and prices across
            cryptocurrency and forex markets.
          </p>
        </div>

        <Tabs
          defaultValue="crypto"
          className="w-full"
          onValueChange={setActiveTab}
        >
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="crypto">Cryptocurrency</TabsTrigger>
              <TabsTrigger value="forex">Forex</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="crypto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cryptoMarkets.map((market, index) => (
                <MarketCard key={index} market={market} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forex">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {forexMarkets.map((market, index) => (
                <MarketCard key={index} market={market} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Market data is for demonstration purposes only. Updated every 5
            minutes.
          </p>
          <a
            href="/tools"
            className="text-primary font-medium hover:underline inline-flex items-center"
          >
            View all markets
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function MarketCard({ market }: { market: MarketItem }) {
  return (
    <Card className="overflow-hidden border hover:shadow-md transition-all duration-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg">{market.name}</h3>
            <p className="text-sm text-muted-foreground">{market.symbol}</p>
          </div>
        </div>

        <MiniChart symbol={market.symbol} />
      </CardContent>
    </Card>
  );
}
