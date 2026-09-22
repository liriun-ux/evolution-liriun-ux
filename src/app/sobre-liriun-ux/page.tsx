import { Card3D } from "@/animation/card3d";
import ProcesoCanvas from "@/animation/ensamble";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre LIRIUN-UX",
  description:
    "Conoce LIRIUN-UX, un proyecto enfocado en crear sitios web claros, útiles y accesibles para pequeñas PYMEs que necesitan una presencia digital propia.",

  alternates: {
    canonical: "/sobre-liriun-ux",
  },

  openGraph: {
    title: "Sobre LIRIUN-UX | Sitios web para negocios",
    description:
      "Conoce qué es LIRIUN-UX, nuestro enfoque y cómo creamos sitios web para que los negocios sean encontrados y entendidos.",
    url: "/sobre-liriun-ux",
    siteName: "LIRIUN-UX",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/img/og-liriun-ux.png",
        width: 1200,
        height: 630,
        alt: "LIRIUN-UX | Sitios web para negocios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre LIRIUN-UX | Sitios web para negocios",
    description:
      "Conoce qué es LIRIUN-UX, nuestro enfoque y cómo creamos sitios web para que los negocios sean encontrados y entendidos.",
    images: ["/img/og-liriun-ux.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.liriun-ux.tecnologia.bo/#organization",
      name: "LIRIUN-UX",
      url: "https://www.liriun-ux.tecnologia.bo/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.liriun-ux.tecnologia.bo/img/logo.png",
      },
      description:
        "LIRIUN-UX crea sitios web para pequeñas PYMEs que necesitan una presencia digital propia, clara y accesible.",
      email: "liriun.ux@gmail.com",
      areaServed: [
        {
          "@type": "City",
          name: "La Paz",
          containedInPlace: {
            "@type": "Country",
            name: "Bolivia",
          },
        },
        {
          "@type": "City",
          name: "El Alto",
          containedInPlace: {
            "@type": "Country",
            name: "Bolivia",
          },
        },
      ],
      knowsAbout: [
        "Diseño web",
        "Desarrollo web",
        "Experiencia de usuario",
        "SEO",
        "AEO",
        "Accesibilidad web",
        "Sitios web para negocios",
      ],
    },

    {
      "@type": "AboutPage",
      "@id":
        "https://www.liriun-ux.tecnologia.bo/sobre-liriun-ux#webpage",
      url: "https://www.liriun-ux.tecnologia.bo/sobre-liriun-ux",
      name: "Sobre LIRIUN-UX",
      headline: "Sitios web para que los negocios sean encontrados y entendidos.",
      description:
        "Conoce qué es LIRIUN-UX, por qué existe, nuestro enfoque, filosofía y las tecnologías que utilizamos para crear sitios web para pequeñas PYMEs.",
      inLanguage: "es-BO",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://www.liriun-ux.tecnologia.bo/#website",
        url: "https://www.liriun-ux.tecnologia.bo/",
        name: "LIRIUN-UX",
      },
      about: {
        "@id": "https://www.liriun-ux.tecnologia.bo/#organization",
      },
      mainEntity: {
        "@id": "https://www.liriun-ux.tecnologia.bo/#organization",
      },
    },
  ],
};

export default function SobreLiriunUx() {
  return (
      <>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
<main className="sobre-liriun">
      <ProcesoCanvas/>
  <header className="sobre-liriun-hero">
    <span>LIRIUN-UX</span>

  <Card3D className="hero-content">
    <h1>
      Sitios web para que los negocios sean encontrados y entendidos.
    </h1>

    <p>
      LIRIUN-UX crea sitios web para pequeñas PYMEs que necesitan una
      presencia digital propia, clara y accesible.
    </p>
  </Card3D>
  </header>


<section className="sobre-liriun-que-es">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>¿Qué es LIRIUN-UX?</h2>
    </header>

    <p>
      LIRIUN-UX crea presencia digital para negocios a través de sitios web especializados,
      enfocada en que las personas, Google y los sistemas de IA puedan
      comprender qué hace el negocio, qué ofrece y cómo contactarlo.
    </p>

    <p>
      El sitio web organiza la información del negocio para que sus posibles
      clientes puedan conocerlo, encontrar sus productos o servicios,
      conocer su ubicación y tomar una decisión.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-por-que">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>¿Por qué existe LIRIUN-UX?</h2>
    </header>

    <p>
      Muchos negocios utilizan internet para conseguir clientes, pero no
      siempre cuentan con un espacio propio donde la información de su
      negocio pueda estar organizada y disponible.
    </p>

    <p>
      LIRIUN-UX existe para ofrecer a las pequeñas PYMEs una alternativa
      accesible y de calidad para construir esa presencia digital.
    </p>

    <p>
      El objetivo es que, cuando alguien busque un producto, un servicio,
      un negocio o un local, pueda encontrar información que le permita
      comprenderlo y saber qué hacer a continuación.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-enfoque">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>Nuestro enfoque</h2>

      <p>
        Diseñamos desde el punto de vista de quien busca.
      </p>
    </header>

    <div>
      <article>
        <h3>¿Qué busca?</h3>
        <p>
          Identificamos qué puede estar buscando una persona cuando necesita
          un producto, servicio o negocio.
        </p>
      </article>

      <article>
        <h3>¿Cómo lo busca?</h3>
        <p>
          Consideramos cómo las personas suelen encontrar y consultar
          información sobre negocios de ese tipo.
        </p>
      </article>

      <article>
        <h3>¿Qué necesita saber?</h3>
        <p>
          Determinamos qué información necesita para comprender el negocio
          y sus productos o servicios.
        </p>
      </article>

      <article>
        <h3>¿Qué necesita para decidir?</h3>
        <p>
          Organizamos la información de acuerdo con lo que puede necesitar
          antes de contactar, comprar o visitar el negocio.
        </p>
      </article>

      <article>
        <h3>¿Cuál es el siguiente paso?</h3>
        <p>
          El sitio debe facilitar que la persona pueda contactar, comprar
          o conocer la ubicación del negocio.
        </p>
      </article>
    </div>

    <p>
      A partir de esto definimos la información, la estructura, las páginas
      y finalmente el diseño del sitio.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-filosofia">
  <Card3D className="proceso-conteiner">
<header>
  <h2>Nuestra filosofía</h2>
</header>

<figure>
  <blockquote>
    <p className=" lopl ">
      Un sitio web no debería existir solamente para ser encontrado,
      sino para ser entendido.
    </p>
  </blockquote>
  <figcaption>— <cite>Liriun-UX</cite></figcaption>
</figure>
    
    <p>
      Para LIRIUN-UX, un sitio web debe permitir comprender el negocio,
      encontrar la información necesaria y realizar una acción sin
      confusión.
    </p>

    <div>
      <article>
        <h3>Claridad</h3>
        <p>
          La información debe poder comprenderse.
        </p>
      </article>

      <article>
        <h3>Navegación</h3>
        <p>
          La persona debe saber dónde encontrar cada cosa.
        </p>
      </article>

      <article>
        <h3>Utilidad</h3>
        <p>
          Cada elemento debe tener una función.
        </p>
      </article>

      <article>
        <h3>Contacto</h3>
        <p>
          El siguiente paso debe estar claro.
        </p>
      </article>
    </div>
  </Card3D>
</section>


<section className="sobre-liriun-buen-sitio">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>¿Qué hace bueno a un sitio web?</h2>
    <p>
      Un buen sitio web no necesita impresionar al usuario para cumplir
      su propósito.
    </p>
    </header>


    <div>
      <article>
        <h3>Comprensible</h3>
        <p>
          La persona entiende qué es el negocio y qué ofrece.
        </p>
      </article>

      <article>
        <h3>Fácil de navegar</h3>
        <p>
          La información puede encontrarse sin confusión.
        </p>
      </article>

      <article>
        <h3>Útil</h3>
        <p>
          La información responde a las necesidades reales del posible cliente.
        </p>
      </article>

      <article>
        <h3>Accionable</h3>
        <p>
          Después de comprender el negocio, la persona sabe cómo contactar,
          comprar, visitar o consultar.
        </p>
      </article>
    </div>

    <p>
      El diseño debe ayudar a comunicar el negocio y no distraer de él.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-nombre">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>¿Por qué LIRIUN-UX?</h2>
    <p>
      El nombre combina dos ideas que representan nuestra forma de construir:
      Linux y UX.
    </p>
    </header>


    <p>
      Linux representa una base potente y eficiente, mientras que UX,
      experiencia de usuario, representa la forma en que las personas
      interactúan y comprenden un producto.
    </p>

    <p>
      Para LIRIUN-UX, ambas ideas se complementan: la tecnología debe ser
      eficiente, pero también debe ofrecer una experiencia clara y útil
      para quienes la utilizan.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-tecnologia">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>Tecnología al servicio del sitio</h2>
    <p>
      Utilizamos tecnologías web actuales como base estructural para crear
      sitios rápidos, modernos y mantenibles.
    </p>
    </header>


    <div>
      <article>
        <h3>Creación</h3>
        <p className="list">
          Next.js, TSX, HTML, CSS y Tailwind CSS.
        </p>
      </article>

      <article>
        <h3>Gestión</h3>
        <p className="list">
          GitHub.
        </p>
      </article>

      <article>
        <h3>Despliegue</h3>
        <p className="list">
          Vercel.
        </p>
      </article>

      <article>
        <h3>Dominio .BO</h3>
        <p className="list">
          NIC.BO.
        </p>
      </article>
    </div>

    <p>
      La tecnología es la base del producto. El cliente recibe un sitio
      que puede utilizar sin necesidad de conocer estos detalles técnicos.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-futuro">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>Hacia dónde vamos</h2>
    </header>

    <p>
      Queremos construir LIRIUN-UX a través de proyectos reales,
      negocios satisfechos y sitios que cumplan su propósito.
    </p>

    <p>
      Nuestro objetivo es crecer manteniendo lo que define nuestro trabajo:
      sitios claros, útiles, accesibles y enfocados en el negocio.
    </p>
  </Card3D>
</section>


<section className="sobre-liriun-cierre">
  <Card3D className="proceso-conteiner">
    <h2>
      Sitios web pensados para que tu negocio sea entendido.
    </h2>

    <p>
      LIRIUN-UX está enfocado en pequeñas PYMEs que necesitan una presencia
      digital propia, clara y funcional.
    </p>
  </Card3D>
</section>

</main>
</>
  );
}
