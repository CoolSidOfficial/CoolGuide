import Image from "next/image";
import Navbar from "./Components/main/Navbar";
import Header from "./Components/main/Header";
import About from "./Components/main/About"
import Explorer from "./Components/main/Explorer";
import { Yatra_One } from "next/font/google";


export default function Home() {
  return (
   <>
    <Navbar/>   
   <Header/>
   <About/>
   <Explorer/>
   </>
  );
}
