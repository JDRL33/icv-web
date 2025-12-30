import { useScrollStore } from "../store/RoutesStore";

function Presentation() {
  const sectionRefs = useScrollStore((state) => state.sectionRefs);
  return (
    <div ref={sectionRefs["somos"]}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
        <img
          className="max-h-70 w-100 "
          src="images/logo_ui.jpg"
          alt="Columna de la Verdad Cojimar"
        />
        <div>
          <h2 className="font-bold text-4xl">
            Iglesia Evangélica Pentecostal de las <br />
            Asambleas de Dios Columna de la Verdad <br />
            Cojímar La Habana Cuba
          </h2>
          <div className="divider "></div>
          <p className="">
            para que si tardo, sepas como debes conducirse en la casa de Dios,
            que es la iglesia del Dios viviente, <strong>columna</strong> y
            baluarte <strong>de la verdad</strong>.
          </p>
          <cite className="text-left">1ra Timoteo 3:15</cite>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
