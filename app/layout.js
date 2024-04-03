import { DM_Sans, Inter } from "next/font/google";
import Script from "next/script";
import Preloader from "@/layout/Preloader";
import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";

/** google fonts */
const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});
const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});

/** Font family */
const fontFamily = `${inter.variable} ${dm_sans.variable} `;

export const metadata = {
  title: {
    template: "ZenVibes Technologies|| %s",
    default: "ZenVibes Technologies || Home", // a default is required when creating a template
  },
  description: "Branding, Graphic Designing, Video Editing & Advertising",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fontFamily} scroll-smooth`}>
      <body>
        <Preloader />
        {children}
      </body>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-FZJF4CDT3F"
      ></script>
    </html>
  );
}
