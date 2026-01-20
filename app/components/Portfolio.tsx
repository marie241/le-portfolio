import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Portfolio() {
  return (
    <div>
      <section className="bg-black text-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Mon Portfolio</h2>
          <p className="text-gray-400">Quelques-uns de mes projets récents</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/dengui.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/pondzilanding.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/delph.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 pt-5">
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/EBS.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/twend.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/RECR.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
                  <p className="text-gray-400 text-sm">
                    Site e-commerce avec système de panier et dashboard admin
                    sous Next.js + Stripe.
                  </p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
