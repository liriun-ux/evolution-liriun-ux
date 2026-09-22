import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Conoce el proceso de LIRIUN-UX para crear tu sitio web: conocemos tu negocio, organizamos la información,organizamos la arquitectura del sitio ,diseñamos, desarrollamos, revisamos, publicamos y entregamos tu sitio.",

  alternates: {
    canonical: "/proceso",
  },

  openGraph: {
    title: "Proceso | LIRIUN-UX",
    description:
      "Conoce cómo trabajamos en LIRIUN-UX, desde la primera reunión hasta la publicación, entrega y mantenimiento de tu sitio web.",
    url: "/proceso",
    siteName: "LIRIUN-UX",
    locale: "es_BO",
    type: "website",
    images: [
      {
        url: "/img/og-liriun-ux.png",
        width: 1200,
        height: 630,
        alt: "Proceso de creación de sitios web | LIRIUN-UX",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Proceso | LIRIUN-UX",
    description:
      "Conoce cómo trabajamos en LIRIUN-UX para transformar la información de tu negocio en un sitio web.",
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
      "@type": "WebPage",
      "@id": "https://www.liriun-ux.tecnologia.bo/proceso#webpage",
      url: "https://www.liriun-ux.tecnologia.bo/proceso",
      name: "Proceso | LIRIUN-UX",
      headline: "¿Cómo será trabajar con nosotros?",
      description:
        "Conoce el proceso de LIRIUN-UX para crear, publicar y entregar un sitio web para tu negocio.",
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
        "@id": "https://www.liriun-ux.tecnologia.bo/proceso#howto",
      },
    },

    {
      "@type": "HowTo",
      "@id": "https://www.liriun-ux.tecnologia.bo/proceso#howto",
      name: "Proceso para crear un sitio web con LIRIUN-UX",
      description:
        "Proceso de trabajo de LIRIUN-UX para transformar la información de un negocio en un sitio web claro, funcional y preparado para publicarse.",
      inLanguage: "es-BO",

      provider: {
        "@id": "https://www.liriun-ux.tecnologia.bo/#organization",
      },

      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Conocemos tu negocio",
          text:
            "Conocemos el negocio, sus productos o servicios, clientes, forma de venta, historia, promociones, identidad visual y recopilamos la información necesaria para comenzar el proyecto.",
        },

        {
          "@type": "HowToStep",
          position: 2,
          name: "Arquitectura de información",
          text:
            "Organizamos la información del negocio, productos y servicios, establecemos su importancia y definimos cómo debe comunicarse de forma clara.",
        },

        {
          "@type": "HowToStep",
          position: 3,
          name: "Arquitectura del sitio",
          text:
            "Definimos las páginas, URLs, jerarquía, secciones, navegación, títulos, descripciones y estructura del sitio según las necesidades del negocio.",
        },

        {
          "@type": "HowToStep",
          position: 4,
          name: "Diseñamos",
          text:
            "Definimos la composición visual, colores, tipografías, componentes, botones, navegación, animaciones y estructura visual del sitio.",
        },

        {
          "@type": "HowToStep",
          position: 5,
          name: "Desarrollamos",
          text:
            "Convertimos la información, arquitectura y diseño en un sitio web funcional, adaptado a móvil, tablet y PC, con las configuraciones necesarias para su publicación.",
        },

        {
          "@type": "HowToStep",
          position: 6,
          name: "Revisamos",
          text:
            "Revisamos el contenido, productos, imágenes, contactos, ubicación, navegación y funcionamiento general del sitio antes de publicarlo.",
        },

        {
          "@type": "HowToStep",
          position: 7,
          name: "Publicamos",
          text:
            "Una vez aprobado el sitio, lo publicamos para que esté disponible en internet y realizamos una comprobación final.",
        },

        {
          "@type": "HowToStep",
          position: 8,
          name: "Entregamos",
          text:
            "Entregamos el sitio, los accesos, información del dominio, mantenimiento y documentación necesaria para utilizar y gestionar el proyecto.",
        },
      ],
    },
  ],
};
import ColoredCubeCanvas from "@/animation/ColoredCube";
import ProcesoCanvas from "@/animation/ensamble";
import { Card3D } from "@/animation/card3d";

export default function Proceso() {
  return (
<>
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
<main className="proceso">
      <ProcesoCanvas/>
<header className="proceso-hero proceso-section-trigger" data-stage="0">
  {/* TITULO */}
  <span className="">PROCESO DE TRABAJO</span>

  {/* Contenido en la esquina inferior izquierda (Fila 3, Columna 1 o 1 y 2) */}
  <Card3D className="hero-content" 

  >
    <h1>¿Cómo diseñamos y desarrollamos tu sitio web paso a paso?</h1>
    <p>
      Desde la estrategia inicial de tu negocio hasta la publicación final. 
      Llevamos tu proyecto con un proceso transparente, estructurado y enfocado en resultados.
    </p>
  </Card3D>

</header>


<section className="proceso-inicio proceso-section-trigger" data-stage="1">
  <Card3D className="proceso-conteiner">

    <header>
      <h2>Inicio del proyecto</h2>
    </header>

    <p>
      Después de resolver tus dudas y confirmar que deseas el sitio web especializado,
      coordinamos la primera reunión para conocer tu negocio.<br/><br/>
    </p>

    <p>
      El pago inicial se realiza al comenzar esta reunión y, a partir de ese
      momento, comienza el desarrollo del proyecto.
    </p>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-01 proceso-section-trigger" data-stage="2">
  <Card3D className="proceso-conteiner">

    <header>
      <p >
        PASO 01 <span>| LIRIUN-UX</span>
      </p>

      <h2>Conocemos tu negocio</h2>

      <p>
        Antes de diseñar el sitio, necesitamos comprender qué hace tu negocio,
        qué ofrece y cómo se relaciona con sus clientes.
      </p>
    </header>

    <div>
      <h3>Conocemos</h3>

      <ul className="list">
        <li>El negocio en general.</li>
        <li>Sus productos o servicios.</li>
        <li>Cómo vende y cómo contacta con sus clientes.</li>
        <li>Quiénes son sus clientes.</li>
        <li>La historia del negocio.</li>
        <li>Ofertas y promociones.</li>
        <li>Delivery, cuando corresponda.</li>
        <li>Su identidad visual, si ya existe.</li>
      </ul>
    </div>

    <div>
      <h3>También recopilamos</h3>

      <ul className="list">
        <li>Fotografías y videos del negocio.</li>
        <li>Fotografías y precios de productos.</li>
        <li>Ubicación.</li>
        <li>Redes sociales.</li>
        <li>Horarios.</li>
        <li>Logo, si dispone de uno.</li>
      </ul>
    </div>

    <div>
      <h3>Después de la reunión</h3>

      <p>
        LIRIUN-UX analiza la información proporcionada y realiza una
        investigación adicional del negocio, sus redes sociales y negocios
        similares para comprender mejor su contexto.
      </p>
    </div>

    <footer>
      <dl className="proceso-resultado">
        <dt>RESULTADO: </dt>
        <dd>comprendemos el negocio, su oferta, su funcionamiento y
        la información necesaria para comenzar a construir el sitio.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-02 proceso-section-trigger" data-stage="3">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 02 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Arquitectura de información</h2>

      <p>
        Organizamos toda la información del negocio y determinamos qué debe
        formar parte del sitio, qué no, qué importancia tiene cada elemento
        y cómo debe comunicarse.
      </p>
    </header>

    <div>
      <h3>Organizamos</h3>

      <ul className="list">
        <li>La información general del negocio.</li>
        <li>Productos y servicios.</li>
        <li>Información relevante para sus clientes.</li>
        <li>Información esencial, importante y secundaria.</li>
      </ul>
    </div>

    <div>
      <h3>Definimos la jerarquía</h3>

      <p>
        Determinamos qué necesita saber primero un posible cliente, qué puede
        necesitar después y qué información puede ayudarlo a decidir,
        contactar o visitar el negocio.
      </p>
    </div>

    <div>
      <h3>Transformamos la información</h3>

      <p>
        La información del negocio se organiza y adapta para que pueda ser
        comprendida de forma clara por quienes visitan el sitio.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>queda definida y jerarquizada la información que debe
        comunicarse en el sitio.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-03 proceso-section-trigger" data-stage="4">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 03 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Arquitectura del sitio</h2>

      <p>
        Convertimos la información organizada en una estructura de sitio web.
      </p>
    </header>

    <div>
      <h3>Definimos</h3>

      <ul className="list">
        <li>Qué páginas necesita el sitio.</li>
        <li>Las rutas y URLs.</li>
        <li>La jerarquía de las páginas.</li>
        <li>Qué información pertenece a cada página.</li>
        <li>Qué información no necesita una página propia.</li>
        <li>El orden de las secciones.</li>
        <li>La navegación entre páginas.</li>
        <li>Los títulos, descripciones y botones.</li>
        <li>La estructura necesaria para información y productos cambiables.</li>
      </ul>
    </div>

    <div>
      <h3>Adaptamos la estructura al negocio</h3>

      <p>
        No todos los negocios necesitan las mismas páginas. La estructura
        depende del contenido y de lo que necesitan sus posibles clientes.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>queda definido el mapa del sitio y cómo se organizará la
        información para que pueda entenderse y recorrerse con facilidad.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-04 proceso-section-trigger" data-stage="5">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 04 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Diseñamos</h2>

      <p>
        Con la información y estructura definidas, diseñamos la forma visual
        en la que se comunicará el negocio.
      </p>
    </header>

    <div>
      <h3>Definimos</h3>

      <ul className="list">
        <li>Paleta de colores.</li>
        <li>Tipografías.</li>
        <li>Composición.</li>
        <li>Componentes.</li>
        <li>Botones.</li>
        <li>Tarjetas.</li>
        <li>Formularios.</li>
        <li>Navegación.</li>
        <li>Animaciones.</li>
        <li>Estructura visual.</li>
      </ul>
    </div>

    <div>
      <h3>Diseño enfocado en el negocio</h3>

      <p>
        El diseño se adapta al rubro y a las características del negocio,
        manteniendo el principio de que la información debe ser clara y
        fácil de comprender.
      </p>
    </div>

    <div>
      <h3>Animaciones</h3>

      <p>
        Las animaciones tienen una función estructural y de interacción.
        Deben ayudar al usuario y no distraerlo del contenido o de la acción
        que quiere realizar.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>tenemos definido cómo se verá el sitio y cómo se presentará
        visualmente la información.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-05 proceso-section-trigger" data-stage="6">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 05 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Desarrollamos</h2>

      <p>
        Convertimos la información, la estructura y el diseño en un sitio
        web funcional.
      </p>
    </header>

    <div>
      <h3>Construimos</h3>

      <ul className="list">
        <li>Las páginas y componentes del sitio.</li>
        <li>La estructura definida.</li>
        <li>Los productos y la información.</li>
        <li>Las funcionalidades necesarias.</li>
        <li>La adaptación para móvil, tablet y PC.</li>
        <li>Los elementos de contacto y navegación.</li>
      </ul>
    </div>

    <div>
      <h3>Preparamos el sitio</h3>

      <p>
        Durante esta etapa también se realizan las configuraciones necesarias
        para el despliegue, dominio e indexación del sitio.
      </p>
    </div>

    <div>
      <h3>El cliente no necesita supervisar cada avance</h3>

      <p>
        El sitio se desarrolla internamente para que el cliente pueda
        revisarlo cuando exista una versión terminada.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>existe una versión funcional del sitio preparada para
        revisión.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-06 proceso-section-trigger" data-stage="7">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 06 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Revisión general y ajustes</h2>

      <p>
        Antes de mostrar el sitio al cliente, LIRIUN-UX realiza una revisión
        general del proyecto.
      </p>
    </header>

    <div>
      <h3>El cliente recibe el sitio terminado</h3>

      <p>
        Se muestra el sitio completo para que pueda probarlo y comprobar
        que la información y el funcionamiento sean correctos.
      </p>
    </div>

    <div>
      <h3>Revisamos</h3>

      <ul className="list">
        <li>Contenido.</li>
        <li>Productos y precios.</li>
        <li>Imágenes.</li>
        <li>Contactos.</li>
        <li>Ubicación.</li>
        <li>Navegación.</li>
        <li>Funcionamiento general.</li>
      </ul>
    </div>

    <div>
      <h3>Realizamos los ajustes necesarios</h3>

      <p>
        La revisión incluye una ronda de cambios. Durante esta etapa pueden
        incorporarse datos o información que hayan sido omitidos.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO</dt>
        <dd>el cliente y LIRIUN-UX confirman que el sitio está listo
        para publicarse.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-07 proceso-section-trigger" data-stage="8">
  <Card3D className="proceso-conteiner">


    <header>
      <p className="game-no">
        PASO 07 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Publicamos</h2>

      <p>
        Una vez aprobado el sitio, pasa de la versión de desarrollo a estar
        disponible públicamente.
      </p>
    </header>

    <div>
      <h3>Antes:</h3>

      <p>
        El sitio puede mostrar un aviso indicando que todavía se encuentra
        en desarrollo.
      </p>
    </div>

    <div>
      <h3>Después:</h3>

      <p>
        Se retira el aviso de desarrollo y el sitio queda disponible para
        cualquier persona que acceda a él.
      </p>
    </div>

    <div>
      <h3>Comprobación final:</h3>

      <p>
        LIRIUN-UX realiza una última comprobación y se envía el sitio al
        cliente para su visto bueno.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>el sitio web está oficialmente disponible en internet.</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-etapa proceso-etapa-08 proceso-section-trigger" data-stage="9">
  <Card3D className="proceso-conteiner">

    <header>
      <p className="game-no">
        PASO 08 <span className="game-genre">| LIRIUN-UX</span>
      </p>

      <h2>Entregamos</h2>

      <p>
        El proyecto termina con la entrega del sitio, sus accesos y la
        información necesaria para utilizarlo y gestionarlo.
      </p>
    </header>

    <div>
      <h3>Entregamos</h3>

      <ul className="list">
        <li>Acceso a GitHub.</li>
        <li>Acceso a Vercel.</li>
        <li>Acceso al DNS.</li>
        <li>La cuenta principal creada para el negocio.</li>
        <li>Información del dominio.</li>
        <li>Información de mantenimiento.</li>
        <li>Información sobre futuros cambios.</li>
      </ul>
    </div>

    <div>
      <h3>Explicamos el funcionamiento</h3>

      <p>
        Durante la revisión se explica el funcionamiento del sitio y de la
        interfaz para gestionar los productos y su información.
      </p>
    </div>

    <div>
      <h3>Documentación</h3>

      <p>
        Se entrega un documento para el cliente con información sobre el uso
        de la interfaz, el dominio y los aspectos necesarios para gestionar
        el sitio.
      </p>

      <p>
        También se dispone de información técnica para que un programador
        externo pueda realizar modificaciones cuando sea necesario.
      </p>
    </div>

    <footer>
      <dl className="game-tech">
        <dt>RESULTADO: </dt>
        <dd>el cliente recibe su sitio, sus accesos y la información
        necesaria para utilizarlo y gestionarlo.
</dd>
      </dl>
    </footer>

  </Card3D>
</section>


<section className="proceso-mantenimiento proceso-section-trigger" data-stage="10">
  <Card3D className="proceso-conteiner">

    <header>
      <h2>Después de la entrega</h2>
    </header>

      <p className="entrega">
      Al finalizar la entrega comienza el período de mantenimiento incluido
      durante tres meses.
    </p>

    <div>
      <h3>Durante los 3 meses</h3>

      <p>
        LIRIUN-UX supervisa el sitio y el cliente puede solicitar pequeños
        cambios.
      </p>

      <ul className="list">
        <li>Cambios de textos.</li>
        <li>Cambios de títulos.</li>
        <li>Ajustes de botones.</li>
        <li>Eliminación de productos.</li>
        <li>Pequeños ajustes en general.</li>
      </ul>
    </div>

    <div>
      <h3>Después del mantenimiento</h3>

      <p>
        El sitio está pensado para continuar funcionando sin necesidad de
        mantenimiento técnico constante mientras el negocio y las
        necesidades del sitio se mantengan similares.
      </p>
    </div>

    <div>
      <h3>Cambios posteriores</h3>

      <p>
        Los cambios estructurales, nuevas páginas, nuevas secciones o cambios
        grandes de diseño pueden realizarse mediante un presupuesto adicional
        según su complejidad.
      </p>
    </div>

  </Card3D>
</section>


<section className="proceso-cierre proceso-section-trigger" data-stage="11">
  <Card3D className="proceso-conteiner">

    <header>
      <h2>
        Tu negocio nos da la información. Nosotros nos encargamos de construir
        el sitio.
      </h2>
    </header>

    <p>
      El objetivo de todo el proceso es entregar un sitio web claro, funcional
      y enfocado en que el negocio pueda ser encontrado y entendido por sus
      posibles clientes.
    </p>

  </Card3D>
</section>


<section className="proceso-cta proceso-section-trigger" data-stage="12">
  <Card3D className="proceso-conteiner">

    <header>
      <h2>¿Quieres comenzar?</h2>
    </header>

    <p>
      Cuéntanos qué hace tu negocio y te explicaremos cómo podemos construir
      su sitio web.
    </p>
    <div className="card-button">

    <a href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio aparezca en Google?">
      Hablar por WhatsApp
    </a>
    </div>

  </Card3D>
</section>

</main>
</>
);
}
