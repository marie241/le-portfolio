"use client";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Button } from "@/components/ui/button";
import Stack from "./components/Stack";
import Portfolio from "./components/Portfolio";
import Image from "next/image";
import Sect from "./components/sect";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="pt-16">
        <Sect />
      </div>

      

      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-20 py-10 bg-white text-black">
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/imagechat.png"
            alt="Portrait Abraham"
            width={400}
            height={300}
            className="w-full max-w-md h-auto object-cover rounded-xl"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-black">À mon propos</h1>
          <p className="text-lg md:text-xl leading-relaxed text-slate-700">
            Nom: Abraham Alex Nyoundou<br />
            Nationalité: Gabonaise<br />
            Téléphone: 241 77 17 28 20<br />
            E-mail: abrahamhuguesmboundou@gmail.com<br />
            Adresse: Libreville, Gabon<br />
          </p>
          <p className="mt-4 text-lg md:text-xl leading-relaxed text-slate-700">
            En tant que Product Manager, j'oriente les équipes vers les bons objectifs, je définis des KPIs mesurables, et j'assure l'alignement entre les parties prenantes.
            <br />
            En tant que développeur frontend, je livre des interfaces modernes, accessibles et rapides avec un focus sur l'expérience utilisateur.
          </p>
        </div>
      </section>

      <section className="bg-black text-white py-16 px-5 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-4xl font-bold text-center text-white">
            Ma vision du Product Management et du développement frontend
          </h1>
          {/* <p className="mt-4 text-lg md:text-2xl text-center text-blue-200 max-w-3xl mx-auto">
            Je combine une vision produit stratégique avec une exécution front-end solide pour transformer les besoins utilisateurs en interfaces performantes.
          </p> */}

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-950/80 border border-blue-500 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Stratégie Produit</h3>
              <p className="text-blue-100 mt-2">Roadmaps, priorisation, OKR, discovery utilisateur.</p>
            </div>
            <div className="bg-blue-950/80 border border-blue-500 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Conception UX/UI</h3>
              <p className="text-blue-100 mt-2">Ateliers, prototypes, tests utilisateurs, design system.</p>
            </div>
            <div className="bg-blue-950/80 border border-blue-500 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Développement Frontend</h3>
              <p className="text-blue-100 mt-2">React, Next.js, Tailwind, performance, qualité du code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* a mon propos */}
      {/* mes stack */}
      <Stack />
      {/* mes stack */}

      {/* Portfolio */}
      <Portfolio />
      {/* Portfolio */}

      {/* CTA */}
      <section className="bg-black text-white py-12 px-5 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-300">
          Prêt à collaborer ?
        </h2>
        <p className="text-lg md:text-2xl mb-6 text-white/90">
          Contactez-moi dès aujourd'hui pour discuter de votre projet et voir
          comment je peux vous aider à transformer votre vision en produit.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-blue-400 text-white hover:bg-blue-400 hover:text-black"
        >
          Contactez-moi
        </Button>
      </section>
      {/* CTA */}

      {/* <Footer /> */}
      <Footer />
    </>
  );
}
