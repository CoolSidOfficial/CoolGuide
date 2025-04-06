"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/app/Components/main/Navbar";
import Footer from "@/app/Components/Footer";

export default function CategoryPage({ params }) {
  const router = useRouter();
  const { category } = params;

  const categoryData = {
    "powerbanks": {
      filters: ["Capacity (mAh)", "Fast Charging", "Number of Ports"],
      products: [
        { name: "Anker 20000mAh", price: "$40" },
        { name: "Xiaomi 10000mAh", price: "$25" },
      ],
    },
    "laptop": {
      filters: ["Processor", "RAM", "Storage", "Graphics"],
      products: [
        { name: "MacBook Air M2", price: "$999" },
        { name: "Dell XPS 15", price: "$1299" },
      ],
    },
    "air-purifier": {
      filters: ["Filter Type", "Coverage Area", "Noise Level"],
      products: [
        { name: "Dyson Pure Cool", price: "$499" },
        { name: "Philips AC2887", price: "$199" },
      ],
    },
  };

  const categoryInfo = categoryData[category] || null;

  useEffect(() => {
    if (!categoryInfo) {
      router.push("/404");
    }
  }, [categoryInfo]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Add flex-grow here to push footer down */}
      <main className="flex-grow">
        <div className="text-center text-white text-4xl my-6">
          {categoryInfo ? `Explore ${category.replace("-", " ")}` : "Category Not Found"}
        </div>
      </main>

      <Footer />
    </div>
  );
}
