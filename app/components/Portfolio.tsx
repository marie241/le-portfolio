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
                  <h3 className="text-xl font-semibold mb-2"> <a href="https://dengui.ga" target="_blank" rel="noopener noreferrer">Dengui</a></h3>
                  <p className="text-gray-400 text-sm">
                    Annuaire culturel pour la promotion des artistes du Gabon.
                    Dengui
                  </p>
                  <samp>Techno: WordPress</samp>
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
                  <h3 className="text-xl font-semibold mb-2"> <a href="https://pondzi-landing-page.vercel.app/" target="_blank" rel="noopener noreferrer">Pondzi-App</a></h3>
                  <p className="text-gray-400 text-sm">
                    SAAS de gestion de stock et de facturation pour les TPE et
                    PME au Gabon.
                  </p>
                  <samp>Techno: Next.js + Supabase</samp>
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
                  <h3 className="text-xl font-semibold mb-2"> <a href="https://delphes-solutions.com/" target="_blank" rel="noopener noreferrer">Delphes Solutions</a></h3>
                  <p className="text-gray-400 text-sm">
                    Site vitrine de la société Delphes Solutions au Gabon.
                  </p>
                  <samp>Techno: WordPress </samp>
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
                  <h3 className="text-xl font-semibold mb-2"> <a href="#" target="_blank" rel="noopener noreferrer">EBS School</a></h3>
                  <p className="text-gray-400 text-sm">
                    Site vitrine de l'école EBS School au Gabon. Ecole suppérieure
                    de commerce et de gestion.
                  </p>
                  <samp>Techno: React.js </samp>
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
                  <h3 className="text-xl font-semibold mb-2"> <a href="http://twendyane.vercel.app/" target="_blank" rel="noopener noreferrer">Twendyane</a></h3>
                  <p className="text-gray-400 text-sm">
                    Site vitrine de l'agence de voyage Twendyane au Gabon.
                  </p>
                  <samp>Techno: Next.js</samp>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/baponga.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2"> <a href="baponga.ga" target="_blank" rel="noopener noreferrer">Twendyane</a></h3>
                  <p className="text-gray-400 text-sm">
                    Site portfolio de l'artiste Franck Ba'ponga pour sa discographie.
                  </p>
                  <samp>Techno: WordPress</samp>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
