import Image from "next/image";
import Navbar from "./Components/main/Navbar";
import Header from "./Components/main/Header";
import About from "./Components/main/About"
import Explorer from "./Components/main/Explorer";
import { Yatra_One } from "next/font/google";
import Featured from "./Components/main/Featured";
import Footer from "./Components/Footer";

export default function Home() {
  return (
   <>
    <Navbar/>   
   <Header/>
   <About/>
   <Explorer/>
   <Featured/>
   <Footer/>
   </>
  );
}
