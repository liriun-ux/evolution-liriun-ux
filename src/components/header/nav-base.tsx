
import Image from "next/image";
import ButtonVerMas from "./button-ver-mas";
import NavLinks from "./NavLinks";
import Description from "./description";

export default function NavBase() {
  return (
    <section className="nav-base">
      <div className="nav-base--content">

        {/* PARTE IZQUIERDA */}
            <NavLinks/>

        {/* PARTE DERECHA */}
        <div className="nav-base--right">
            <Description
            className="res-base--description"
  text="Un sitio web bien diseñado es la base de todo lo que viste aquí: SEO, IA, redes sociales y más. Descubre cómo LIRIUN-UX puede construir esa base sólida para tu marca."
  highlights={[
    { text: "sitio web",},
    { text: "LIRIUN-UX",},  
  ]}
/>
            <ButtonVerMas title="Visitar LIRIUN-UX" href="https://www.liriun-ux.tecnologia.bo"/>

        </div>
        {/* PARTE Footer */}
            {/* PARTE Footer */}
            <footer className="nav-base--footer">
            
              <small className="nav-base--reserve display">
                © LIRIUN-UX
              </small>
            
              <small className="nav-base--create-movil display">
                © creado por LIRIUN-UX
              </small>
            
              <nav className="nav-base--icons" aria-label="Redes sociales y sitio web">
            
                <a
                  href="https://facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    className="nav-base--icon"
                    src="/img/facebookDark.svg"
                    alt="facebook de liriun-ux"
                    width={30}
                    height={30}
                  />
                </a>
            
                <a
                  href="https://tiktok/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <Image
                    className="nav-base--icon"
                    src="/img/tiktok.svg"
                    alt="tiktok de liriun-ux"
                    width={30}
                    height={30}
                  />
                </a>
            
                <a
                  href="https://www.liriun-ux.tecnologia.bo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sitio web de LIRIUN-UX"
                >
                  <Image
                    className="nav-base--icon"
                    src="/img/web-icon.svg"
                    alt="Sitio web de LIRIUN-UX"
                    width={30}
                    height={30}
                  />
                </a>
            
              </nav>
            
              <small className="nav-base--create display">
                Creado por LIRIUN-UX
              </small>
            
            </footer>
            </div>
    </section>
  );
}
