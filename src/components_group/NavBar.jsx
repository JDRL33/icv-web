import { useScrollStore } from "../store/RoutesStore";

function NavBar() {
  const scrollTo = useScrollStore((store) => store.scrollTo);

  return (
    <div className="navbar text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer p-3 mr-5 shadow-2xl hover:bg-amber-200 rounded-2xl text-black hover:text-yellow-800 lg:hidden bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <button onClick={() => scrollTo("somos", { offset: 20 })}>
                Somos ...
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("vision", { offset: 20 })}>
                Visión
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("mision", { offset: 20 })}>
                Misión
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("vd", { offset: 20 })}>
                Valores Doctrinales
              </button>
            </li>
            <li>
              <button onClick={() => scrollTo("vp", { offset: 20 })}>
                Valores Personales
              </button>
            </li>
            {/* <li>
              <a href="#ads">Eventos de la Semana</a>
            </li> */}
            <li>
              <button onClick={() => scrollTo("address", { offset: 20 })}>
                Encontremonos
              </button>
            </li>
            {/* <li>
              <a>Donaciones</a>
            </li> */}
          </ul>
        </div>
        <h1 className="cursor-pointer text-2xl text-nowrap font-bold">
          Iglesia Columna de la verdad
        </h1>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>¿Quienes Somos?</summary>
              <ul className="p-2 w-40 flex flex-col items-center bg-white text-black">
                <li>
                  <button
                    onClick={() => scrollTo("somos", { offset: 20 })}
                    className="min-w-36 flex justify-center"
                  >
                    Somos ...
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("vision", { offset: 20 })}
                    className="min-w-36 flex justify-center"
                  >
                    Visión
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("mision", { offset: 20 })}
                    className="min-w-36 flex justify-center"
                  >
                    Misión
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("vd", { offset: 20 })}
                    className="min-w-36 flex justify-center"
                  >
                    Valores Doctrinales
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("vp", { offset: 20 })}
                    className="min-w-36 flex justify-center"
                  >
                    Valores Personales
                  </button>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <button onClick={() => scrollTo("address", { offset: 20 })}>
              Encuentrenos
            </button>
          </li>
          {/* <li>
            <a href="#ads">Eventos de la Semana</a>
          </li> */}
          {/* <li>
            <a>Donaciones</a>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
