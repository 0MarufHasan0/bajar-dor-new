import { Hind_Siliguri } from "next/font/google";
import "./globals.css";
import Navbar from "../component/Navbar";
import MarqueeHeadline from "../component/Marquee";
import { ToastContainer } from "react-toastify";
import Footer from "@/component/Footer";

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "বাজার দর ",
  description: "BazarDor - Daily Market Prices",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${hindSiliguri.className} h-full antialiased `}
    >
          <body className="min-h-full flex flex-col ">
    
         
      <Navbar />
  
              
                <ToastContainer/>
                
     
        <MarqueeHeadline />
     
    
      
        
  
        
        
        {children}

        <Footer/>
        
        </body>
    </html>
  );
}
