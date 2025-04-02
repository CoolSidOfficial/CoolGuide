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
      router.push("/404"); // Redirect to 404 if category is invalid
    }
  }, [categoryInfo]);

  return (
    <>
      <Navbar />
      <div className="text-center text-4xl my-6">
        {categoryInfo ? `Explore ${category.replace("-", " ")}` : "Category Not Found"}
      </div>

      {categoryInfo && (
        <div className="container mx-auto px-4">
          {/* Filters Section */}
          <div className="text-2xl font-bold mb-4">Filters</div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {categoryInfo.filters.map((filter, index) => (
              <div key={index} className="p-4 border rounded bg-gray-200 text-center">
                {filter}
              </div>
            ))}
          </div>

          {/* Products Section */}
          <div className="text-2xl font-bold mb-4">Available Products</div>
          <div className="grid grid-cols-3 gap-4">
            {categoryInfo.products.map((product, index) => (
              <div key={index} className="p-4 border rounded bg-white text-center shadow-lg">
                <div className="text-xl font-semibold">{product.name}</div>
                <div className="text-gray-700">{product.price}</div>
              </div>
            ))}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
