
import "./style.css"

const Footer = () => {
  return (
    <footer>
      <div className="cont-general-footer">
        <div className="cont-footer">
          <h3>Ayuda</h3>
          <a href="#">Preguntas Frecuentes</a>
          <a href="#">Soporte tecnico</a>
        </div>
        <div className="cont-footer contacto">
          <h3>Redes Sociales</h3>
          <ul>
            <i className="fa-brands fa-facebook"></i>
            <a
              href="https://www.facebook.com/walter.schwartzer/"
              target="blank"
            >
              Facebook
            </a>
          </ul>
          <ul>
            <i className="fa-brands fa-instagram"></i>
            <a
              href="https://www.instagram.com/walterschwartzer/"
              target="blank"
            >
              Instagram
            </a>
          </ul>
          <ul>
            <i className="fa-brands fa-twitch"></i>
            <a href="https://www.twitch.tv/x1zon" target="blank">
              Twitch
            </a>
          </ul>
          <ul>
            <i className="fa-brands fa-twitter"></i>
            <a href="https://twitter.com/WalterXizon">
              Twitter
            </a>
          </ul>
          <ul>
            <i className="fa-brands fa-whatsapp"></i>
            <a href="https://api.whatsapp.com/send?phone=+542804023729&text=Hola quiero realizar una compra">
              Whatsapp
            </a>
          </ul>
        </div>
        <div className="cont-footer">
          <h3>Nosotros</h3>
          <a href="#">Informacion de la Empresa</a>
          <a href="#">Trabaja con Nosotros</a>
        </div>
      </div>
      <div className="cont-copy">
        <p>
          Todos los derechos reservados © 2023 <b> Audi </b>{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer