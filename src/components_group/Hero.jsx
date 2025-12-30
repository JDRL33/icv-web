import { useScrollStore } from "../store/RoutesStore";
import NavBar from "./NavBar";

function Hero() {
  const scrollTo = useScrollStore((store) => store.scrollTo);
  const sectionRefs = useScrollStore((store) => store.sectionRefs);

  return (
    <>
      <div
        className={`flex flex-col justify-between min-h-150
       mask-alpha mask-b-from-50% mask-b-to-60%-70% bg-[url(https://nafhiyrnophnkpixobey.supabase.co/storage/v1/object/public/images/icv.webp)]
       md:bg-[url(https://nafhiyrnophnkpixobey.supabase.co/storage/v1/object/public/images/logo3_blue.webp)] bg-cover bg-no-repeat bg-center`}
       ref={sectionRefs["start"]}
      >
        <NavBar />
      </div>
      <section className="flex justify-center -mt-20">
        <button
          onClick={() => scrollTo("welcome", { offset: 20 })}
          className=" cursor-pointer z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-15 "
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-.53 14.03a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V8.25a.75.75 0 0 0-1.5 0v5.69l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </section>
    </>
  );
}

export default Hero;
