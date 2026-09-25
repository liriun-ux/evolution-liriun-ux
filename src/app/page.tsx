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
<h3>Actualiza tus productos y precios fácil y sin costo por WhatsApp</h3>
<p>
  Solo envíanos tus productos por WhatsApp y nosotros nos encargamos del resto.
  Sin costos adicionales ni complicaciones para que sigas vendiendo.
</p>
    </article>

    <article>
      <h3>Nosotros nos encargamos de todo el trabajo</h3>
      <p>
        Tú solo nos cuentas tu negocio y productos en una reunion, envías tus fotos y datos por WhatsApp.<br/><br/> 
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
    Sin complicaciones pronto tendras clientes a travez de google y agentes de ia.<br/>
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


<section className="inicio-liriun">
  <Card3D className="proceso-conteiner">
  <header>
    <h2>
¿Qué es <span className="text-nowrap">Liriun-UX</span>?
    </h2>
    <p>
Liriun-UX nace con una misión clara: poner a los pequeños negocios en internet de forma sencilla para que sean encontrados y entendidos por personas, buscadores como Google y nuevos agentes de Inteligencia Artificial.
    </p>

  </header>
      <article>
        <h3>Visibilidad real para tu negocio</h3>
        <p>
Nos aseguramos de que tu negocio no pierda clientes por no tener un espacio en internet. Te hacemos visible donde las personas realmente buscan hoy.
        </p>
      </article>

      <article>
        <h3>Fácil de entender para todos</h3>
        <p>
Organizamos tu información y catálogo para que tanto las personas como los agentes de Inteligencia Artificial y Google comprendan exactamente qué vendes y qué ofreces.
        </p>
      </article>

      <article>
        <h3>Sin complicaciones técnicas para ti</h3>
        <p>
Tú no tienes que preocuparte por el diseño, la programación ni la redacción. Nos encargamos de todo el proceso para que tengas tu sitio web listo sin enredos.
        </p>
      </article>

      <article>
        <h3>Conexión directa con clientes</h3>

        <p>
Creamos el camino más rápido para que las personas interesadas se comuniquen directamente a tu WhatsApp o lleguen a la ubicación de tu local.
        </p>
      </article>

      <p>
Para nosotros, un sitio web debe servir para que no pierdas ventas.
      </p>
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
      No usamos plantillas genéricas. Analizamos qué vende tu negocio y qué
      información necesita ver tu cliente antes de comprar (precios, menú, horarios
      o tipos de servicio). A partir de eso, organizamos tu sitio web para que la
      navegación sea fácil, clara y directa.
    </p>
  </header>

    <article>
      <h3>Ejemplo: Pizzería / Restaurante</h3>
      <p>
        Enfocado en lo que un cliente con hambre busca de inmediato: ver el menú
        actualizado, consultar promociones del día y pedir directamente por WhatsApp.
      </p>

      <ul className="tree">
        <li>Inicio</li>
        <li>
          Menú
          <ul>
            <li>Plato / Pizza 1</li>
            <li>Plato / Pizza 2</li>
            <li>...</li>
          </ul>
        </li>
        <li>Promociones</li>
        <li>Nosotros</li>
        <li>Ubicación y Horarios</li>
        <li>Pedido por WhatsApp</li>
      </ul>

      <div className="card-button-e">
        <a>En construcción</a>
      </div>
    </article>

    <article>
      <h3>Ejemplo: Academia / Cursos</h3>
      <p>
        Diseñado para resolver dudas frecuentes sobre métodos de enseñanza, horarios,
        temarios de cursos y facilitar la inscripción inmediata.
      </p>

      <ul className="tree">
        <li>Inicio</li>
        <li>
          Cursos
          <ul>
            <li>Curso 1</li>
            <li>Curso 2</li>
            <li>...</li>
          </ul>
        </li>
        <li>Metodología de trabajo</li>
        <li>Nosotros</li>
        <li>Preguntas frecuentes</li>
        <li>Contacto / Inscripciones</li>
      </ul>

      <div className="card-button-e">
        <a href="https://academia-omega-nine.vercel.app/">Ver ejemplo</a>
      </div>
    </article>

    <article>
      <h3>Ejemplo: Tienda / Catálogo de Productos</h3>
      <p>
        Pensado para organizar variedad de inventario por categorías claras,
        destacar ofertas y facilitar la consulta de precios o stock.
      </p>

      <ul className="tree">
        <li>Inicio</li>
        <li>
          Productos
          <ul>
            <li>Producto 1</li>
            <li>Producto 2</li>
            <li>...</li>
          </ul>
        </li>
        <li>
          Categorías
          <ul>
            <li>Categoría 1</li>
            <li>Categoría 2</li>
            <li>...</li>
          </ul>
        </li>
        <li>Promociones</li>
        <li>Nosotros</li>
        <li>Contacto / Ubicación</li>
      </ul>

      <div className="card-button-e">
        <a>En construcción</a>
      </div>
    </article>
  </Card3D>
</section>


<section className="inicio-alternativas">
  <Card3D className="proceso-conteiner">
<header>
    <h2>
      ¿Por qué LIRIUN-UX es la mejor opción para tu negocio?
    </h2>
    <p>
      Antes de crear un sitio web, es normal comparar opciones. Aquí te mostramos
      por qué Liriun-UX te ahorra tiempo, dinero y dolores de cabeza frente a
      otras alternativas del mercado.
    </p>
  </header>

    <article className="card-alternative">
      <h3>Opción 1: Solo Redes Sociales</h3>
      <ul>
        <li>Quedas fuera de Google y de las búsquedas por Inteligencia Artificial.</li>
        <li>La información de tus productos se pierde entre tantas publicaciones.</li>
        <li>Los clientes no encuentran tus precios o catálogo rápido y se van.</li>
      </ul>
    </article>

    <article className="card-alternative">
      <h3>Opción 2: Creadores Automáticos (Wix, etc.)</h3>
      <ul>
        <li>Requiere que aprendas a diseñar y programar por tu cuenta.</li>
        <li>Te consume horas y días de trabajo que podrías dedicar a tu negocio.</li>
        <li>Suele quedar incompleto o con un diseño poco profesional.</li>
      </ul>
    </article>

    <article className="card-alternative">
      <h3>Opción 3: Otras Agencias Web</h3>
      <ul>
        <li>Precios elevados (arriba de $us 120) por solo 1 o 2 páginas limitadas.</li>
        <li>Dependes de un técnico pagado cada vez que quieras cambiar un precio.</li>
        <li>Suscripciones o contratos de mantenimiento obligatorios mes a mes.</li>
      </ul>
    </article>

    <article className="card-liriun highlight">
      <h3>LIRIUN-UX</h3>
      <ul className="gap-1 flex flex-col">
        <li><strong>Nosotros hacemos todo el trabajo:</strong> Solo nos cuentas de tu negocio y nos das tus datos por WhatsApp; nosotros nos encargamos del resto.</li>
        <li><strong>Páginas centrales para tu negocio:</strong> De 4 a 6 páginas estructuradas a la medida de lo que vendes.</li>
        <li><strong>Páginas para cada producto:</strong> hasta 1000 paginas de  productos</li>
        <li><strong>Comunicación clara:</strong> Redactamos y organizamos tus productos para que sean fáciles de entender por personas, Google e IA.</li>
        <li><strong>Entrega en 1 semana y listo para usar:</strong> Incluye gestor para que tú mismo cambies precios cuando quieras sin pagar extra.</li>
        <li><strong>3 meses de soporte y acompañamiento gratis:</strong> Supervisamos que tu sitio funcione, realizamos los ajustes o pequeños cambios que necesites.</li>
        <li><strong>Autónomo y sin costos mensuales:</strong> Tu sitio web se entrega listo para funcionar de forma continua por tiempo indefinido, sin obligarte a pagar mantenimientos técnicos mes a mes.</li>
      </ul>
      
      <p className="offer-tag">
        <strong>Precio de Oferta: 450 Bs.</strong> (Válido hasta el 10 de octubre)
      </p>
    </article>
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
      El precio normal es de 850 Bs, pero contamos con una oferta especial de
      <strong> 450 Bs</strong> (válida hasta el 10 de octubre). Inicias el proyecto
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
