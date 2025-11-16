function NavBar() {
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
              <a href="#start">Somos ...</a>
            </li>
            <li>
              <a href="#vision">Visión</a>
            </li>
            <li>
              <a href="#mision">Misión</a>
            </li>
            <li>
              <a href="#vd">Valores Doctrinales</a>
            </li>
            <li>
              <a href="#vp">Valores Personales</a>
            </li>
            {/* <li>
              <a href="#ads">Eventos de la Semana</a>
            </li> */}
            <li>
              <a href="#address">Encontremonos</a>
            </li>
            {/* <li>
              <a>Donaciones</a>
            </li> */}
          </ul>
        </div>
        <a className="cursor-pointer text-2xl text-nowrap font-bold">
          Columna de la verdad
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>¿Quienes Somos?</summary>
              <ul className="p-2 w-40 flex flex-col items-center bg-white text-black">
                <li>
                  <a href="#start" className="min-w-36 flex justify-center">
                    Somos ...
                  </a>
                </li>
                <li>
                  <a href="#vision" className="min-w-36 flex justify-center">
                    Visión
                  </a>
                </li>
                <li className="">
                  <a href="#mision" className="min-w-36 flex justify-center">
                    Misión
                  </a>
                </li>
                <li>
                  <a href="#vd" className="min-w-36 flex justify-center">
                    Valores Doctrinales
                  </a>
                </li>
                <li>
                  <a href="#vp" className="min-w-36 flex justify-center">
                    Valores Personales
                  </a>
                </li>
              </ul>
            </details>
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
