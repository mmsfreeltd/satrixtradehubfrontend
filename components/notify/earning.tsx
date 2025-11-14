"use client";

import { useEffect } from "react";
import { toast } from "sonner";
export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

const names = [
  "James Bright",
  "Michael Saul",
  "Anna Lee",
  "John Okafor",
  "Fatima Bello",
  "Liam Smith",
  "Chen Wei",
  "Carlos Diaz",
  "Samantha Taylor",
  "Brian Adams",
  "Jessica White",
  "Derrick Moyo",
  "Thabo Ndlovu",
  "Emily Johnson",
  "Kevin Brown",
  "Nomvula Dlamini",
  "Sipho Khumalo",
  "Jason Miller",
  "Ashley Thompson",
  "Brandon Lee",
  "Kayla Brooks",
  "Steven Green",
  "Ayanda Mthembu",
  "Teboho Malatsi",
  "Jennifer Lewis",
  "Aiden Moore",
];

const countries: { name: string; currency: string }[] = [
  { name: "South Africa", currency: "ZAR" },
  { name: "USA", currency: "USD" },
  { name: "UK", currency: "GBP" },
  { name: "India", currency: "INR" },
  { name: "Germany", currency: "EUR" },
  { name: "Brazil", currency: "BRL" },
];

function getRandomAmount() {
  return (Math.floor(Math.random() * 90000) + 10000).toLocaleString();
}

function getRandomNotification() {
  const name = names[Math.floor(Math.random() * names.length)];
  const country = countries[Math.floor(Math.random() * countries.length)];
  const amount = getRandomAmount();

  return `${name} from ${country.name} just earned ${country.currency} ${amount}`;
}

function getRandomPosition() {
  const positions: Position[] = [
    "top-left",
    "top-center",
    "top-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];
  return positions[Math.floor(Math.random() * positions.length)];
}

export default function EarningNotifications() {
  useEffect(() => {
    const interval = setInterval(() => {
      toast.custom(
        (t) => (
          <div
            className="bg-white dark:bg-zinc-900 shadow-lg rounded-md px-4 py-3 text-sm border border-border animate-in fade-in slide-in-from-bottom max-w-[90vw] sm:max-w-xs cursor-pointer"
            onClick={() => toast.dismiss(t)}
          >
            {getRandomNotification()}
          </div>
        ),
        {
          position: getRandomPosition(),
          duration: 3000,
        }
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return null;
}
