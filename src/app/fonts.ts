import localFont from "next/font/local";
import { Be_Vietnam_Pro } from "next/font/google";
export const dfvnGldDisplay = localFont({
  src: [
    {
      path: "../../public/fonts/DFVN GLD Display Black.otf",
      weight: "900",
      style: "normal",
    },
    // {
    //   path: "../public/fonts/DFVN GLD Display Regular.otf",
    //   weight: "400",
    //   style: "normal",
    // },
    // {
    //   path: "../public/fonts/DFVN GLD Display Bold.otf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-display",
  display: "swap",
});

export const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});