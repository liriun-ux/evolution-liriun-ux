import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Creación de sitios web en La Paz para negocios | LIRIUN-UX',
  description:
    'Especialistas en la creación y diseño de sitios web en La Paz. Desarrollamos páginas web rápidas, claras y con SEO local para que tu negocio destaque en internet.',
  keywords: [
    'creacion de sitios web en la paz',
    'diseño web en La Paz',
    'desarrollo de páginas web La Paz',
    'sitios web para negocios en La Paz',
    'páginas web La Paz Bolivia',
    'agencia de diseño web La Paz',
    'SEO local La Paz',
    'crear página web La Paz',
  ],
  alternates: {
    canonical: 'https://www.liriun-ux.tecnologia.bo/la-paz',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.liriun-ux.tecnologia.bo/la-paz',
    title: 'Creación de sitios web en La Paz para negocios | LIRIUN-UX',
    description:
      'Lleva tu negocio paceño a internet. Creación de sitios web optimizados con SEO y AEO para destacar en búsquedas locales y atraer más clientes.',
    images: [
      {
        url: '/img/og-liriun-ux-la-paz.png',
        width: 1200,
        height: 630,
        alt: 'Creación de sitios web en La Paz — LIRIUN-UX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creación de sitios web en La Paz para negocios | LIRIUN-UX',
    description:
      'Diseño y desarrollo de sitios web para empresas y negocios en La Paz, Bolivia. Haz que tus clientes te encuentren de forma rápida y clara.',
    images: ['/img/og-liriun-ux-la-paz.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.liriun-ux.tecnologia.bo/la-paz#webpage',
  url: 'https://www.liriun-ux.tecnologia.bo/la-paz',
  name: 'Creación de sitios web en La Paz para negocios | LIRIUN-UX',
  description:
    'Servicio de creación de sitios web en La Paz, enfocado en PyMEs, tiendas y profesionales. Incluye optimización SEO y AEO para negocios locales en Bolivia.',
  isPartOf: {
    '@id': 'https://www.liriun-ux.tecnologia.bo/#website',
  },
  about: {
    '@id': 'https://www.liriun-ux.tecnologia.bo/#organization',
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'La Paz',
      containedInPlace: {
        '@type': 'Country',
        name: 'Bolivia',
      },
    },
  ],
  knowsAbout: [
    'Creacion de sitios web en La Paz',
    'Diseño web La Paz',
    'Desarrollo web local',
    'SEO local La Paz',
    'AEO para comercio local',
    'Presencia digital para negocios',
  ],
  keywords: [
    'creacion de sitios web en la paz',
    'diseño web La Paz',
    'páginas web La Paz Bolivia',
    'sitios web para negocios La Paz',
    'SEO local La Paz',
  ],
  inLanguage: 'es-BO',
};

export default function LaPazPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="la-paz">
        
        {/* HERO */}
        <header className="la-paz-hero">
          <p>LIRIUN-UX • La Paz</p>

          <h1>
            Creación de sitios web para negocios en La Paz. ¿Tus clientes paceños te encuentran al buscar en internet?
          </h1>

          <p>
            Diseñamos y desarrollamos sitios web para empresas, consultorios, tiendas y servicios en La Paz. Páginas estructuradas con SEO y AEO para que tu negocio resalte en Google y mapas.
          </p>

          <a href="#problema">Ver cómo ayuda a tu negocio</a>
          <a href="/sitio-web">Conocer el sitio web</a>
        </header>

        {/* PROBLEMA */}
        <section id="problema" className="la-paz-problema">
          <header>
            <h2>
              Tu negocio en La Paz puede estar en redes sociales, pero aún así perder clientes por la falta de información rápida.
            </h2>
          </header>

          <p>
            Por el tráfico y las distancias entre el Centro, Sopocachi o la Zona Sur, los paceños prefieren confirmar precios, catálogo y ubicación exacta en internet antes de movilizarse. Las redes sociales son buenas, pero la información suele perderse.
          </p>

          <div>
            <h3>Tu negocio puede tener</h3>
            <ul>
              <li>Página en Facebook o Instagram.</li>
              <li>Cuenta de TikTok.</li>
              <li>Número de WhatsApp.</li>
              <li>Local físico en una zona céntrica o comercial.</li>
            </ul>
          </div>

          <p>
            Pero cuando un cliente busca en Google tu servicio desde su oficina o su casa, ¿encuentra un sitio ordenado o tiene que buscar entre publicaciones antiguas para saber si ofreces lo que necesita?
          </p>
        </section>

        {/* DEMOSTRACIÓN */}
        <section className="la-paz-demostracion">
          <header>
            <h2>¿Qué ocurre cuando alguien busca tu negocio en La Paz?</h2>
            <p>
              Imagina a una persona necesitando urgentemente el producto o servicio profesional que ofreces.
            </p>
          </header>

          <div>
            <h3>La búsqueda local</h3>
            <p>
              Escribe en su navegador: "clínica dental en Sopocachi", "tienda de tecnología en el Centro" o "servicios legales en la Zona Sur".
            </p>
          </div>

          <div>
            <h3>La necesidad de información</h3>
            <p>
              El cliente necesita saber si tienes el producto en stock, un rango de precios, tus horarios de atención y la dirección exacta para evitar viajes en vano.
            </p>
          </div>

          <div>
            <h3>La decisión</h3>
            <p>
              Si encuentra esta información organizada al instante, hace clic en tu WhatsApp o se dirige a tu negocio. Si no, contacta a la competencia.
            </p>
          </div>

          <div>
            <h3>Cuando la información está dispersa</h3>
            <p>
              Tiene que enviar mensajes por inbox y esperar horas por una respuesta, o adivinar si el negocio sigue abierto.
            </p>
          </div>

          <div>
            <h3>Cuando la información está organizada</h3>
            <p>
              Encuentra en tu propio sitio web todo tu catálogo, servicios, tarifas referenciales y un botón directo a tu WhatsApp y ubicación en el mapa.
            </p>
          </div>
        </section>

        {/* OPORTUNIDAD */}
        <section className="la-paz-oportunidad">
          <header>
            <h2>Dale a tu empresa en La Paz un espacio propio, formal y claro.</h2>
          </header>

          <p>
            Un sitio web transmite formalidad y confianza, factores clave para el consumidor paceño y las empresas locales.
          </p>

          <div>
            <article>
              <h3>Ser encontrado</h3>
              <p>
                Tu negocio cuenta con una dirección web propia (URL) disponible 24/7 en internet.
              </p>
            </article>

            <article>
              <h3>Ser entendido</h3>
              <p>
                La información se estructura para que el visitante comprenda de inmediato tus servicios, trayectoria y propuesta de valor.
              </p>
            </article>

            <article>
              <h3>Facilitar el contacto</h3>
              <p>
                Integramos formularios de cotización, correos formales y enlaces directos a tu WhatsApp empresarial.
              </p>
            </article>

            <article>
              <h3>Facilitar la visita</h3>
              <p>
                Tu ubicación integrada con mapas para que los clientes lleguen sin perderse entre las calles y avenidas de la ciudad.
              </p>
            </article>
          </div>

          <p>
            Además, estructuramos tu sitio siguiendo buenas prácticas de SEO y AEO para que los buscadores y la Inteligencia Artificial recomienden tu negocio.
          </p>
        </section>

        {/* SOLUCIÓN */}
        <section className="la-paz-solucion">
          <header>
            <h2>Un sitio web pensado para el mercado de La Paz.</h2>
          </header>

          <p>
            No hacemos páginas genéricas. Construimos tu sitio para que la información pueda ser encontrada y utilizada por los clientes locales que necesitan soluciones.
          </p>

          <div>
            <article>
              <h3>Tu empresa o consultorio</h3>
              <p>
                Presentamos de manera profesional tu experiencia, equipo de trabajo y garantías.
              </p>
            </article>

            <article>
              <h3>Tus productos o servicios</h3>
              <p>
                Organizamos la información para compras rápidas o contrataciones de servicios especializados.
              </p>
            </article>

            <article>
              <h3>Tu ubicación y contacto</h3>
              <p>
                Facilitamos el siguiente paso para quien quiera cotizar, comprar o agendar una cita.
              </p>
            </article>
          </div>

          <a href="/sitio-web">Conocer el sitio web estándar</a>
        </section>

        {/* CÓMO FUNCIONA LIRIUN */}
        <section className="la-paz-como-funciona">
          <header>
            <h2>Tú nos cuentas sobre tu negocio. Nosotros construimos el sitio.</h2>
            <p>
              LIRIUN-UX se encarga de todo el aspecto técnico. Tú solo te dedicas a seguir atendiendo tu negocio.
            </p>
          </header>

          <ol>
            <li>
              <h3>Conocemos tu negocio</h3>
              <p>Comprendemos tu mercado en La Paz y lo que buscan tus clientes.</p>
            </li>
            <li>
              <h3>Organizamos la información</h3>
              <p>Seleccionamos qué datos, textos y fotografías deben priorizarse.</p>
            </li>
            <li>
              <h3>Estructuramos el sitio</h3>
              <p>Definimos la navegación para una experiencia fluida e intuitiva.</p>
            </li>
            <li>
              <h3>Diseñamos</h3>
              <p>Creamos una presentación visual profesional que eleva la percepción de tu marca.</p>
            </li>
            <li>
              <h3>Desarrollamos</h3>
              <p>Programamos el sitio para que cargue rápido en computadoras de oficina y redes móviles.</p>
            </li>
            <li>
              <h3>Revisamos</h3>
              <p>Recibes el sitio web para revisarlo y solicitar los ajustes necesarios.</p>
            </li>
            <li>
              <h3>Publicamos</h3>
              <p>Con tu aprobación, la página queda en línea bajo tu propio dominio.</p>
            </li>
            <li>
              <h3>Entregamos</h3>
              <p>Recibes los accesos y un panel fácil para gestionar tus catálogos o información.</p>
            </li>
          </ol>

          <a href="/proceso">Ver el proceso completo</a>
        </section>

        {/* LIRIUN LA PAZ */}
        <section className="la-paz-liriun">
          <header>
            <h2>Expertos en diseño web para La Paz</h2>
          </header>

          <p>
            LIRIUN-UX es un servicio de creación de sitios web con sede local. Conocemos las dinámicas comerciales de La Paz y El Alto.
          </p>

          <div>
            <article>
              <h3>Tu presencia digital</h3>
              <p>
                Creamos el espacio oficial de tu negocio, independiente de los algoritmos de redes sociales.
              </p>
            </article>
            <article>
              <h3>Información clara</h3>
              <p>
                El cliente paceño valora la formalidad y la claridad. Organizamos el contenido para transmitir ambas.
              </p>
            </article>
            <article>
              <h3>Hecho para tu rubro</h3>
              <p>
                Adaptamos la web ya seas un estudio de abogados, una agencia de turismo, una clínica o un comercio minorista.
              </p>
            </article>
          </div>

          <a href="/sobre-liriun-ux">Conocer LIRIUN-UX</a>
        </section>

        {/* EJEMPLOS */}
        <section className="la-paz-ejemplos">
          <header>
            <h2>Ejemplos de cómo organizamos la información.</h2>
            <p>
              Cada rubro en La Paz tiene diferentes necesidades de comunicación.
            </p>
          </header>

          <article>
            <h3>Ejemplo: Servicios Profesionales (Abogados, Consultoras)</h3>
            <ul>
              <li>Inicio.</li>
              <li>Áreas de práctica / Servicios.</li>
              <li>Equipo de profesionales.</li>
              <li>Casos de éxito / Trayectoria.</li>
              <li>Reserva de cita (WhatsApp/Formulario).</li>
              <li>Ubicación de la oficina.</li>
            </ul>
            <a href="#">Ver ejemplo</a>
          </article>

          <article>
            <h3>Ejemplo: Salud (Clínicas, Consultorios)</h3>
            <ul>
              <li>Inicio.</li>
              <li>Especialidades.</li>
              <li>Staff médico.</li>
              <li>Seguros médicos aceptados.</li>
              <li>Agendar consulta.</li>
              <li>Ubicación y horarios.</li>
            </ul>
            <a href="#">Ver ejemplo</a>
          </article>

          <article>
            <h3>Ejemplo: Tienda / Importadora</h3>
            <ul>
              <li>Inicio.</li>
              <li>Catálogo de productos.</li>
              <li>Marcas exclusivas.</li>
              <li>Políticas de envío (En La Paz y al interior).</li>
              <li>Nosotros.</li>
              <li>Contacto.</li>
            </ul>
            <a href="#">Ver ejemplo</a>
          </article>
        </section>

        {/* ALTERNATIVAS */}
        <section className="la-paz-alternativas">
          <header>
            <h2>Otras formas de presentar tu negocio.</h2>
            <p>
              LIRIUN-UX está pensado para negocios que buscan resultados profesionales delegando el trabajo técnico.
            </p>
          </header>

          <article>
            <h3>Solo redes sociales</h3>
            <p>
              Excelentes para el marketing diario, pero limitadas para organizar un portafolio de servicios o dar formalidad corporativa.
            </p>
          </article>

          <article>
            <h3>Hacerlo por cuenta propia</h3>
            <p>
              Requiere mucho tiempo libre para aprender plataformas y lidiar con caídas del sistema o configuraciones de dominio.
            </p>
          </article>

          <article>
            <h3>Un sitio desarrollado con LIRIUN-UX</h3>
            <p>
              Nosotros construimos la página basándonos en tu negocio, optimizamos el SEO y te entregamos un producto llave en mano en 5 días.
            </p>
          </article>
        </section>

        {/* FAQ */}
        <section className="la-paz-faq">
          <header>
            <h2>Preguntas frecuentes sobre sitios web en La Paz</h2>
          </header>

          <details>
            <summary>¿El sitio web sustituye a mi página de Facebook?</summary>
            <p>
              No, la complementa. Facebook te ayuda a ser descubierto por casualidad, el sitio web convierte a las personas que te están buscando activamente en Google.
            </p>
          </details>

          <details>
            <summary>¿Necesito conocimientos de informática?</summary>
            <p>
              No. Nosotros nos encargamos de todo el desarrollo, diseño y configuración de servidores.
            </p>
          </details>

          <details>
            <summary>¿Puedo actualizar mi catálogo yo mismo?</summary>
            <p>
              Sí, te entregamos un panel de administración amigable para que cambies fotos, precios y textos cuando lo requieras.
            </p>
          </details>

          <details>
            <summary>¿Se verá bien desde celulares?</summary>
            <p>
              Sí, la web es 100% responsiva y optimizada para pantallas móviles, tablets y computadoras de escritorio.
            </p>
          </details>

          <details>
            <summary>¿Cuánto tiempo demora el desarrollo?</summary>
            <p>
              Nuestro plazo estándar de entrega es de 5 días hábiles a partir de la confirmación del proyecto y la entrega de información.
            </p>
          </details>

          <details>
            <summary>¿Cuánto cuesta tener una página web?</summary>
            <p>
              El precio regular del sitio web estándar es de 850 Bs. Actualmente contamos con una tarifa especial de 450 Bs (hasta el 10 de octubre).
            </p>
          </details>

          <a href="/sitio-web">Ver toda la información del sitio web</a>
        </section>

        {/* CTA */}
        <section className="la-paz-cta">
          <header>
            <h2>¿Listo para que tu negocio paceño tenga su propia web?</h2>
          </header>

          <p>
            Escríbenos, cuéntanos a qué se dedica tu empresa y te propondremos la mejor estructura web para destacar en internet.
          </p>

          <a href="#">Hablar por WhatsApp</a>
          <a href="/sitio-web">Conocer el sitio web estándar</a>
        </section>

      </main>
    </>
  );
}

