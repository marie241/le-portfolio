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
                  <h3 className="text-xl font-semibold mb-2"> <a href="https://v0-landing-page-pondzi.vercel.app/" target="_blank" rel="noopener noreferrer">Pondzi-App</a></h3>
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
                  src="/ouyaboung.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2"> <a href="https://ouyaboung-eight.vercel.app/" target="_blank" rel="noopener noreferrer">Ouyaboung</a></h3>
                  <p className="text-gray-400 text-sm">
                    Appication PWA d'entigaspillage alimentaire en afrique.
                  </p>
                  <samp>Techno: IA + NEXT JS </samp>
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
                  src="/ceg.png"
                  alt="Projet 3"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>

              <CardFooter>
                <div className="">
                  <h3 className="text-xl font-semibold mb-2"> <a href="#" target="_blank" rel="noopener noreferrer">Confedération des entreprises du Gabon</a></h3>
                  <p className="text-gray-400 text-sm">
                    Site de la Confedération des entreprises du Gabon.
                  </p>
                  <samp>Techno: React.js + Supabase </samp>
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
                  <h3 className="text-xl font-semibold mb-2"> <a href="baponga.ga" target="_blank" rel="noopener noreferrer">Ba'ponga</a></h3>
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

      {/* Section Product Manager */}
      <section className="bg-blue-950 text-white py-16 px-4 md:px-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2 text-blue-300">Réalisations Product Manager</h2>
          <p className="text-blue-200">Exemples de projets où j’ai mené la vision produit et l’exécution flux</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 pt-5">
          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/ouyaboung.png"
                  alt="Ouyaboung"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardFooter>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black">Ouyaboung</h3>
                  <p className="text-gray-400 text-sm">
                    Gestion de projet agile, respect des calendriers et des budgets, atteinte des objectifs à 100 %.
Mise en place des outils de pilotage et des indicateurs de performance permettant d’optimiser la gestion des product backlogs.
Management opérationnel d’équipe, soutien technique, suivi des performances individuelles et collectives.
Développement des compétences des collaborateurs sur le plan technique, organisation de la formation.
                  </p>
                  <samp className="text-blue-300">PM + Frontend</samp>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/pondzilanding.png"
                  alt="Pondzi-App"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardFooter>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Pondzi-App</h3>
                  <p className="text-gray-400 text-sm">
                    Gestion de projet agile, respect des calendriers et des budgets, atteinte des objectifs à 100 %.
Mise en place des outils de pilotage et des indicateurs de performance permettant d’optimiser la gestion des product backlogs.
Management opérationnel d’équipe, soutien technique, suivi des performances individuelles et collectives.
Développement des compétences des collaborateurs sur le plan technique, organisation de la formation.
                  </p>
                  <samp className="text-blue-300">PM + Frontend</samp>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/ceg.png"
                  alt="Confedération des entreprises du Gabon"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardFooter>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Confédération des entreprises du Gabon</h3>
                  <p className="text-gray-400 text-sm">
                    Projet de site web pour institution, pilotage produit, coordination équipe technique.
                  </p>
                  <samp className="text-blue-300">PM + Frontend</samp>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <Image
                  src="/classertif.png"
                  alt="Classertif"
                  width={500}
                  height={300}
                  className="w-full object-cover"
                />
              </CardHeader>
              <CardFooter>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Classertif</h3>
                  <p className="text-gray-400 text-sm">
                    Plateforme de certification en ligne, gestion des évaluations et des parcours de formation.
                  </p>
                  <samp className="text-blue-300">PM + Frontend</samp>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
