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

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.liriun-ux.tecnologia.bo/la-paz#webpage",
    "url": "https://www.liriun-ux.tecnologia.bo/la-paz",
    "name": "Creación de sitios web en La Paz para negocios | LIRIUN-UX",
    "description": "Servicio de creación de sitios web en La Paz, enfocado en PyMEs, tiendas y profesionales. Incluye optimización SEO y AEO para negocios locales en Bolivia.",
    "isPartOf": {
      "@id": "https://www.liriun-ux.tecnologia.bo/#website"
    },
    "about": {
      "@id": "https://www.liriun-ux.tecnologia.bo/la-paz#localbusiness"
    },
    "inLanguage": "es-BO"
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.liriun-ux.tecnologia.bo/la-paz#localbusiness",
    "name": "LIRIUN-UX La Paz",
    "description": "LIRIUN-UX ofrece servicios de creación de sitios web optimizados con SEO y AEO para empresas, consultorios y negocios en la ciudad de La Paz, Bolivia.",
    "url": "https://www.liriun-ux.tecnologia.bo/la-paz",
    "email": "liriun.ux@gmail.com",
    "priceRange": "Bs.",
    "image": "https://www.liriun-ux.tecnologia.bo/img/og-liriun-ux-la-paz.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Atención 100% online y local",
      "addressLocality": "La Paz",
      "addressRegion": "La Paz",
      "addressCountry": "BO"
    },
    "hasVirtualLocation": {
      "@type": "VirtualLocation",
      "url": "https://www.liriun-ux.tecnologia.bo/la-paz"
    },
    "areaServed": {
      "@type": "City",
      "name": "La Paz"
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

export default function LaPazPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="city la-paz">
        
        {/* HERO */}
        <header className="city-hero">
          <span> <span className='liriun'>LIRIUN-UX</span> La Paz</span>

    <div className="hero-content">
          <h1>
            Creación de webs especializadas para negocios en La Paz.<br/> ¿Tus clientes paceños te encuentran al buscar en internet?
          </h1>

          <p>
            Diseñamos y desarrollamos webs especializadas para empresas, consultorios, tiendas y servicios en La Paz. Páginas estructuradas con SEO y AEO para que tu negocio resalte en Google y mapas.
          </p>

          <a href="#problema">Ver cómo ayuda a tu negocio</a>
          <a href="/web-especializada">Conocer la web especializada</a>
          </div>
        </header>

        {/* PROBLEMA */}
        <section id="problema" className="la-paz-problema">
          <div className="proceso-conteiner">
            <header>
              <h2>
                Tu negocio en La Paz puede estar en redes sociales, pero aún así perder clientes por la falta de información rápida.
              </h2>
            </header>

            <p>
              Por el tráfico y las distancias entre el Centro, Sopocachi o la Zona Sur, los paceños prefieren confirmar precios, catálogo y ubicación exacta en internet antes de movilizarse. Las redes sociales son buenas, pero la información suele perderse entre publicaciones antiguas.
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
              Pero cuando un cliente busca en Google tu servicio desde su oficina o su casa, ¿encuentra un espacio ordenado o tiene que investigar para saber si ofreces lo que realmente necesita?
            </p>
          </div>
        </section>

        {/* DEMOSTRACIÓN */}
        <section className="la-paz-demostracion">
          <div className="proceso-conteiner">
            <header>
              <h2>¿Qué ocurre cuando alguien busca tu negocio en La Paz?</h2>
              <p>
                Imagina a una persona necesitando urgentemente el producto o servicio profesional que ofreces.
              </p>
            </header>

            <div>
              <h3>La búsqueda local</h3>
              <p>
                Escribe en su celular o computadora: "clínica dental en Sopocachi", "tienda de tecnología en el Centro" o "servicios legales en la Zona Sur".
              </p>
            </div>

            <div>
              <h3>La necesidad de información</h3>
              <p>
                El cliente necesita saber si tienes el producto en stock, un rango de precios, tus horarios de atención y la dirección exacta para evitar un viaje en vano.
              </p>
            </div>

            <div>
              <h3>La decisión</h3>
              <p>
                Si encuentra esta información organizada al instante, hace clic en tu WhatsApp o se dirige a tu negocio. Si no, contacta inmediatamente a la competencia.
              </p>
            </div>

            <div>
              <h3>Cuando la información está dispersa</h3>
              <p>
                El cliente tiene que enviar mensajes por inbox, esperar horas por una respuesta o adivinar si el negocio sigue abierto.
              </p>
            </div>

            <div>
              <h3>Cuando la información está organizada</h3>
              <p>
                Encuentra en tu propia web especializada todo tu catálogo, servicios, tarifas referenciales, tu ubicación en el mapa y un botón directo a tu WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* OPORTUNIDAD */}
        <section className="la-paz-oportunidad">
          <div className="proceso-conteiner">
            <header>
              <h2>Dale a tu empresa en La Paz un espacio propio, formal y claro.</h2>
            </header>

            <p>
              Una web especializada transmite formalidad y confianza, factores clave para el consumidor paceño y las empresas locales.
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
                  Integramos tu ubicación con mapas para que los clientes lleguen sin perderse entre las calles y avenidas de la ciudad.
                </p>
              </article>
            </div>

            <p>
              Además, estructuramos tu web especializada siguiendo buenas prácticas de SEO y AEO para que los buscadores y la Inteligencia Artificial recomienden tu negocio.
            </p>
          </div>
        </section>

        {/* SOLUCIÓN */}
        <section className="la-paz-solucion">
          <div className="proceso-conteiner">
            <header>
              <h2>Una web especializada pensada para el mercado de La Paz.</h2>
            </header>

            <p>
              No hacemos páginas genéricas. Construimos tu plataforma para que la información pueda ser encontrada y utilizada por los clientes locales que necesitan soluciones.
            </p>

            <div>
              <article>
                <h3>Tu empresa o consultorio</h3>
                <p>
                  Presentamos de manera profesional tu experiencia, tu equipo de trabajo y las garantías que ofreces.
                </p>
              </article>

              <article>
                <h3>Tus productos o servicios</h3>
                <p>
                  Organizamos la información visualmente para facilitar compras rápidas o contrataciones de servicios especializados.
                </p>
              </article>

              <article>
                <h3>Tu ubicación y contacto</h3>
                <p>
                  Facilitamos el siguiente paso para quien quiera cotizar, comprar o agendar una cita al instante.
                </p>
              </article>
            </div>

            <a href="/web-especializada">Conocer la web especializada</a>
          </div>
        </section>

        {/* CÓMO FUNCIONA LIRIUN */}
        <section className="la-paz-como-funciona">
          <div className="proceso-conteiner">
            <header>
              <h2>Tú nos cuentas sobre tu negocio. Nosotros construimos la web especializada.</h2>
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
                <h3>Estructuramos la web especializada</h3>
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
                <p>Recibes la web especializada para revisarla y solicitar los ajustes necesarios.</p>
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
          </div>
        </section>

        {/* LIRIUN LA PAZ */}
        <section className="la-paz-liriun">
          <div className="proceso-conteiner">
            <header>
              <h2>Expertos en desarrollo web especializado para La Paz</h2>
            </header>

            <p>
              LIRIUN-UX es un servicio de creación de webs especializadas con sede local. Conocemos a fondo las dinámicas comerciales de La Paz y El Alto.
            </p>

            <div>
              <article>
                <h3>Tu presencia digital</h3>
                <p>
                  Creamos el espacio oficial de tu negocio, independiente de los caprichos y algoritmos de las redes sociales.
                </p>
              </article>
              <article>
                <h3>Información clara</h3>
                <p>
                  El cliente paceño valora la formalidad y la claridad. Organizamos el contenido para transmitir ambos valores.
                </p>
              </article>
              <article>
                <h3>Hecho para tu rubro</h3>
                <p>
                  Adaptamos la web especializada ya seas un estudio de abogados, una agencia de turismo, una clínica o un comercio minorista.
                </p>
              </article>
            </div>

            <a href="/sobre-liriun-ux">Conocer LIRIUN-UX</a>
          </div>
        </section>

        {/* EJEMPLOS */}
        <section className="la-paz-ejemplos">
          <div className="proceso-conteiner">
            <header>
              <h2>Ejemplos de cómo organizamos la información.</h2>
              <p>
                Cada rubro en La Paz tiene diferentes necesidades de comunicación.
              </p>
            </header>

            <article>
              <h3>Servicios Profesionales (Abogados, Consultoras)</h3>
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
              <h3>Salud (Clínicas, Consultorios)</h3>
              <ul>
                <li>Inicio.</li>
                <li>Especialidades médicas.</li>
                <li>Staff médico.</li>
                <li>Seguros médicos aceptados.</li>
                <li>Agendar consulta rápida.</li>
                <li>Ubicación y horarios.</li>
              </ul>
              <a href="#">Ver ejemplo</a>
            </article>

            <article>
              <h3>Tienda / Importadora</h3>
              <ul>
                <li>Inicio.</li>
                <li>Catálogo de productos clasificados.</li>
                <li>Marcas exclusivas.</li>
                <li>Políticas de envío (En La Paz y al interior).</li>
                <li>Nosotros.</li>
                <li>Contacto.</li>
              </ul>
              <a href="#">Ver ejemplo</a>
            </article>
          </div>
        </section>

        {/* ALTERNATIVAS */}
        <section className="la-paz-alternativas">
          <div className="proceso-conteiner">
            <header>
              <h2>Otras formas de presentar tu negocio.</h2>
              <p>
                LIRIUN-UX está pensado para negocios que buscan resultados profesionales delegando todo el trabajo técnico.
              </p>
            </header>

            <article>
              <h3>Solo redes sociales</h3>
              <p>
                Excelentes para el marketing diario, pero muy limitadas para organizar un portafolio de servicios o dar formalidad corporativa.
              </p>
            </article>

            <article>
              <h3>Hacerlo por cuenta propia</h3>
              <p>
                Requiere de mucho tiempo libre para aprender a usar plataformas, además de lidiar con caídas del sistema o configuraciones complejas de dominio.
              </p>
            </article>

            <article>
              <h3>Una web especializada con LIRIUN-UX</h3>
              <p>
                Nosotros construimos la plataforma basándonos en tu negocio, optimizamos el SEO local y te entregamos un producto llave en mano listo en 5 días.
              </p>
            </article>
          </div>
        </section>

        {/* FAQ */}
        <section className="la-paz-faq">
          <div className="proceso-conteiner">
            <header>
              <h2>Preguntas frecuentes sobre webs especializadas en La Paz</h2>
            </header>

            <details>
              <summary>¿La web especializada sustituye a mi página de Facebook?</summary>
              <p>
                No, la complementa. Facebook te ayuda a ser descubierto por casualidad; la web especializada convierte en clientes a las personas que te están buscando activamente en Google.
              </p>
            </details>

            <details>
              <summary>¿Necesito conocimientos de informática?</summary>
              <p>
                En absoluto. Nosotros nos encargamos de todo el desarrollo, diseño y configuración de servidores.
              </p>
            </details>

            <details>
              <summary>¿Puedo actualizar mi catálogo yo mismo?</summary>
              <p>
                Sí, te entregamos un panel de administración muy amigable para que cambies fotos, precios y textos cuando lo requieras sin depender de nosotros.
              </p>
            </details>

            <details>
              <summary>¿Se verá bien desde celulares?</summary>
              <p>
                Sí, la web especializada es 100% responsiva y está optimizada para pantallas móviles, tablets y computadoras de escritorio.
              </p>
            </details>

            <details>
              <summary>¿Cuánto tiempo demora el desarrollo?</summary>
              <p>
                Nuestro plazo estándar de entrega es de 5 días hábiles a partir de la confirmación del proyecto y la entrega de tu información.
              </p>
            </details>

            <details>
              <summary>¿Cuánto cuesta una web especializada?</summary>
              <p>
                El precio regular de la web especializada es de 850 Bs. Actualmente contamos con una tarifa especial de 450 Bs (válida hasta el 10 de octubre).
              </p>
            </details>

            <a href="/web-especializada">Ver toda la información de la web especializada</a>
          </div>
        </section>

        {/* CTA */}
        <section className="la-paz-cta">
          <div className="proceso-conteiner">
            <header>
              <h2>¿Listo para que tu negocio paceño tenga su propia web especializada?</h2>
            </header>

            <p>
              Escríbenos, cuéntanos a qué se dedica tu empresa y te propondremos la mejor estructura web para destacar en internet.
            </p>

            {/* Recuerda cambiar el href por tu enlace real de wa.me */}
            <a href="#">Hablar por WhatsApp</a>
            <a href="/web-especializada">Conocer la web especializada</a>
          </div>
        </section>

      </main>
    </>
  );
}
