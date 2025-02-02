import { Advent_Pro, Noto_Sans_JP, Libre_Baskerville } from "next/font/google";

export const notoJP = Noto_Sans_JP({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-notojp",
    display: "swap",
  });
  
  export const adventPro = Advent_Pro({
    weight: ["400", "700"],
    subsets: ["latin"],
    variable: "--font-adventpro",
    display: "swap",
  });
  
  export const libreBaskerville = Libre_Baskerville({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-libre",
    display: "swap",
  });