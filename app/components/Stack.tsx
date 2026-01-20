import Image from "next/image";

const stacks = [
  { name: "HTML", src: "/logos/html.png" },
  { name: "CSS", src: "/logos/CSS.png" },
  { name: "JavaScript", src: "/logos/JS.png" },
  { name: "React", src: "/logos/REACT.png" },
  { name: "Next.js", src: "/logos/Next.png" },
  { name: "Firebase", src: "/logos/Firebase.png" },
  { name: "SQL", src: "/logos/sql.png" },
  { name: "Figma", src: "/logos/figma.png" },
  { name: "n8n", src: "/logos/n8n.jpeg" },
  { name: "WordPress", src: "/logos/WORDPRESS.png" },
];

export default function Stack() {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Mes Stacks</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
        {stacks.map((stack, index) => (
          <div
            key={index}
            className="bg-[#1A1A1A] p-4 rounded-xl shadow-md hover:shadow-purple-500/30 transition duration-300 flex flex-col items-center w-32 h-32 justify-center"
          >
            <div className="w-16 h-16 relative">
              <Image
                src={stack.src}
                alt={stack.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm mt-3 text-center">{stack.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
