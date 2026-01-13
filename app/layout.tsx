import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Barlow } from "next/font/google";

import Script from "next/script";
import "./globals.css";

// Vendor CSS imports
import "@/public/assets/vendors/bootstrap-select/bootstrap-select.min.css";
import "@/public/assets/vendors/animate/animate.min.css";
import "@/public/assets/vendors/fontawesome/css/all.min.css";
import "@/public/assets/vendors/jquery-ui/jquery-ui.css";
import "@/public/assets/vendors/jarallax/jarallax.css";
import "@/public/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css";
import "@/public/assets/vendors/nouislider/nouislider.min.css";
import "@/public/assets/vendors/nouislider/nouislider.pips.css";
import "@/public/assets/vendors/ostech-icons/style.css";
import "@/public/assets/vendors/owl-carousel/css/owl.carousel.min.css";
import "@/public/assets/vendors/owl-carousel/css/owl.theme.default.min.css";
import "@/public/assets/css/ostech-professional.css";
import "@/public/assets/vendors/bootstrap/css/bootstrap.min.css";

import '@fortawesome/fontawesome-free/css/all.min.css';


const barlow = Barlow({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-barlow",
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Ins Software Agency | Home",
  description:
    "Ostech – IT Solutions & Services Company HTML template",
  icons: {
    icon: "/assets/images/favicons/favicon-32x32.png",
    apple: "/assets/images/favicons/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/fontawesome.min.css" integrity="sha512-M5Kq4YVQrjg5c2wsZSn27Dkfm/2ALfxmun0vUE3mPiJyK53hQBHYCVAtvMYEC7ZXmYLg8DVG4tF8gD27WmDbsg=="   />
  </head>

      <body
        className={`${barlow.variable} ${barlow.variable} antialiased custom-cursor`}
      >
        {children}
         {/* <!--  ALl JS Plugins =====================
        ====================================== -->
    <!--  jquery-3.7.0 js plugins --> */}
    <Script src="assets/vendors/jquery/jquery-3.7.0.min.js"></Script>
    {/* <!--  Bootstrap js plugins --> */}
    <Script src="assets/vendors/bootstrap/js/bootstrap.bundle.min.js"></Script>
    <Script src="assets/vendors/bootstrap-select/bootstrap-select.min.js"></Script>
    {/* <!--  jarallax js plugins --> */}
    <Script src="assets/vendors/jarallax/jarallax.min.js"></Script>
    {/* <!--  jquery-ui js plugins --> */}
    <Script src="assets/vendors/jquery-ui/jquery-ui.js"></Script>
    {/* <!--  jquery-ajaxchimp js plugins --> */}
    <Script src="assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js"></Script>
    {/* <!--  jquery-appear js plugins --> */}
    <Script src="assets/vendors/jquery-appear/jquery.appear.min.js"></Script>
    {/* <!-- jquery-circle-progress js plugins --> */}
    <Script src="assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js"></Script>
    {/* <!--  magnific-popup js plugins --> */}
    <Script src="assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js"></Script>
    {/* <!--  validate js plugins --> */}
    <Script src="assets/vendors/jquery-validate/jquery.validate.min.js"></Script>
    {/* <!--  nouislider js plugins --> */}
    <Script src="assets/vendors/nouislider/nouislider.min.js"></Script>
    {/* <!--  wnumb js plugins --> */}
    <Script src="assets/vendors/wnumb/wNumb.min.js"></Script>
    {/* <!--  owl-carousel js plugins --> */}
    {/* <Script src="assets/vendors/owl-carousel/js/owl.carousel.min.js"></Script> */}
    {/* <!--  Bootstrap js plugins --> */}
    <Script src="assets/vendors/wow/wow.js"></Script>
    {/* <!--  wow js plugins --> */}
    <Script src="assets/vendors/imagesloaded/imagesloaded.min.js"></Script>
    {/* <!--  isotope js plugins --> */}
    <Script src="assets/vendors/isotope/isotope.js"></Script>
    {/* <!--  countdown js plugins --> */}
    <Script src="assets/vendors/countdown/countdown.min.js"></Script>
    {/* <!--  Chart.js js plugins --> */}
    {/* <Script src="../../cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.min.js"></Script> */}
    {/* <!--  jquery-circleType js plugins --> */}
    <Script src="assets/vendors/jquery-circleType/jquery.circleType.js"></Script>
    <Script src="assets/vendors/jquery-lettering/jquery.lettering.min.js"></Script>
   
    {/* <Script src="assets/js/ostech.js"></Script> */}
      </body>
    </html>
  );
}
