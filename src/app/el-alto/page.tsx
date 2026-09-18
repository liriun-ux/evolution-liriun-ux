

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creación de sitios web en El Alto para negocios | LIRIUN-UX',
  
  description:
    'Especialistas en la creación de sitios web en El Alto. Diseñamos y desarrollamos páginas web rápidas, claras y con SEO local para que tu negocio, tienda o taller atraiga más clientes.',
    
  keywords: [
    'creacion de sitios web en el alto',
    'diseño web en El Alto',
    'desarrollo de páginas web El Alto',
    'sitios web para negocios en El Alto',
    'páginas web El Alto',
    'diseño web El Alto Bolivia',
    'SEO local El Alto',
    'crear página web El Alto',
    'agencia de diseño web El Alto'
  ],

  alternates: {
    canonical: 'https://www.liriun-ux.tecnologia.bo/el-alto',
  },

  openGraph: {
    type: 'website',
    url: 'https://www.liriun-ux.tecnologia.bo/el-alto',
    title: 'Creación de sitios web en El Alto para negocios | LIRIUN-UX',
    description:
      'Lleva tu negocio de El Alto a internet. Creación de sitios web optimizados con SEO y AEO para destacar en búsquedas locales y atraer clientes reales.',
    images: [
      {
        url: '/img/og-liriun-ux-el-alto.png', // Sugerencia: crear una imagen OG con un guiño local
        width: 1200,
        height: 630,
        alt: 'Creación de sitios web en El Alto — LIRIUN-UX',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Creación de sitios web en El Alto para negocios | LIRIUN-UX',
    description:
      'Diseño y desarrollo de sitios web para emprendedores y negocios en El Alto, Bolivia. Haz que tus clientes te encuentren fácil y rápido.',
    images: ['/img/og-liriun-ux-el-alto.png'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.liriun-ux.tecnologia.bo/el-alto#webpage",
  "url": "https://www.liriun-ux.tecnologia.bo/el-alto",
  "name": "Creación de sitios web en El Alto para negocios | LIRIUN-UX",
  "description": "Servicio de creación de sitios web en El Alto, enfocado en PyMEs, tiendas y talleres. Incluye optimización SEO y AEO para negocios locales en Bolivia.",
  
  "isPartOf": {
    "@id": "https://www.liriun-ux.tecnologia.bo/#website"
  },
  
  "about": {
    "@id": "https://www.liriun-ux.tecnologia.bo/#organization"
  },
  
  "areaServed": [
    {
      "@type": "City",
      "name": "El Alto",
      "containedInPlace": {
        "@type": "Country",
        "name": "Bolivia"
      }
    }
  ],
  
  "knowsAbout": [
    "Creacion de sitios web en El Alto",
    "Diseño web El Alto",
    "Desarrollo web local",
    "SEO local",
    "AEO para comercio local",
    "Presencia digital para negocios"
  ],
  
  "keywords": [
    "creacion de sitios web en el alto",
    "diseño web El Alto",
    "páginas web El Alto Bolivia",
    "sitios web para negocios El Alto",
    "SEO local El Alto"
  ],
  
  "inLanguage": "es-BO"
};
export default function ElAlto() {

  return (
<>

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(jsonLd),
  }}
/>
<main className="el-alto">

  {/* HERO */}
  <header className="el-alto-hero">
    <p>LIRIUN-UX • El Alto</p>

    <h1>
      Creación de sitios web para negocios y emprenderes en El Alto.
      ¿Tus clientes te encuentran cuando buscan en internet?
    </h1>

    <p>
      Diseñamos y desarrollamos sitios web para negocios, tiendas, talleres y servicios en El Alto. Páginas claras, rápidas y estructuradas con SEO y AEO para que te encuentren en Google y mapas.
    </p>

    <a href="#problema">
      Ver cómo ayuda a tu negocio
    </a>

    <a href="/sitio-web">
      Conocer el sitio web
    </a>
  </header>


  {/* PROBLEMA */}
  <section id="problema" className="el-alto-problema">
    <header>
      <h2>
        Tu negocio en El Alto puede estar en Facebook o TikTok y aun así perder clientes que buscan comprar hoy.
      </h2>
    </header>

    <p>
      Las redes sociales son excelentes para publicar videos y fotos cotidianas. Sin embargo, en El Alto los clientes buscan respuestas rápidas: dirección exacta, horarios, catálogo y precios antes de salir a comprar o mandar un mensaje.
    </p>

    <div>
      <h3>Tu negocio puede tener</h3>

      <ul>
        <li>Página en Facebook.</li>
        <li>Cuenta de TikTok o Instagram.</li>
        <li>Número de WhatsApp.</li>
        <li>Ubicación física (Ceja, Villa Adela, Río Seco, Senakata, etc.).</li>
      </ul>
    </div>

    <p>
      Pero cuando un cliente busca en Google un producto o servicio en El Alto, ¿encuentra tu información clara en un solo lugar o termina comprando a la competencia?
    </p>
  </section>


  {/* DEMOSTRACIÓN */}
  <section className="el-alto-demostracion">
    <header>
      <h2>
        ¿Qué hace un alteño cuando busca un negocio o servicio?
      </h2>

      <p>
        Imagina a alguien en El Alto necesitando urgentemente lo que tu negocio vende.
      </p>
    </header>

    <div>
      <h3>La búsqueda local</h3>

      <p>
        Escribe en su celular desde su casa o trabajo: "venta de [tu producto] en El Alto" o "servicio de [tu rubro] cerca de mí".
      </p>
    </div>

    <div>
      <h3>La necesidad de información</h3>

      <p>
        Necesita saber exactamente qué tienes disponible, cuánto cuesta aproximado, en qué zona o galería estás y cómo contactarte directamente por WhatsApp.
      </p>
    </div>

    <div>
      <h3>La decisión</h3>

      <p>
        Si ve la información clara, presiona el botón de WhatsApp o va directo a tu local. Si no la encuentra, sigue buscando a otro negocio.
      </p>
    </div>

    <div>
      <h3>Cuando solo usas redes sociales</h3>

      <p>
        El cliente tiene que revisar decenas de publicaciones pasadas, preguntar por inbox o adivinar tu horario de atención.
      </p>
    </div>

    <div>
      <h3>Cuando tienes un sitio web organizado</h3>

      <p>
        El cliente entra a tu página, ve el catálogo, conoce tu dirección física en El Alto y hace clic para comunicarse contigo en segundos.
      </p>
    </div>
  </section>


  {/* OPORTUNIDAD */}
  <section className="el-alto-oportunidad">
    <header>
      <h2>
        Dale a tu negocio en El Alto un espacio web formal y fácil de encontrar.
      </h2>
    </header>

    <p>
      Un sitio web no es solo para grandes empresas. Es la herramienta esencial para que cualquier negocio o taller en El Alto destaque y genere confianza.
    </p>

    <div>
      <article>
        <h3>Presencia en El Alto y Bolivia</h3>

        <p>
          Tu negocio cuenta con una dirección web propia (URL) que puedes compartir en tus redes, tarjetas y anuncios.
        </p>
      </article>

      <article>
        <h3>Claridad comercial</h3>

        <p>
          Tus productos o servicios quedan ordenados por categorías, haciendo que tus clientes entiendan rápido lo que vendes.
        </p>
      </article>

      <article>
        <h3>Contacto a un clic</h3>

        <p>
          Enlace directo a tu WhatsApp para recibir pedidos o consultas sin rodeos.
        </p>
      </article>

      <article>
        <h3>Ubicación geográfica clara</h3>

        <p>
          Muestra tu mapa, puntos de referencia e indicaciones para llegar a tu local en El Alto sin complicaciones.
        </p>
      </article>
    </div>

    <p>
      Estructuramos el sitio con estándares modernos de SEO y AEO para facilitar que buscadores como Google e inteligencias artificiales recomienden tu negocio en la zona.
    </p>
  </section>


  {/* SOLUCIÓN */}
  <section className="el-alto-solucion">
    <header>
      <h2>
        Sitios web pensados para el comercio y servicios de El Alto.
      </h2>
    </header>

    <p>
      No creamos páginas genéricas ni complejas. Diseñamos sitios web funcionales que resuelven las dudas de tus clientes en El Alto y aceleran tus ventas.
    </p>

    <div>
      <article>
        <h3>Presentación de tu negocio</h3>
        <p>
          Mostramos la identidad de tu emprendimiento, tu trayectoria y la garantía que ofreces a tus clientes.
        </p>
      </article>

      <article>
        <h3>Catálogo de productos o servicios</h3>
        <p>
          Organizamos lo que ofreces de forma clara y legible desde cualquier teléfono celular.
        </p>
      </article>

      <article>
        <h3>Atención directa y mapa</h3>
        <p>
          Ubicación estratégica, referencias locales y botones directos de atención.
        </p>
      </article>
    </div>

    <a href="/sitio-web">
      Conocer el sitio web estándar
    </a>
  </section>


  {/* CÓMO FUNCIONA LIRIUN */}
  <section className="el-alto-como-funciona">
    <header>
      <h2>
        Nos envías la información de tu negocio. Nosotros construimos la página.
      </h2>

      <p>
        Nos encargamos de todo el proceso de creación de tu sitio web en El Alto para que no pierdas tiempo en cosas técnicas.
      </p>
    </header>

    <ol>
      <li>
        <h3>Entendemos tu negocio</h3>
        <p>
          Analizamos qué vendes, a quién le vendes en El Alto y cuáles son las dudas más frecuentes de tus clientes.
        </p>
      </li>

      <li>
        <h3>Organizamos los contenidos</h3>
        <p>
          Seleccionamos las fotos, textos, precios y datos clave que deben estar visibles.
        </p>
      </li>

      <li>
        <h3>Estructuramos la navegación</h3>
        <p>
          Diseñamos la secuencia lógica para que el visitante encuentre lo que busca sin perderse.
        </p>
      </li>

      <li>
        <h3>Diseñamos la página</h3>
        <p>
          Creamos una apariencia limpia, profesional y adaptada a la identidad de tu marca.
        </p>
      </li>

      <li>
        <h3>Desarrollamos el sitio web</h3>
        <p>
          Programamos la página para que cargue ultra rápido en celulares con cualquier conexión a internet.
        </p>
      </li>

      <li>
        <h3>Revisión y ajustes</h3>
        <p>
          Te mostramos el sitio terminado para que lo pruebes y nos indiques si deseas cambiar algún detalle.
        </p>
      </li>

      <li>
        <h3>Publicación en internet</h3>
        <p>
          Con tu aprobación, el sitio queda activo en su dominio web para empezar a recibir visitas.
        </p>
      </li>

      <li>
        <h3>Entrega y capacitación</h3>
        <p>
          Te entregamos los accesos y te enseñamos lo básico para actualizar tus productos cuando lo necesites.
        </p>
      </li>
    </ol>

    <a href="/proceso">
      Ver el proceso completo
    </a>
  </section>


  {/* SOBRE LIRIUN EN EL ALTO */}
  <section className="el-alto-liriun">
    <header>
      <h2>
        Desarrollo web con entendimiento local en El Alto
      </h2>
    </header>

    <p>
      LIRIUN-UX ofrece un servicio especializado de creación de sitios web para negocios en La Paz y El Alto.
    </p>

    <div>
      <article>
        <h3>Tu negocio en internet</h3>
        <p>
          Construimos una presencia digital propia que respalda tus campañas en redes sociales.
        </p>
      </article>

      <article>
        <h3>Información sin rodeos</h3>
        <p>
          Estructuramos el contenido pensando en la rapidez con la que compran los clientes locales.
        </p>
      </article>

      <article>
        <h3>Enfoque a la medida</h3>
        <p>
          Adaptamos cada sección según tu sector: comercio, gastronomía, educación, servicios técnicos o profesionales.
        </p>
      </article>

      <article>
        <h3>Atención cercana en El Alto y La Paz</h3>
        <p>
          Somos un equipo local que conoce el mercado paceño y alteño. Entendemos la importancia de comunicar la ubicación, los métodos de pago y la confianza en cada venta.
        </p>
      </article>
    </div>

    <a href="/sobre-liriun-ux">
      Conocer LIRIUN-UX
    </a>
  </section>


  {/* EJEMPLOS LOCALES */}
  <section className="el-alto-ejemplos">
    <header>
      <h2>
        Ejemplos de cómo se adapta la estructura a negocios de El Alto.
      </h2>

      <p>
        Cada rubro comercial requiere organizar la información de manera estratégica.
      </p>
    </header>

    <article>
      <h3>Ejemplo: Gastronomía o Restaurante</h3>

      <ul>
        <li>Inicio.</li>
        <li>Menú y platos del día.</li>
        <li>Ubicación y referencias (ej. La Ceja / Satélite).</li>
        <li>Horarios de atención.</li>
        <li>Pedidos por WhatsApp.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>

    <article>
      <h3>Ejemplo: Servicios Técnicos o Talleres</h3>

      <ul>
        <li>Inicio.</li>
        <li>Servicios e instalaciones.</li>
        <li>Trabajos realizados / Garantía.</li>
        <li>Ubicación del taller.</li>
        <li>Cotización rápida por WhatsApp.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>

    <article>
      <h3>Ejemplo: Comercializadora o Venta de Productos</h3>

      <ul>
        <li>Inicio.</li>
        <li>Catálogo de productos.</li>
        <li>Precios y ofertas.</li>
        <li>Envíos y entregas en El Alto / La Paz.</li>
        <li>Contacto.</li>
      </ul>

      <a href="#">
        Ver ejemplo
      </a>
    </article>
  </section>


  {/* ALTERNATIVAS */}
  <section className="el-alto-alternativas">
    <header>
      <h2>
        Comparación: Opciones para presentar tu negocio en El Alto.
      </h2>

      <p>
        Analiza las distintas alternativas antes de tomar una decisión para tu presencia digital.
      </p>
    </header>

    <article>
      <h3>Solo páginas en redes sociales</h3>

      <p>
        Útiles para publicar ofertas del día, pero la información sobre precios, catálogos y ubicación suele perderse entre tantas publicaciones pasadas.
      </p>
    </article>

    <article>
      <h3>Hacerlo tú mismo en plataformas gratuitas</h3>

      <p>
        Requiere invertir horas de aprendizaje, resolver fallas técnicas y lidiar con configuraciones que quitan tiempo a la atención de tu negocio.
      </p>
    </article>

    <article>
      <h3>Contratar agencias tradicionales</h3>

      <p>
        Suelen ofrecer proyectos demasiado costosos, con largos meses de desarrollo y tecnicismos innecesarios para un negocio local.
      </p>
    </article>

    <article>
      <h3>Un sitio web desarrollado con LIRIUN-UX</h3>

      <p>
        Nosotros nos encargamos de todo el trabajo técnico y organizativo. Recibes un sitio web listo en 5 días a un precio accesible.
      </p>
    </article>
  </section>


  {/* FAQ */}
  <section className="el-alto-faq">
    <header>
      <h2>
        Preguntas frecuentes sobre páginas web en El Alto
      </h2>
    </header>

    <details>
      <summary>
        ¿Si creo un sitio web, debo dejar de publicar en redes sociales?
      </summary>

      <p>
        No. Tus redes sociales siguen sirviendo para atraer clientes cotidianos. El sitio web sirve para cerrar la venta, mostrar el catálogo completo y dar la ubicación exacta a quienes te buscan en Google.
      </p>
    </details>

    <details>
      <summary>
        ¿El sitio web se ve bien en teléfonos móviles?
      </summary>

      <p>
        Sí. La gran mayoría de búsquedas en El Alto se realizan desde celulares, por lo que adaptamos el sitio web para que cargue de forma veloz y clara en dispositivos móviles.
      </p>
    </details>

    <details>
      <summary>
        ¿Puedo cambiar las fotos o precios de mis productos después?
      </summary>

      <p>
        Sí. Incluimos una interfaz intuitiva para que puedas actualizar o agregar productos y precios fácilmente sin depender de un programador.
      </p>
    </details>

    <details>
      <summary>
        ¿Cuánto tiempo tarda el trabajo?
      </summary>

      <p>
        Entregamos el sitio web terminado en un plazo estándar de 5 días hábiles a partir de la recepción de la información y el pago inicial.
      </p>
    </details>

    <details>
      <summary>
        ¿Cuál es el costo del servicio?
      </summary>

      <p>
        El precio regular del sitio web estándar es de 850 Bs. Actualmente contamos con una tarifa promocional de 450 Bs por tiempo limitado.
      </p>
    </details>

    <details>
      <summary>
        ¿Apareceré inmediatamente en el primer lugar de Google en El Alto?
      </summary>

      <p>
        Ningún servicio puede garantizar el primer lugar de forma automática. Sin embargo, estructuramos el sitio con las mejores prácticas SEO y AEO para optimizar al máximo su visibilidad en búsquedas locales.
      </p>
    </details>

    <a href="/sitio-web">
      Ver toda la información del sitio web
    </a>
  </section>


  {/* CTA */}
  <section className="el-alto-cta">
    <header>
      <h2>
        ¿Quieres crear el sitio web para tu negocio en El Alto?
      </h2>
    </header>

    <p>
      Escríbenos y cuéntanos sobre tu negocio. Te explicaremos sin compromiso cómo organizar tu información para empezar a recibir más clientes.
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
  )
}
