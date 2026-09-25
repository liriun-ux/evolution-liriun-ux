import { Card3D } from '@/animation/card3d';
import ProcesoCanvas from '@/animation/ensamble';
import type { Metadata } from 'next';
import Link from 'next/link';

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
        url: '/img/og-liriun-ux-el-alto.png',
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

const jsonLd = [
  {
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
      "@id": "https://www.liriun-ux.tecnologia.bo/el-alto#localbusiness"
    },
    "inLanguage": "es-BO"
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.liriun-ux.tecnologia.bo/el-alto#localbusiness",
    "name": "LIRIUN-UX El Alto",
    "description": "LIRIUN-UX ofrece servicios de desarrollo y diseño de sitios web con SEO local y AEO para clientes, pymes y negocios en El Alto. Atención y soporte especializado en la región.",
    "url": "https://www.liriun-ux.tecnologia.bo/el-alto",
    "email": "liriun.ux@gmail.com",
    "priceRange": "Bs.",
    "image": "https://www.liriun-ux.tecnologia.bo/img/og-liriun-ux-el-alto.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atención 100% online y local",
      "addressLocality": "El Alto",
      "addressRegion": "La Paz",
      "addressCountry": "BO"
    },
    "hasVirtualLocation": {
      "@type": "VirtualLocation",
      "url": "https://www.liriun-ux.tecnologia.bo/el-alto"
    },
    "areaServed": {
      "@type": "City",
      "name": "El Alto"
    },
    "currenciesAccepted": "BOB",
    "paymentAccepted": ["Bank Transfer", "QR Code", "Cash"],
    "parentOrganization": {
      "@type": "Organization",
      "@id": "https://www.liriun-ux.tecnologia.bo/#organization",
      "name": "LIRIUN-UX",
      "url": "https://www.liriun-ux.tecnologia.bo"
    }
  }
];

export default function ElAlto() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
<main className="city">
      <ProcesoCanvas />

      {/* HERO */}
      <header className="city-hero">
        <span>
          <span className="liriun">LIRIUN-UX</span> El Alto
        </span>

        <Card3D className="hero-content">
          <h1>
            Cada día personas buscan lo que vendes en El Alto. <br />
            <strong>¿Tus productos ya están en internet?</strong>
          </h1>

          <p>
            Pon tu negocio, tienda o taller a la vista de todos. Diseñamos y desarrollamos páginas web claras y rápidas con SEO y AEO para que te encuentren en Google, mapas y agentes de IA.
          </p>

          <div className="card-button">
            <a href="#problema">Ver cómo funciona</a>
          </div>
          <div className="card-button">
            <Link href="/web-especializada">Conocer la web especializada</Link>
          </div>
        </Card3D>
      </header>

      {/* PROBLEMA */}
      <section id="problema" className="el-alto-problema">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>El proceso por el que pierdes clientes hoy en El Alto</h2>
            <p>
              Cuando un cliente necesita un producto o servicio, lo primero que hace es buscarlo en su celular. Si tu negocio no aparece de forma clara, esa oportunidad se pierde en cuestión de segundos.
            </p>
          </header>

          <div>
            <h3>Proceso de pérdida de ventas:</h3>
            <ul className="list">
              <li>Un cliente busca tu producto o servicio desde su casa o trabajo en El Alto.</li>
              <li>Tu negocio no aparece en Google ni en los mapas de la zona.</li>
              <li>El cliente encuentra a tu competencia en la Ceja, Rio Seco o Satélite y les compra a ellos.</li>
              <li>Pierdes una venta.</li>
              <li>Pierdes un cliente.</li>
            </ul>
          </div>

          <p>
            ¿Cuántos clientes crees que tiene tu competencia solo porque ya están en internet?
            <br />
            <br />
            ¿Cuántos clientes estás perdiendo hoy en El Alto solo porque no te pueden encontrar?
          </p>
        </Card3D>
      </section>

      {/* DEMOSTRACIÓN */}
      <section className="el-alto-demostracion">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Publicar en Facebook, TikTok o responder WhatsApp no siempre es suficiente</h2>
            <p>
              Tal vez ya subes fotos a Facebook o contestas mensajes, pero la información en redes se pierde rápido. Cuando un cliente alteño realmente quiere comprar ya, no quiere navegar por decenas de publicaciones para saber tus precios, horarios o catálogo.
            </p>
          </header>

          <div>
            <h3>Lo que busca un cliente cuando quiere comprar ya:</h3>
            <ul className="list">
              <li>Ver tu catálogo de productos organizado y actualizado.</li>
              <li>Conocer precios, horarios y ubicación exacta en El Alto en segundos.</li>
              <li>Tener una respuesta inmediata sin esperar horas a que le contesten un inbox.</li>
              <li>Sentir la confianza de tener toda la información al alcance de la mano.</li>
            </ul>
          </div>

          <p>
            Cuando no facilitas esta información, el cliente no espera: busca a otro negocio que se la dé al instante.
          </p>
        </Card3D>
      </section>

      {/* OPORTUNIDAD */}
      <section className="el-alto-oportunidad">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Un sitio web es tu propio local digital abierto las 24 horas</h2>
            <p>
              Es la herramienta central que reúne, organiza y presenta toda la información de tu negocio en un solo lugar. Sirve para que cualquier persona en El Alto o La Paz que busque lo que vendes te encuentre y te compre de forma rápida.
            </p>
          </header>

          <article>
            <h3>Visibilidad permanente (Estar en internet)</h3>
            <p>
              Tu negocio deja de ser invisible. Tendrás un lugar propio disponible siempre para que miles de personas te encuentren al buscar en internet.
            </p>
          </article>

          <article>
            <h3>Claridad inmediata (Ser entendido)</h3>
            <p>
              Organiza tus productos, servicios y precios para que tus clientes entiendan en segundos qué vendes y por qué elegirte a ti antes que a otros.
            </p>
          </article>

          <article>
            <h3>Presencia en Google y Agentes de IA</h3>
            <p>
              Optimizamos tu información para que motores de búsqueda como Google y nuevos asistentes de IA recomienden tu negocio en El Alto.
            </p>
          </article>

          <article>
            <h3>Ventas y contactos directos</h3>
            <p>
              Centraliza botones a WhatsApp, llamadas, ubicación en mapa y redes sociales para convertir visitantes en clientes reales que visiten tu local.
            </p>
          </article>

          <p>
            Tener un sitio web convierte las búsquedas de internet en oportunidades reales de ventas para tu negocio en El Alto.
          </p>
        </Card3D>
      </section>

      {/* SOLUCIÓN + OFERTA */}
      <section className="el-alto-solucion">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Liriun-UX hace que tu negocio en El Alto sea fácil de encontrar y entender</h2>
            <p>
              Solucionamos la falta de clientes haciéndote visible donde todos buscan hoy. Nos encargamos de crear el sitio web de tu negocio para que no vuelvas a perder una venta.
              <br />
              Lo que hacemos por tu negocio:
            </p>
          </header>

          <article>
            <h3>Hacemos que te encuentren</h3>
            <p>
              Ponemos tu negocio en internet para que las personas que buscan tus productos en Google y buscadores modernos te vean.
            </p>
          </article>

          <article>
            <h3>Presentamos tus productos de forma clara</h3>
            <p>
              Mostramos tus fotos, catálogo, precios y horarios de manera ordenada para que entiendan de inmediato qué vendes y cuánto cuesta.
            </p>
          </article>

          <article>
            <h3>Facilitamos tus ventas por WhatsApp y Mapa</h3>
            <p>
              Tus clientes podrán escribirte directamente al WhatsApp con un solo clic o ver la ubicación exacta de tu local o taller en El Alto para ir a visitarte.
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
              Tú solo nos cuentas de tu negocio en una reunión y nos envías tus fotos por WhatsApp. Nosotros redactamos, diseñamos y dejamos tu sitio web funcionando en 1 semana.
            </p>
          </article>

          <div>
            <h3>Precio normal</h3>
            <p className="precio-normal">1050 Bs.</p>
          </div>

          <div>
            <h3>Oferta especial El Alto</h3>
            <p className="precio-oferta">450 Bs.</p>
            <p>
              Oferta válida hasta el <span style={{ color: 'var(--color-card-step)' }}>10 de octubre.</span>
            </p>
          </div>

          <p>
            Sin complicaciones, pronto tendrás clientes a través de Google y agentes de IA.
            <br />
            <br />
            Su consulta no molesta.
          </p>

          <div className="card-button">
            <a href="https://wa.me/59176760684?text=Hola, ¿Cómo hago para que mi negocio en El Alto aparezca en Google?">
              Consultar por WhatsApp
            </a>
          </div>
          <div className="card-button">
            <Link href="/web-especializada">Conocer la web especializada estándar</Link>
          </div>
        </Card3D>
      </section>

      {/* CÓMO FUNCIONA LIRIUN */}
      <section className="el-alto-como-funciona">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Proceso de construcción</h2>
            <p>
              LIRIUN-UX se encarga del proceso desde la comprensión del negocio hasta la publicación y entrega de tu sitio web en El Alto.
            </p>
          </header>

          <ol className="gap-1 flex flex-col">
            <li>
              <h3>1. Conocemos tu negocio</h3>
              <p>Comprendemos qué haces, qué ofreces y cómo funciona tu negocio en El Alto.</p>
            </li>
            <li>
              <h3>2. Organizamos la información</h3>
              <p>Definimos qué debe comunicarse y qué necesita conocer tu posible cliente antes de comprar.</p>
            </li>
            <li>
              <h3>3. Estructuramos la web especializada</h3>
              <p>Definimos las páginas, la navegación y dónde debe estar cada información de forma accesible.</p>
            </li>
            <li>
              <h3>4. Diseñamos</h3>
              <p>Creamos una presentación visual limpia y adaptada a tu rubro comercial sin distracciones.</p>
            </li>
            <li>
              <h3>5. Desarrollamos</h3>
              <p>Convertimos la estructura y el diseño en una web especializada ultra rápida y funcional para celulares.</p>
            </li>
            <li>
              <h3>6. Revisamos</h3>
              <p>Recibes la web especializada terminada para probarla y solicitar los ajustes correspondientes.</p>
            </li>
            <li>
              <h3>7. Publicamos</h3>
              <p>Una vez aprobada, la web especializada queda disponible públicamente en internet.</p>
            </li>
            <li>
              <h3>8. Entregamos</h3>
              <p>Recibes la web especializada, sus accesos y la información necesaria para gestionar tus productos y precios.</p>
            </li>
          </ol>

          <div className="card-button">
            <Link href="/proceso">Ver el proceso completo</Link>
          </div>
        </Card3D>
      </section>

      {/* SOBRE LIRIUN EN EL ALTO */}
      <section className="el-alto-liriun">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>¿Qué es Liriun-UX?</h2>
            <p>
              Liriun-UX nace con una misión clara: poner a los pequeños negocios y talleres de El Alto y La Paz en internet de forma sencilla para que sean encontrados y entendidos por personas, Google y nuevos agentes de Inteligencia Artificial.
            </p>
          </header>

          <article>
            <h3>Visibilidad real para tu negocio</h3>
            <p>
              Nos aseguramos de que tu negocio no pierda clientes por no tener un espacio propio en internet. Te hacemos visible donde la gente de verdad busca hoy.
            </p>
          </article>

          <article>
            <h3>Fácil de entender para todos</h3>
            <p>
              Organizamos tu información y catálogo para que tanto las personas como los motores de búsqueda entiendan exactamente qué vendes y qué ofreces.
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
              Creamos el camino más rápido para que las personas interesadas se comuniquen directamente a tu WhatsApp o lleguen a la ubicación exacta de tu local.
            </p>
          </article>

          <p>Para nosotros, un sitio web debe servir para que no pierdas ventas.</p>

          <div className="card-button">
            <Link href="/sobre-liriun-ux">Conocer LIRIUN-UX</Link>
          </div>
        </Card3D>
      </section>

      {/* EJEMPLOS LOCALES */}
      <section className="el-alto-ejemplos">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Cada negocio necesita una forma diferente de presentarse</h2>
            <p>
              No usamos plantillas genéricas. Analizamos qué vende tu negocio en El Alto y qué información necesita ver tu cliente antes de comprar (precios, menú, horarios o tipos de servicio).
            </p>
          </header>

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
            <h3>Ejemplo: Servicios Técnicos o Talleres</h3>
            <p>Diseñado para mostrar tus trabajos realizados, ubicación en mapa, tipos de reparaciones y facilitar la cotización inmediata.</p>
            <ul className="tree">
              <li>Inicio</li>
              <li>
                Servicios e instalaciones
                <ul>
                  <li>Servicio 1</li>
                  <li>Servicio 2</li>
                  <li>...</li>
                </ul>
              </li>
              <li>Trabajos realizados y Garantía</li>
              <li>Ubicación del taller en El Alto</li>
              <li>Cotización rápida por WhatsApp</li>
            </ul>
            <div className="card-button-e">
              <a >En construcción</a>
            </div>
          </article>

          <article>
            <h3>Ejemplo: Comercializadora o Venta de Productos</h3>
            <p>Pensado para organizar tu inventario por categorías claras, mostrar precios y coordinar envíos o entregas locales.</p>
            <ul className="tree">
              <li>Inicio</li>
              <li>
                Catálogo de productos
                <ul>
                  <li>Producto 1</li>
                  <li>Producto 2</li>
                  <li>...</li>
                </ul>
              </li>
              <li>Precios y Ofertas</li>
              <li>
                Envíos y Puntos de Entrega
                <ul>
                  <li>El Alto</li>
                  <li>La Paz</li>
                </ul>
              </li>
              <li>Contacto directo por WhatsApp</li>
            </ul>
            <div className="card-button-e">
              <a >En construcción</a>
            </div>
          </article>
        </Card3D>
      </section>

      {/* ALTERNATIVAS COMPLETA */}
      <section className="el-alto-alternativas">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>¿Por qué LIRIUN-UX es la mejor opción para tu negocio en El Alto?</h2>
            <p>
              Antes de crear un sitio web, es normal comparar opciones. Aquí te mostramos por qué Liriun-UX te ahorra tiempo, dinero y dolores de cabeza frente a otras alternativas del mercado.
            </p>
          </header>

          <article className="card-alternative">
            <h3>Opción 1: Solo Redes Sociales (Facebook/TikTok)</h3>
            <ul>
              <li>Quedas fuera de Google y de las búsquedas por Inteligencia Artificial.</li>
              <li>La información de tus productos se pierde entre tantas publicaciones pasadas.</li>
              <li>Los clientes no encuentran tus precios o catálogo rápido y se van a otro lado.</li>
            </ul>
          </article>

          <article className="card-alternative">
            <h3>Opción 2: Creadores Automáticos (Wix, Shopify, etc.)</h3>
            <ul>
              <li>Requiere que aprendas a diseñar y programar por tu cuenta.</li>
              <li>Te consume horas y días de trabajo que podrías dedicar a tu negocio.</li>
              <li>Suele quedar incompleto o con un diseño lento en conexiones de celular.</li>
            </ul>
          </article>

          <article className="card-alternative">
            <h3>Opción 3: Otras Agencias Web</h3>
            <ul>
              <li>Precios elevados (arriba de $us 120) por solo 1 o 2 páginas limitadas.</li>
              <li>Dependes de un técnico pagado cada vez que quieras cambiar un precio o foto.</li>
              <li>Suscripciones o contratos de mantenimiento obligatorios mes a mes.</li>
            </ul>
          </article>

          <article className="card-liriun highlight">
            <h3>LIRIUN-UX El Alto</h3>
            <ul className="gap-1 flex flex-col">
              <li>
                <strong>Nosotros hacemos todo el trabajo:</strong> Solo nos cuentas de tu negocio y nos das tus datos por WhatsApp; nosotros nos encargamos del resto.
              </li>
              <li>
                <strong>Páginas centrales para tu negocio:</strong> De 4 a 6 páginas estructuradas a la medida de lo que vendes.
              </li>
              <li>
                <strong>Páginas para cada producto:</strong> Hasta 1000 páginas de productos individuales para posicionar en Google.
              </li>
              <li>
                <strong>Comunicación clara:</strong> Redactamos y organizamos tus productos para que sean fáciles de entender por personas, Google e IA.
              </li>
              <li>
                <strong>Entrega en 1 semana y listo para usar:</strong> Incluye gestor para que tú mismo cambies precios cuando quieras sin pagar extra.
              </li>
              <li>
                <strong>3 meses de soporte y acompañamiento gratis:</strong> Supervisamos que tu sitio funcione y realizamos los pequeños ajustes que necesites.
              </li>
              <li>
                <strong>Autónomo y sin costos mensuales:</strong> Tu sitio web se entrega listo para funcionar de forma continua sin obligarte a pagar mantenimientos mes a mes.
              </li>
            </ul>

            <p className="offer-tag">
              <strong>Precio de Oferta El Alto: 450 Bs.</strong> (Válido hasta el 10 de octubre)
            </p>
          </article>
        </Card3D>
      </section>

      {/* FAQ COMPLETA */}
      <section className="el-alto-faq">
        <Card3D className="proceso-conteiner">
          <header>
            <h2>Preguntas frecuentes</h2>
            <p>Resolvemos tus dudas principales para que des el paso con total seguridad.</p>
          </header>

          <details>
            <summary>¿Necesito dejar de usar Facebook, TikTok o WhatsApp?</summary>
            <p>
              No, para nada. Tu sitio web complementa tus redes sociales: en redes publicas contenido diario y en tu web centralizas la información, precios y catálogo completo para cerrar las ventas sin que los clientes se pierdan.
            </p>
          </details>

          <details>
            <summary>¿Necesito saber de diseño o tecnología para tener mi sitio?</summary>
            <p>
              No necesitas saber nada de código ni diseño. En LIRIUN-UX nos encargamos de todo el proceso: redactamos, diseñamos y dejamos tu sitio 100% funcionando.
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
              Sí, totalmente. Diseñamos el sitio pensando primero en teléfonos móviles, asegurando que cargue ultra rápido incluso con conexiones de datos móviles estándar.
            </p>
          </details>

          <details>
            <summary>¿En cuánto tiempo entregan el sitio web listo?</summary>
            <p>
              El tiempo de entrega es de solo 1 semana a partir del pago inicial de 200 Bs y la entrega de tus fotos o datos básicos.
            </p>
          </details>

          <details>
            <summary>¿Cuánto cuesta el servicio y qué modalidades de pago hay?</summary>
            <p>
              El precio normal es de 1050 Bs, pero contamos con una oferta especial de <strong>450 Bs</strong> (válida hasta el 10 de octubre). Inicias el proyecto con un adelanto de 200 Bs y cancelas el saldo al ver tu sitio terminado.
            </p>
          </details>

          <details>
            <summary>¿Garantizan que saldré en el primer lugar de Google o IA?</summary>
            <p>
              Ninguna agencia seria puede garantizar el primer lugar.
                  <br/>
                  <br/>
              Lo que sí garantizamos es aplicar toda la optimización de SEO/AEO y presentar tu información de forma impecable para que Google y las IAs te encuentren rápidamente en El Alto.
            </p>
          </details>

          <div className="card-button">
            <a href="https://wa.me/59176760684?text=Hola, tengo algunas dudas sobre el sitio web para mi negocio en El Alto">
              ¿Tienes más dudas? Contáctanos por WhatsApp
            </a>
          </div>
        </Card3D>
      </section>
    </main>
    </>
  );
}
