/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";

export interface ChartProps {
  data: any[];
  index: string;
  categories: string[];
  colors?: string[];
  valueFormatter?: (value: number) => string;
  className?: string;
}

export function AreaChart({
  data,
  index,
  categories,
  colors = ["hsl(var(--chart-1))"],
  valueFormatter = (value: number) => value.toString(),
  className,
}: ChartProps) {
  // Create a simple implementation that mimics Tremor's AreaChart
  return (
    <div className={className}>
      <svg viewBox="0 0 100 30" className="w-full h-full">
        <path
          d="M0,20 Q10,18 20,15 T40,10 T60,8 T80,5 T100,3"
          fill="none"
          stroke="hsl(var(--chart-1))"
          strokeWidth="0.5"
        />
        <path
          d="M0,30 L0,20 Q10,18 20,15 T40,10 T60,8 T80,5 T100,3 L100,30 Z"
          fill="hsl(var(--chart-1) / 0.1)"
        />
      </svg>
      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        {data.map((item, i) => (
          <div
            key={i}
            className={
              i === 0 || i === data.length - 1 ? "block" : "hidden sm:block"
            }
          >
            {item[index]}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BarChart({
  data,
  index,
  categories,
  colors = ["hsl(var(--chart-2))"],
  valueFormatter = (value: number) => value.toString(),
  className,
}: ChartProps) {
  // Create a simple implementation that mimics Tremor's BarChart
  return (
    <div className={className}>
      <div className="flex h-full items-end gap-1">
        {data.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-chart-2/80 rounded-t-sm"
              style={{
                height: `${(item[categories[0]] / 20) * 100}%`,
              }}
            ></div>
            <div className="text-xs text-muted-foreground mt-1">
              {item[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
