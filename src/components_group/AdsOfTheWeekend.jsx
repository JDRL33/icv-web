import { useState, useEffect } from "react";
import { supabase } from "../services/supabase";
import { logo1 } from "../assets/image";

export default function AdsOfTheWeekend() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    async function Fetch() {
      try {
        const { data, error } = await supabase.from("ads").select();
        if (data) {
          setAds(data);
        } else throw new Error(error);
      } catch (err) {
        throw new Error(err);
      }
    }

    Fetch();
  }, []);

  return (
    <div>
      <h4
        id="ads"
        className="mx-10 text-white text-6xl md:text-7xl text-center mb-20"
      >
        Eventos de la Semana
      </h4>
      <div className="flex gap-8 p-5" style={{ overflow: "scroll" }}>
        {ads.map((adss) => (
          <section
            className="flex-none w-90 bg-white rounded-4xl outline-2 outline-offset-4 outline-dashed outline-white"
            key={adss.id}
          >
            <img
              src={logo1}
              alt="Iglesia Columna de la Verdad"
              className="aspect-16/11 object-cover rounded-4xl"
            />
            <div className="px-8 py-3">
              <h4 className="text-3xl text-left text-[#666666] font-bold">
                {adss.name}
              </h4>
              <h3 className="text-[#666666] text-left text-xl">
                <strong>{adss.day}</strong> {adss.hours}
              </h3>
              <p className="text-justify text-[#666666] mt-3">
                {adss.description}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
