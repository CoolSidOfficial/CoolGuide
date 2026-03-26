import React from "react";
import Link from "next/link";

function Explorer() {
  return (
    <>
      <div className="bg-[#1F2937] py-16 px-4 flex flex-col items-center text-center">

        {/* Heading */}
        <h1 className="text-white text-2xl md:text-3xl xl:text-4xl font-semibold max-w-3xl">
          Find the Perfect Electronics with CoolGuide
        </h1>

        {/* Description */}
        <p className="text-white mt-4 text-sm md:text-lg max-w-2xl">
          Browse our comprehensive guides, search for products, and
          connect with other users to make an informed decision.
        </p>

        {/* Search Section */}
        <div className="flex flex-col sm:flex-row gap-3 mt-8 w-full max-w-xl">
          <input
            className="bg-black text-white border border-white rounded p-2 flex-1"
            type="text"
            placeholder="Search For Electronics..."
          />

          <button className="bg-white px-6 py-2 rounded-lg hover:bg-slate-300 transition">
            Search
          </button>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 mt-10">
          
          <Link href="/buying-guide/laptop">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              Laptops
            </button>
          </Link>

          <Link href="/buying-guide/air-purifier">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              Air-Purifier
            </button>
          </Link>

          <Link href="/buying-guide/tv">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              TVs
            </button>
          </Link>

          <Link href="/buying-guide/earphones">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              Headphones
            </button>
          </Link>

          <Link href="/buying-guide/fridge">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              Fridge
            </button>
          </Link>

          <Link href="/buying-guide/ac">
            <button className="bg-white rounded-md hover:bg-slate-300 px-6 py-2 w-full">
              ACs
            </button>
          </Link>

        </div>

      </div>
    </>
  );
}

export default Explorer;