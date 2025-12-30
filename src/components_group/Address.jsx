import { useScrollStore } from "../store/RoutesStore";

function Address() {
  const sectionRefs = useScrollStore((state) => state.sectionRefs);
  return (
    <div ref={sectionRefs["address"]}>
      <h4 className="mx-5 text-white text-5xl md:text-7xl text-center mb-20">
        ¿Donde encontrarnos?
      </h4>
      <div className="flex flex-col md:flex-row items-center justify-center gap-20 px-6">
        <div>
          <h4 className="font-bold text-white text-3xl mb-6">
            Iglesia
            <br />
            <span className="text-white text-3xl md:text-5xl">
              Columna de la Verdad
            </span>
          </h4>
          <p className="text-white text-xl">
            Calle 80 #8208 % Calle J y Calle I Cojimar
            <br />
            <strong> "La Habana Cuba"</strong>
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d545.2541224921453!2d-82.30054106450882!3d23.169546929349984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88cd7fe98d5241fb%3A0xf24e76e815d3f973!2sIglesia%20Pentecostal%20%E2%80%9CColumna%20de%20la%20Verdad%E2%80%9D!5e0!3m2!1ses!2sus!4v1761937583806!5m2!1ses!2sus"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-4xl w-100 sm:w-150 md:w-110  h-auto aspect-video"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Address;
