import { logoSinFondo } from "../assets/image";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside className="flex flex-col items-center">
        <a href="#home">
          <img
            src={logoSinFondo}
            alt="Columna de la Verdad Cojimar"
            className="h-30"
          />
        </a>
        <>
          Iglesia Evangelica Pentecostal.
          <br />
          Asambleas de Dios de Cuba.
          <br />
          <span className="text-xs">
            Derechos Reservados @columnadelaverdad 2025
          </span>
        </>
      </aside>
      <nav>
        <h6 className="footer-title">¿Quienes Somos?</h6>
        <a className="link link-hover" href="#start">
          Somos ...
        </a>
        <a className="link link-hover" href="#vision">
          Visión
        </a>
        <a className="link link-hover" href="#mision">
          Misión
        </a>
        <a className="link link-hover" href="#vd">
          Valores Doctrinales
        </a>
        <a className="link link-hover" href="#vp">
          Valores Personales
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Comunicación</h6>
        <a className="link link-hover" href="#address">
          Encuentrenos
        </a>
        {/* <a className="link link-hover">Contacto</a>
        <a className="link link-hover">Escribenos</a> */}
      </nav>
      {/* <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav> */}
    </footer>
  );
}

export default Footer;
