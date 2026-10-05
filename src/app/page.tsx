import { Card3D } from "@/animation/card3d";
import ProcesoCanvas from "@/animation/ensamble";
import { CenteredLink } from "@/components/CentradeLink";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitios web para negocios | LIRIUN-UX",

  description:
    "LIRIUN-UX crea sitios web para pequeños negocios en La Paz, El Alto y toda Bolivia. Sitios web con SEO, AEO y estructura clara para presentar tu negocio, productos o servicios.",

  alternates: {
    canonical: "https://www.liriun-ux.tecnologia.bo/",
  },

  openGraph: {
    type: "website",

    url: "https://www.liriun-ux.tecnologia.bo/",

    title: "Sitios web para negocios | LIRIUN-UX",

    description:
      "Descubre cómo un sitio web puede ayudar a tu negocio a tener presencia digital, ser encontrado y facilitar que tus clientes conozcan tus productos o servicios.",

    images: [
      {
        url: "/img/og-liriun-ux.png",
        width: 1200,
        height: 630,
        alt: "LIRIUN-UX — Sitios web para negocios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Sitios web para negocios | LIRIUN-UX",

    description:
      "Sitios web para negocios de La Paz, El Alto y Bolivia, con SEO, AEO y estructura clara.",

    images: ["/img/og-liriun-ux.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",

  "@type": "WebPage",

  "@id":
    "https://www.liriun-ux.tecnologia.bo/#webpage",

  url: "https://www.liriun-ux.tecnologia.bo/",


  name: "Sitios web para negocios | LIRIUN-UX",

  description:
    "LIRIUN-UX crea sitios web para pequeños negocios en La Paz, El Alto y toda Bolivia, con SEO, AEO y una estructura clara para presentar negocios, productos y servicios.",

  isPartOf: {
    "@id":
      "https://www.liriun-ux.tecnologia.bo/#website",
  },

  about: {
    "@id":
      "https://www.liriun-ux.tecnologia.bo/#organization",
  },

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
        "Diseño web La Paz",
        "Desarrollo web La Paz",
        "Sitios web El Alto",
        "Sitios web La Paz",
        "Creacion de sitios web La Paz",
        "SEO",
        "AEO",
        "Experiencia de usuario",
        "Accesibilidad web",
      ],
  
  keywords: [
    "sitios web para negocios",
    "diseño web Bolivia",
    "páginas web para negocios",
    "diseño web La Paz",
    "diseño web El Alto",
    "sitios web Bolivia",
    "SEO para negocios",
    "AEO para negocios",
  ],

  inLanguage: "es-BO",

};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <main className="inicio">
        <ProcesoCanvas/>
        <header className="inicio-hero">
          <span>PIERDES CLIENTES?</span>

    <Card3D className="hero-content">
          <h1>
            Cada día muchos buscan lo que vendes. <br/>
          </h1>

          <p>
            Pon tu negocio a la vista de todos. Liriun-UX crea una herramienta que te permite conectar con tus clientes.
                </p>

    <div className="card-button">
          <a href="#problema">
            Ver cómo funciona
          </a>
    </div>
        </Card3D>
        </header>


<section  className="inicio-problema" id="problema">
  <Card3D className="proceso-conteiner">
<header>
    <h2>
      El proceso por el que pierdes clientes hoy.
    </h2>
    <p>
      Cuando un cliente necesita un producto o servicio, lo primero que hace es
      buscarlo en internet.<br/> <br/> Si tu negocio no aparece, esa oportunidad
      se pierde en cuestión de segundos.
    </p>
  </header>

  <div>
    <h3>Proceso</h3>

    <ul className="list">
      <li>Un cliente busca tu producto o servicio en internet.</li>
      <li>Tu negocio no aparece entre los resultados de búsqueda.</li>
      <li>El cliente encuentra a tu competencia y le compra a ellos.</li>
      <li>Pierdes una venta.</li>
      <li>Pierdes un cliente.</li>
    </ul>
  </div>

  </Card3D>
</section>


<section className="inicio-demostracion" >
  <Card3D className="proceso-conteiner" >
<header>
    <h2>
          Usar redes no siempre es suficiente. 
    </h2>
    <p>
      Cuando un cliente realmente quiere
      comprar, no quiere navegar por decenas de publicaciones para saber tus
      precios, horarios o catálogo.
    </p>
  </header>

  <div>
    <h3>Lo que quiere:</h3>

    <ul className="list">
      <li>Ver tu catálogo de productos.</li>
      <li>Conocer tus precios, horarios y ubicación en segundos.</li>
      <li>Tener una respuesta inmediata sin esperar un mensaje.</li>
      <li>Sentir la confianza de tener toda la información que nesesita al alcance.</li>
    </ul>
  </div>

  <p>
    Cuando no facilitas esta información, el cliente no espera: busca a otro que
    se la dé al instante.
  </p>
  </Card3D>
</section>


<section className="inicio-oportunidad" >
  <Card3D className="proceso-conteiner">
<header>
    <h2>
      Tu espacio digital abierto las 24 horas.
    </h2>
    <p>
       Sirve para que cualquier
      persona que busque lo que vendes pueda encontrarlo, entenderlo y comprarte
      de forma rápida y sencilla.
    </p>
  </header>

    <article>
      <h3>Visibilidad permanente</h3>
      <p>
        Tu negocio deja de ser invisible. Tendrás un lugar propio disponible
        siempre para que miles de personas te encuentren al buscar en internet.
      </p>
    </article>

    <article>
      <h3>Productos a la vista</h3>
      <p>
        Organiza tus productos, servicios, precios y catálogo de forma sencilla
        para que tus clientes entiendan en segundos qué vendes y por qué elegirte.
      </p>
    </article>

    <article>
      <h3>Presencia en Google y Agentes de IA</h3>
      <p>
        Permite que tu información esté optimizada para que motores de búsqueda
        como Google y nuevos asistentes de Inteligencia Artificial recomienden
        tu negocio.
      </p>
    </article>

    <article>
      <h3>Ventas y contactos directos</h3>
      <p>
        Centraliza botones a WhatsApp, llamadas, ubicación en mapa y redes
        sociales para convertir a los visitantes interesados en clientes reales.
      </p>
    </article>

  <p>
    Tener un espacio digital convierte las búsquedas de internet en <strong>oportunidades
    reales de ventas.</strong>
  </p>
  </Card3D>
</section>


<section className="inicio-solucion">
  <Card3D className="proceso-conteiner">
<header>
    <h2>
      Liriun-UX hace que tu negocio sea fácil de encontrar y entender en internet
    </h2>
    <p>
      Solucionamos la falta de clientes haciéndote visible donde todos buscan hoy.<br/>
      Nos encargamos de crear el sitio web de tu negocio para que no vuelvas a
      perder una venta por no estar en internet.<br/>
    </p>
  </header>


    <article>
      <h3>Hacemos que te encuentren</h3>
      <p>
        Ponemos tu negocio en <strong>Google.</strong>
      </p>
        <div className="article-image">
          <Image
    src="/img/example346.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
    </article>

    <article>
      <h3>Presentamos tus productos de forma clara</h3>
      <p>
        Mostramos tus fotos, catálogo, precios y horarios de manera ordenada
        para que tus clientes entiendan de inmediato qué vendes y cuánto cuesta.
      </p>
    </article>

    <article>
      <h3>Facilitamos tus ventas por WhatsApp y Mapa</h3>
      <p>
        Tus clientes podrán escribirte directamente al WhatsApp con un solo clic
        o ver la ubicación exacta de tu local para ir a visitarte.
      </p>
    </article>
<article>
  <h3>Tus enlaces se verán profesionales al compartirlos</h3>
  <p>
    Así, tus clientes podrán reconocer fácilmente tu negocio, página,
    producto o servicio antes de entrar.
  </p>


        <div className="article-image-two">
          <Image
    src="/img/mss1b.png"
    alt="enlace en WhatsApp"
    width={600}
    height={400}
  />
          <Image
    src="/img/mss2b.png"
    alt="enlace en facebook"
    width={600}
    height={400}
  />
  </div>
</article>
    <article>
<h3>Actualiza tus productos y precios fácil por WhatsApp</h3>
<p>
  Solo envíanos tus productos y precios por WhatsApp y nosotros nos encargamos del resto.
</p>
    </article>
    <article>
      <h3>Nosotros nos encargamos de todo el trabajo</h3>
      <p>
        Tú solo nos cuentas tu negocio y productos en una reunion, envías tus fotos y datos por WhatsApp.<br/><br/> 
        Nosotros redactamos, diseñamos y dejamos tu sitio web funcionando en una semana.
      </p>
    </article>
    <div>
      <h3>Precio normal</h3>

      <p className="precio-normal" >
        850 Bs.
      </p>
    </div>

    <div>
      <h3>Oferta</h3>

      <p className="precio-oferta" >
        450 Bs.
      </p>

      <p>
        ¡Oferta especial por inauguración! válida hasta el <span style={{ color: "var(--color-card-step)"}}>17 de octubre.</span>
      </p>
    </div>

  <p>
    Sin complicaciones pronto tendras una herramienta que te permite conectar con tus clientes<br/>
    <br/>
  </p>
    <div className="card-button">
    <a href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio aparezca en Google?">
      Consultar por WhatsApp
    </a>
    </div>
  </Card3D>
</section>

<section className="inicio-ejemplos">
  <Card3D className="proceso-conteiner">
<header>
    <h2>
      Cada negocio necesita una forma diferente de presentarse.

    </h2>
    <p>
      No usamos plantillas genéricas. 
          <br/>
          <br/>
      <span className="bg-white text-black p-1 rounded-[4px] shadow shadow-teal-800 whitespace-nowrap">Cada negocio tiene su propio diseño.</span>
    </p>
  </header>


    <article>
        <div className="article-image">
          <Image
    src="/img/parrilla.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://parr-nine.vercel.app/">Ver diseño</a>
      </div>
    </article>
    <article>
        <div className="article-image">
          <Image
    src="/img/pizza.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://pazz-ten.vercel.app/">Ver diseño</a>
      </div>
    </article>
    <article>
        <div className="article-image">
          <Image
    src="/img/gim.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://gim-rho.vercel.app/">Ver diseño</a>
      </div>
    </article>
    <article>
        <div className="article-image">
          <Image
    src="/img/satre.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://tex-roan.vercel.app/">Ver diseño</a>
      </div>
    </article>
    <article>
        <div className="article-image">
          <Image
    src="/img/academi.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://academia-omega-nine.vercel.app/">Ver diseño</a>
      </div>
    </article>

    <article>
        <div className="article-image">
          <Image
    src="/img/arq.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://example-arq.vercel.app/">Ver diseño</a>
      </div>
    </article>

    <article>
        <div className="article-image">
          <Image
    src="/img/consul.png"
    alt="Personas encontrando tu negocio en Google"
    width={600}
    height={400}
  />
  </div>
      <div className="card-button-e">
        <a href="https://consul-sand.vercel.app/">Ver diseño</a>
      </div>
    </article>

    <div className="card-button">
    <Link href="/web-especializada">
      Conocer los detalles del espacio digital.
    </Link>
    </div>
  </Card3D>
</section>

<section className="inicio-como-funciona">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>
            Proceso de construcción
      </h2>

      <p>
        LIRIUN-UX se encarga del proceso desde la comprensión del negocio
        hasta la publicación y entrega de tu sitio web.
      </p>
    </header>

    <ol className="gap-1 flex flex-col">
      <li>
        <h3>Conocemos tu negocio</h3>
        <p>
          Comprendemos qué haces, qué ofreces y cómo funciona tu negocio.
        </p>
      </li>

      <li>
        <h3>Organizamos la información</h3>
        <p>
          Definimos qué debe comunicarse y qué necesita conocer tu posible
          cliente.
        </p>
      </li>

      <li>
        <h3>Estructuramos la web especializada</h3>
        <p>
          Definimos las páginas, la navegación y dónde debe estar cada
          información.
        </p>
      </li>

      <li>
        <h3>Diseñamos</h3>
        <p>
          Creamos una presentación visual adaptada al negocio sin distraer
          de su contenido.
        </p>
      </li>

      <li>
        <h3>Desarrollamos</h3>
        <p>
          Convertimos la estructura y el diseño en una web especializada funcional.
        </p>
      </li>

      <li>
        <h3>Revisamos</h3>
        <p>
          Recibes la web especializada terminada para probarla y solicitar los ajustes
          correspondientes.
        </p>
      </li>

      <li>
        <h3>Publicamos</h3>
        <p>
          Una vez aprobada, la web especializada queda disponible públicamente.
        </p>
      </li>

      <li>
        <h3>Entregamos</h3>
        <p>
          Recibes la web especializada, sus accesos y la información necesaria para
          utilizarla y gestionarla.
        </p>
      </li>
    </ol>

    <div className="card-button">
    <a href="/proceso">
      Ver el proceso completo
    </a>
    </div>
  </Card3D>
</section>




<section className="inicio-faq">
  <Card3D className="proceso-conteiner">
<header>
    <h2>Preguntas frecuentes</h2>
    <p>
      Resolvemos tus dudas principales para que des el paso con total seguridad.
    </p>
  </header>

  <details>
    <summary>¿Necesito dejar de usar Facebook, TikTok o Instagram?</summary>
    <p>
      No, para nada. Tu sitio web complementa tus redes sociales: en redes
      publicas contenido diario y en tu web centralizas la información, precios y
      catálogo completo para cerrar las ventas sin que los clientes se pierdan.
    </p>
  </details>

  <details>
    <summary>¿Necesito saber de diseño o tecnología para tener mi sitio?</summary>
    <p>
      No necesitas saber nada de código ni diseño. En LIRIUN-UX nos encargamos de
      todo el proceso: redactamos, diseñamos y dejamos tu sitio 100% funcionando.
    </p>
  </details>

  <details>
<summary>¿Podré cambiar o agregar nuevos productos y precios?</summary>
<p>
  Sí. Solo necesitas enviarnos la información de tus productos por WhatsApp y nosotros 
  nos encargamos de actualizarlos o agregarlos de forma rápida, sencilla y sin ningún costo adicional.
</p>
  </details>

  <details>
    <summary>¿El sitio web se ve bien desde celulares?</summary>
    <p>
      Sí, totalmente. Diseñamos el sitio pensando primero en teléfonos móviles,
      asegurando que cargue rápido y se adapte perfectamente a celulares, tablets
      y computadoras.
    </p>
  </details>

  <details>
    <summary>¿En cuánto tiempo entregan el sitio web listo?</summary>
    <p>
      El tiempo de entrega es de solo 1 semana a partir del pago inicial de
      200 Bs y la entrega de tus fotos o datos básicos.
    </p>
  </details>

  <details>
    <summary>¿Cuánto cuesta el servicio y qué modalidades de pago hay?</summary>
    <p>
      El precio normal es de 850 Bs, pero contamos con una ¡Oferta especial por inauguración! de
      <strong> 450 Bs</strong> (válida hasta el 17 de octubre). Inicias el proyecto
      con un adelanto de 200 Bs y cancelas el saldo al ver tu sitio terminado.
    </p>
  </details>

  <details>
    <summary>¿Garantizan que saldré en el primer lugar de Google o IA?</summary>
    <p>
      Ninguna agencia seria puede garantizar el primer lugar en Google.<br/><br/>
      Lo que sí garantizamos es aplicar todo el procedimiento y presentar tu información de
    forma impecable a Google.<br/><br/>

    Google decidira en que puesto vas.
    </p>
  </details>
    
    <div className="card-button">
    <a href="https://wa.me/59176760684?text=Hola, ¿Quisiera saber mas del sitio web?">
      ¿Tienes mas dudas? contactanos por WhatsApp
    </a>
    </div>
  </Card3D>
</section>



      </main>
    </>
  );
}
