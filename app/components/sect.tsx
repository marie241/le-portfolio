"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/Spotlight";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function sect() {
  return (
    <div>
      <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

        <div className="flex h-full ">
          {/* Left content */}
          <div className="flex-1  p-8 relative z-10 flex flex-col justify-center">
            <div className="relative z-10 text-center text-white max-w-3xl px-8">
              <h1 className="md:text-3xl text-2xl">Mbolo samba</h1>
              <h2 className="md:text-5xl mt-2">Je suis Abraham</h2>
              <span className="md:text-4xl text-sky-400 font-bold block mt-4">
                Développeur Web Front-End & Entrepreneur Web
              </span>
              {/* <p className="text-lg text-gray-300 mt-4 text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                dolorem illo, ducimus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Est laborum unde asperiores.
              </p> */}
              <Button className="h-12 w-32 rounded-full bg-sky-600 hover:bg-sky-700  mt-8 text-white text-lg">
                Mon CV
              </Button>
            </div>
          </div>

          {/* Right content */}
          <div className="">
            <Image
              src="/hero.png"
              alt="Destination Icon"
              width={400}
              height={300}
              className=""
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
