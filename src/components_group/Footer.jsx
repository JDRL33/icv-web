import { useScrollStore } from "../store/RoutesStore";

function Footer() {
  const scrollTo = useScrollStore((state) => state.scrollTo);
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside className="flex flex-col items-center">
        <button onClick={() => scrollTo("start", { offset: 20 })}>
          <img
            src="images/logo_ui.jpg"
            alt="Columna de la Verdad Cojimar"
            className="h-30"
          />
        </button>
        <>
          Iglesia Evangelica Pentecostal.
          <br />
          Asambleas de Dios de Cuba.
          <br />
          <span className="text-xs">columnadelaverdad@2025</span>
        </>
      </aside>
      <nav>
        <h6 className="footer-title">¿Quienes Somos?</h6>
        <button
          className="link link-hover"
          onClick={() => scrollTo("somos", { offset: 20 })}
        >
          Somos ...
        </button>
        <button
          className="link link-hover"
          onClick={() => scrollTo("vision", { offset: 20 })}
        >
          Visión
        </button>
        <button
          className="link link-hover"
          onClick={() => scrollTo("mision", { offset: 20 })}
        >
          Misión
        </button>
        <button
          className="link link-hover"
          onClick={() => scrollTo("vd", { offset: 20 })}
        >
          Valores Doctrinales
        </button>
        <button
          className="link link-hover"
          onClick={() => scrollTo("vp", { offset: 20 })}
        >
          Valores Personales
        </button>
      </nav>
      <nav>
        <h6 className="footer-title">Contacto</h6>
        <button
          className="link link-hover"
          onClick={() => scrollTo("address", { offset: 20 })}
        >
          Dirección
        </button>
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
