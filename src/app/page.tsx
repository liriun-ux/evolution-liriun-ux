import { Card3D } from "@/animation/card3d";
import ProcesoCanvas from "@/animation/ensamble";
import { CenteredLink } from "@/components/CentradeLink";
import type { Metadata } from "next";
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
            Cada día miles de personas buscan lo que vendes. <br/>
               <strong> ¿Tus productos ya están en internet?</strong>
          </h1>

          <p>
            Pon tu negocio a la vista de todos. Liriun-UX posiciona tus productos en Google y agentes de IA para que te encuentren rápido.
                </p>

    <div className="card-button">
          <a href="#problema">
            Ver cómo funciona
          </a>
    </div>
    <div className="card-button">
          <a href="/web-especializada">
            Conocer la web especializada
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
      buscarlo en internet.<br/> Si tu negocio no aparece de forma clara, esa oportunidad
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

  <p>
    ¿Cuántos clientes crees que tiene tu competencia  solo porque
    están en internet?<br/><br/>
    ¿Cuántos clientes crees que estás perdiendo hoy, solo
    porque no estás en internet?
  </p>
  </Card3D>
</section>


<section className="inicio-demostracion" >
  <Card3D className="proceso-conteiner" >
<header>
    <h2>
      Publicar en redes o responder WhatsApp no siempre es suficiente.
    </h2>
    <p>
      Tal vez ya subes fotos o contestes mensajes, pero las redes cambian
      rápido y la información se pierde. Cuando un cliente realmente quiere
      comprar, no quiere navegar por decenas de publicaciones para saber tus
      precios, horarios o catálogo.
    </p>
  </header>

  <div>
    <h3>Lo que busca un cliente cuando quiere comprar ya:</h3>

    <ul className="list">
      <li>Ver tu catálogo de productos organizado y actualizado.</li>
      <li>Conocer tus precios, horarios y ubicación en segundos.</li>
      <li>Tener una respuesta inmediata sin esperar a que le contesten un mensaje.</li>
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
      Un sitio web es tu propio espacio digital abierto las 24 horas.
    </h2>
    <p>
      Es la herramienta central que reúne, organiza y presenta toda la
      información de tu negocio en un solo lugar.<br/> Sirve para que cualquier
      persona que busque lo que vendes pueda encontrarlo, entenderlo y comprarte
      de forma rápida y sencilla.
    </p>
  </header>

    <article>
      <h3>Visibilidad permanente <br/>(Estar en internet)</h3>
      <p>
        Tu negocio deja de ser invisible. Tendrás un lugar propio disponible
        siempre para que miles de personas te encuentren al buscar en internet.
      </p>
    </article>

    <article>
      <h3>Claridad inmediata <br/>(Ser entendido)</h3>
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
    Tener un sitio web convierte las búsquedas de internet en oportunidades
    reales de ventas para tu negocio.
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
      Lo que hacemos por tu negocio:
    </p>
  </header>


    <article>
      <h3>Hacemos que te encuentren</h3>
      <p>
        Ponemos tu negocio en internet para que las personas que buscan tus
        productos en Google y buscadores modernos te vean.
      </p>
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
      <h3>podras cambiar de precios y productos sin más costo</h3>
      <p>
Te entregamos una herramienta lista para cambiar precios y productos, fácil de actualizar y pensada
    para que vendas más sin complicaciones.
      </p>
    </article>

    <article>
      <h3>Nosotros nos encargamos de todo el trabajo</h3>
      <p>
        Tú solo cuentas tu negocio y productos en una reunion, envías tus fotos y datos por WhatsApp.<br/><br/> 
        Nosotros redactamos, diseñamos y dejamos tu sitio web funcionando en 1 semana.
      </p>
    </article>
    <div>
      <h3>Precio normal</h3>

      <p className="precio-normal" >
        1050 Bs.
      </p>
    </div>

    <div>
      <h3>Oferta</h3>

      <p className="precio-oferta" >
        450 Bs.
      </p>

      <p>
        Oferta válida hasta el <span style={{ color: "var(--color-card-step)"}}>10 de octubre.</span>
      </p>
    </div>

  <p>
    Sin complicaciones pronto podras tener clientes a travez de google y agentes de ia.<br/>
    <br/>
    su consulta no molesta.
  </p>
    <div className="card-button">
    <a href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio aparezca en Google?">
      Consultar por WhatsApp
    </a>
    </div>
    <div className="card-button">
    <Link href="/web-especializada">
      Conocer la web especializada estándar
    </Link>
    </div>
  </Card3D>
</section>


<section className="inicio-como-funciona">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>
        Tú nos cuentas sobre tu negocio. Nosotros construimos la web especializada.
      </h2>

      <p>
        LIRIUN-UX se encarga del proceso desde la comprensión del negocio
        hasta la publicación y entrega de la plataforma.
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


<section className="inicio-liriun">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>
        ¿Qué es LIRIUN-UX?
      </h2>
    </header>

    <p>
      LIRIUN-UX crea webs especializadas para negocios que necesitan una presencia
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
          Adaptamos la estructura y el contenido de la plataforma a las necesidades
          de cada negocio.
        </p>
      </article>

      <article>
        <h3>Creación de webs especializadas para El Alto y La Paz</h3>

        <p>
          LIRIUN-UX es un servicio de creación de webs especializadas con base en La Paz,
          Bolivia. Brindamos atención especializada a negocios de La Paz y El Alto,
          conociendo de cerca sus necesidades y la forma en que presentan sus
          productos o servicios. También trabajamos con negocios de toda Bolivia.
        </p>
      </article>
    </div>

    <div className="card-button">
    <a href="/sobre-liriun-ux">
      Conocer LIRIUN-UX
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
        La estructura de la web especializada se adapta al negocio, sus productos o
        servicios y a lo que sus posibles clientes necesitan saber.
      </p>
    </header>

    <article>
      <h3>Ejemplo: Pizzería</h3>

      <ul className="tree">
        <li>Inicio.</li>
        <li>Menú.
            <ul>
            <li>Plato 1</li>
            <li>Plato 2</li>
            <li>...</li>
        </ul>
        </li>
        <li>Promociones.</li>
        <li>Nosotros.</li>
        <li>Ubicación.</li>
        <li>WhatsApp.</li>
      </ul>

    <div className="card-button-e">
      <a href="#">
        Ver ejemplo
      </a>
      </div>
    </article>

    <article>
      <h3>Ejemplo: Academia</h3>


      <ul className="tree">
        <li>Inicio.</li>
        <li>Cursos.

            <ul>
            <li>Curso 1</li>
            <li>Curso 2</li>
            <li>...</li>
        </ul>
            </li>
        <li>Metodología.</li>
        <li>Nosotros.</li>
        <li>Preguntas frecuentes.</li>
        <li>Contacto.</li>
      </ul>

    <div className="card-button-e">
      <a href="#">
        Ver ejemplo
      </a>
      </div>
    </article>

    <article>
      <h3>Ejemplo: Tienda</h3>

      <ul className="tree">
        <li>Inicio.</li>
        <li>Productos.

            <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>...</li>
        </ul>
            </li>
        <li>Categorías.
            <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>...</li>
        </ul>
            </li>
        <li>Promociones.</li>
        <li>Nosotros.</li>
        <li>Contacto.</li>
      </ul>

    <div className="card-button-e">
      <a href="#">
        Ver ejemplo
      </a>
      </div>
    </article>
  </Card3D>
</section>


<section className="inicio-alternativas">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>
        También existen otras formas de presentar tu negocio.
      </h2>

      <p>
        Cada opción tiene sus propias características. LIRIUN-UX está
        pensado para negocios pequeños que quieren delegar la creación
        de su web especializada.
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
        configurar y mantener la plataforma.
      </p>
    </article>

    <article>
      <h3>Un creador de sitios</h3>

      <p>
        Proporciona herramientas para construir una página por cuenta propia,
        pero requiere que el usuario realice parte de la configuración y
        mantenimiento.
      </p>
    </article>

    <article>
      <h3>Una web especializada desarrollada para el negocio</h3>

      <p>
        LIRIUN-UX se encarga de construir la web especializada tomando en cuenta el
        negocio y las necesidades de sus posibles clientes.
      </p>
    </article>
  </Card3D>
</section>


<section className="inicio-faq">
  <Card3D className="proceso-conteiner">
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
        No. La web especializada complementa las redes sociales y proporciona un
        espacio propio para organizar la información del negocio.
      </p>
    </details>

    <details>
      <summary>
        ¿Necesito saber programación?
      </summary>

      <p>
        No. LIRIUN-UX se encarga de la creación y desarrollo de la web especializada.
      </p>
    </details>

    <details>
      <summary>
        ¿Puedo cambiar mis productos y precios?
      </summary>

      <p>
        Sí. La web especializada incluye una interfaz para gestionar la información
        de productos y categorías.
      </p>
    </details>

    <details>
      <summary>
        ¿La web especializada funciona en celular?
      </summary>

      <p>
        Sí. Se adapta para móvil, tablet y computadora.
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
        El precio normal de la web especializada estándar es de 850 Bs.
        Actualmente existe una oferta de 450 Bs hasta el 10 de octubre.
      </p>
    </details>

    <details>
      <summary>
        ¿La web especializada garantiza aparecer en Google o en sistemas de IA?
      </summary>

      <p>
        No se garantiza una posición concreta ni una aparición determinada.
        La plataforma se estructura siguiendo buenas prácticas para facilitar su
        descubrimiento y comprensión.
      </p>
    </details>
    
    <div className="card-button">
    <a href="/web-especializada">
      Ver toda la información de la web especializada
    </a>
    </div>
  </Card3D>
</section>


<section className="inicio-cta">
  <Card3D className="proceso-conteiner">
    <header>
      <h2>
        ¿Tu negocio necesita una web especializada?
      </h2>
    </header>

    <p>
      Cuéntanos qué hace tu negocio y qué quieres mostrar.
      Te explicaremos cómo podría estructurarse su web especializada.
    </p>

    <div className="card-button">
    <a href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio aparezca en Google?">
      Hablar por WhatsApp
    </a>
    </div>
    <div className="card-button">
    <a href="/web-especializada">
      Conocer la web especializada estándar
    </a>
    </div>
  </Card3D>
</section>

      </main>
    </>
  );
}
