import type { Metadata } from "next";

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

  <header className="inicio-hero">
    <p>LIRIUN-UX</p>

    <h1>
 No pierdas clientes por no estar donde te buscan.
      ¿Pueden encontrarlo y entenderlo?
    </h1>

    <p>
LIRIUN-UX crea sitios web para pequeños negocios en La Paz, El Alto y toda Bolivia. Sitios web con SEO, AEO y estructura clara para presentar tu negocio, productos o servicios.
    </p>

    <a href="#problema">
      Ver cómo funciona
    </a>

    <a href="/sitio-web">
      Conocer el sitio web
    </a>
  </header>


  <section id="problema" className="inicio-problema">
    <header>
      <h2>
        Tu negocio puede estar en redes y aun así tener información difícil de encontrar.
      </h2>
    </header>

    <p>
      Las redes sociales permiten mostrar productos, servicios y comunicarte
      con tus clientes. Pero la información puede quedar distribuida entre
      publicaciones, perfiles y diferentes plataformas.
    </p>

    <div>
      <h3>Tu negocio puede tener</h3>

      <ul>
        <li>Instagram.</li>
        <li>Facebook.</li>
        <li>WhatsApp.</li>
        <li>Ubicación.</li>
      </ul>
    </div>

    <p>
      Pero ¿dónde encuentra una persona toda la información que necesita
      cuando busca tu negocio, un producto o un servicio?
    </p>
  </section>


  <section className="inicio-demostracion">
    <header>
      <h2>
        ¿Qué ocurre cuando alguien busca tu negocio?
      </h2>

      <p>
        Imagina que una persona necesita exactamente lo que tu negocio ofrece.
      </p>
    </header>

    <div>
      <h3>La búsqueda</h3>

      <p>
        Busca un producto, un servicio, un negocio o un local en internet.
      </p>
    </div>

    <div>
      <h3>La información</h3>

      <p>
        Necesita saber qué ofrece el negocio, cuánto cuesta, dónde está,
        cómo funciona y cómo puede contactarlo.
      </p>
    </div>

    <div>
      <h3>La decisión</h3>

      <p>
        Con la información necesaria puede decidir si contacta, compra,
        visita o continúa buscando.
      </p>
    </div>

    <div>
      <h3>Cuando la información está dispersa</h3>

      <p>
        Puede tener que revisar publicaciones, perfiles, historias o
        diferentes plataformas para encontrar lo que necesita.
      </p>
    </div>

    <div>
      <h3>Cuando la información está organizada</h3>

      <p>
        Puede encontrar en un solo lugar la información principal del negocio,
        sus productos o servicios, su ubicación y sus medios de contacto.
      </p>
    </div>
  </section>


  <section className="inicio-oportunidad">
    <header>
      <h2>
        Tu negocio puede tener un espacio propio para ser entendido.
      </h2>
    </header>

    <p>
      Un sitio web puede reunir la información principal de tu negocio y
      presentarla de forma clara para las personas que buscan lo que ofreces.
    </p>

    <div>
      <article>
        <h3>Ser encontrado</h3>

        <p>
          Tu negocio cuenta con un espacio propio disponible en internet.
        </p>
      </article>

      <article>
        <h3>Ser entendido</h3>

        <p>
          La información se organiza para que las personas puedan comprender
          qué hace tu negocio y qué ofrece.
        </p>
      </article>

      <article>
        <h3>Facilitar el contacto</h3>

        <p>
          El sitio puede mostrar WhatsApp, formularios, redes sociales y otros
          medios de contacto.
        </p>
      </article>

      <article>
        <h3>Facilitar la visita</h3>

        <p>
          La ubicación del negocio puede estar disponible de forma clara para
          quien quiera visitarlo.
        </p>
      </article>
    </div>

    <p>
      Además, la información puede estructurarse siguiendo buenas prácticas
      para facilitar su descubrimiento y comprensión por buscadores y sistemas
      de IA.
    </p>
  </section>


  <section className="inicio-solucion">
    <header>
      <h2>
        Un sitio web pensado para tu negocio.
      </h2>
    </header>

    <p>
      No creamos un sitio solamente para que tu negocio tenga una página.
      Lo construimos para que la información pueda ser encontrada, comprendida
      y utilizada por quien la necesita.
    </p>

    <div>
      <article>
        <h3>Tu negocio</h3>
        <p>
          Presentamos qué hace, qué ofrece y qué lo caracteriza.
        </p>
      </article>

      <article>
        <h3>Tus productos o servicios</h3>
        <p>
          Organizamos la información para que puedan conocerse con claridad.
        </p>
      </article>

      <article>
        <h3>Tu ubicación y contacto</h3>
        <p>
          Facilitamos el siguiente paso para quien quiera comprar, consultar
          o visitar.
        </p>
      </article>
    </div>

    <a href="/sitio-web">
      Conocer el sitio web estándar
    </a>
  </section>


  <section className="inicio-como-funciona">
    <header>
      <h2>
        Tú nos cuentas sobre tu negocio. Nosotros construimos el sitio.
      </h2>

      <p>
        LIRIUN-UX se encarga del proceso desde la comprensión del negocio
        hasta la publicación y entrega del sitio.
      </p>
    </header>

    <ol>
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
        <h3>Estructuramos el sitio</h3>
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
          Convertimos la estructura y el diseño en un sitio web funcional.
        </p>
      </li>

      <li>
        <h3>Revisamos</h3>
        <p>
          Recibes el sitio terminado para probarlo y solicitar los ajustes
          correspondientes.
        </p>
      </li>

      <li>
        <h3>Publicamos</h3>
        <p>
          Una vez aprobado, el sitio queda disponible públicamente.
        </p>
      </li>

      <li>
        <h3>Entregamos</h3>
        <p>
          Recibes el sitio, sus accesos y la información necesaria para
          utilizarlo y gestionarlo.
        </p>
      </li>
    </ol>

    <a href="/proceso">
      Ver el proceso completo
    </a>
  </section>

  <section className="inicio-liriun">
  <header>
    <h2>
      ¿Qué es LIRIUN-UX?
    </h2>
  </header>

  <p>
    LIRIUN-UX crea sitios web para negocios que necesitan una presencia
    digital clara, accesible y pensada para ser encontrada.
  </p>

  <div>
    <article>
      <h3>Tu presencia digital</h3>
      <p>
        Creamos un espacio propio para presentar tu negocio en internet.
      </p>
    </article>

    <article>
      <h3>Información clara</h3>
      <p>
        Organizamos el contenido para que las personas puedan encontrar
        y comprender lo que ofreces.
      </p>
    </article>

    <article>
      <h3>Hecho para tu negocio</h3>
      <p>
        Adaptamos la estructura y el contenido del sitio a las necesidades
        de cada negocio.
      </p>
    </article>
<article>
  <h3>Creación de sitios web para El Alto y La Paz</h3>

  <p>
    LIRIUN-UX es un servicio de creación de sitios web con base en La Paz,
    Bolivia. Brindamos atención especializada a negocios de La Paz y El Alto,
    conociendo de cerca sus necesidades y la forma en que presentan sus
    productos o servicios. También trabajamos con negocios de todo Bolivia.
  </p>
</article>
  </div>

  <a href="/sobre-liriun-ux">
    Conocer LIRIUN-UX
  </a>
</section>


  <section className="inicio-ejemplos">
    <header>
      <h2>
        Cada negocio necesita una forma diferente de presentarse.
      </h2>

      <p>
        La estructura del sitio se adapta al negocio, sus productos o
        servicios y a lo que sus posibles clientes necesitan saber.
      </p>
    </header>

    <article>
      <h3>Ejemplo: Pizzería</h3>

      <ul>
        <li>Inicio.</li>
        <li>Menú.</li>
        <li>Promociones.</li>
        <li>Nosotros.</li>
        <li>Ubicación.</li>
        <li>WhatsApp.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>

    <article>
      <h3>Ejemplo: Academia</h3>

      <ul>
        <li>Inicio.</li>
        <li>Cursos.</li>
        <li>Metodología.</li>
        <li>Nosotros.</li>
        <li>Preguntas frecuentes.</li>
        <li>Contacto.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>

    <article>
      <h3>Ejemplo: Tienda</h3>

      <ul>
        <li>Inicio.</li>
        <li>Productos.</li>
        <li>Categorías.</li>
        <li>Promociones.</li>
        <li>Nosotros.</li>
        <li>Contacto.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>
  </section>


  <section className="inicio-alternativas">
    <header>
      <h2>
        También existen otras formas de presentar tu negocio.
      </h2>

      <p>
        Cada opción tiene sus propias características. LIRIUN-UX está
        pensado para negocios pequeños que quieren delegar la creación
        de su sitio web.
      </p>
    </header>

    <article>
      <h3>Solo redes sociales</h3>

      <p>
        Permiten comunicarte y mostrar tu negocio dentro de las plataformas,
        pero la información puede quedar distribuida entre perfiles y
        publicaciones.
      </p>
    </article>

    <article>
      <h3>Hacerlo por cuenta propia</h3>

      <p>
        Permite mayor autonomía, pero requiere tiempo para aprender,
        configurar y mantener el sitio.
      </p>
    </article>

    <article>
      <h3>Un creador de sitios</h3>

      <p>
        Proporciona herramientas para construir un sitio por cuenta propia,
        pero requiere que el usuario realice parte de la configuración y
        mantenimiento.
      </p>
    </article>

    <article>
      <h3>Un sitio desarrollado para el negocio</h3>

      <p>
        LIRIUN-UX se encarga de construir el sitio tomando en cuenta el
        negocio y las necesidades de sus posibles clientes.
      </p>
    </article>
  </section>


  <section className="inicio-faq">
    <header>
      <h2>
        Preguntas frecuentes
      </h2>
    </header>

    <details>
      <summary>
        ¿Necesito dejar de usar Instagram o Facebook?
      </summary>

      <p>
        No. El sitio web complementa las redes sociales y proporciona un
        espacio propio para organizar la información del negocio.
      </p>
    </details>

    <details>
      <summary>
        ¿Necesito saber programación?
      </summary>

      <p>
        No. LIRIUN-UX se encarga de la creación y desarrollo del sitio.
      </p>
    </details>

    <details>
      <summary>
        ¿Puedo cambiar mis productos y precios?
      </summary>

      <p>
        Sí. El sitio incluye una interfaz para gestionar la información
        de productos y categorías.
      </p>
    </details>

    <details>
      <summary>
        ¿El sitio funciona en celular?
      </summary>

      <p>
        Sí. El sitio se adapta para móvil, tablet y computadora.
      </p>
    </details>

    <details>
      <summary>
        ¿Cuánto tarda?
      </summary>

      <p>
        El plazo estándar es de 5 días desde el pago inicial.
      </p>
    </details>

    <details>
      <summary>
        ¿Cuánto cuesta?
      </summary>

      <p>
        El precio normal del sitio web estándar es de 850 Bs.
        Actualmente existe una oferta de 450 Bs hasta el 10 de octubre.
      </p>
    </details>

    <details>
      <summary>
        ¿El sitio garantiza aparecer en Google o en sistemas de IA?
      </summary>

      <p>
        No se garantiza una posición concreta ni una aparición determinada.
        El sitio se estructura siguiendo buenas prácticas para facilitar su
        descubrimiento y comprensión.
      </p>
    </details>

    <a href="/sitio-web">
      Ver toda la información del sitio web
    </a>
  </section>


  <section className="inicio-cta">
    <header>
      <h2>
        ¿Tu negocio necesita un sitio web?
      </h2>
    </header>

    <p>
      Cuéntanos qué hace tu negocio y qué quieres mostrar.
      Te explicaremos cómo podría estructurarse su sitio web.
    </p>

    <a href="#">
      Hablar por WhatsApp
    </a>

    <a href="/sitio-web">
      Conocer el sitio web estándar
    </a>
  </section>

</main>
</>
  );
}
