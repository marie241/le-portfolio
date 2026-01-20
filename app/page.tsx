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
      {/* a mon propos */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-5 md:px-20 py-10">
        <h1 className="md:hidden lg:hidden text-3xl md:text-4xl font-bold mb-4">
          À mon propos
        </h1>
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/imagechat.png"
            alt="Destination Icon"
            width={400}
            height={300}
            className="w-full max-w-md h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="hidden md:block text-3xl md:text-4xl font-bold mb-4">
            À mon propos
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            Nom: Abraham alex Nyoundou <br />
            Nationalité: Gabonaise <br /> 
            Téléphone: 241 77 17 28 20 <br />
            E-mail: abrahamhuguesmboundou@gmail.com  <br />
            Adresse: Libreville, Gabon <br />
            <br />
            Je suis un développeur qui s'engage par le numérique, ponctuel et
            prêt à apporter de la valeur à votre projet. <br /> Je suis
            disponible à apporter ma contribution au développement de celle-ci
            grâce à mes compétences, mon professionnalisme, ma diligence et ma
            résilience
            <br />
           
          </p>
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
      <section className="bg-gray-600 text-white py-12 px-5 md:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à collaborer ?
        </h2>
        <p className="text-lg md:text-2xl mb-6">
          Contactez-moi dès aujourd'hui pour discuter de votre projet et voir
          comment je peux vous aider à atteindre vos objectifs.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="border-white text-black hover:bg-white hover:text-blue-600"
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
