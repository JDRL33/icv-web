import { temple } from "../assets/image";

export function Vision() {
  return (
    <div id="vision" className="flex flex-col md:flex-row items-center gap-8">
      <div>
        <h2 className=" text-6xl md:text-7xl mb-10 ml-0 md:ml-10 text-center md:text-left ">
          Visión
        </h2>
        <p className="text-justify">
          <strong>Su mandato es nuestra misión</strong>
          {
            " (Mateo 28:18-20), somos una iglesia sin paredes, enfocadas en el servicio a la comunidad, somos una iglesia Cristocéntrica Misionera y Pentecostal. Comprometida con los principios del Reino, conservadora de la sana doctrina. Que sirve con amor al prójimo y espera el advenimiento del Señor Jesucristo."
          }
        </p>
      </div>
      <img
        className="aspect-16/11 object-cover rounded outline-2 outline-offset-2 outline-dashed"
        src={temple}
        alt="picture"
      />
    </div>
  );
}
export function Mision() {
  return (
    <div id="mision" className="flex flex-col md:flex-row items-center gap-8">
      <img
        className="aspect-16/11 object-cover rounded outline-2 outline-offset-2 outline-dashed"
        src={temple}
        alt="picture"
      />
      <div>
        <h2 className=" text-6xl md:text-7xl mb-10 ml-0 md:ml-10 text-center md:text-left ">
          Misión
        </h2>
        <p className="text-justify">
          {
            " Ante los grandes desafíos que nos propone nuestra generación, es necesario entender que sólo serán superados utilizando los recursos que nos dejo nuestro Señor Jesucristo, la iglesia cristiana en Cojímar los asumirá con la siempre viviente Palabra de Dios, el Poder del Espíritu Santo y la diligente dedicación a la enseñanza efectiva de las Verdades Eternas de Dios."
          }
        </p>
      </div>
    </div>
  );
}
export function ValoresPersonales() {
  return (
    <div id="vp">
      <h2 className=" text-6xl md:text-7xl mb-10 ml-0 md:ml-10 text-center md:text-left ">
        Valores personales de nuestra iglesia.
      </h2>
      <div className="mx-8">
        <p className="flex flex-col gap-4 text-left">
          <span>
            <strong>HACEMOS LO QUE SEA NECESARIO.</strong> ¡Sin excusas! La
            importancia de nuestra misión trasciende la descripción de un
            puesto. Nadie dice: ¡Ese no es mi trabajo! Cualquier problema es de
            todos.
          </span>
          <span>
            <strong>MUESTRA TU PASIÓN.</strong> Las personas con pasión hacen
            que las cosas sucedan. Es un estilo de vida, es nuestra meta. Pasión
            por Cristo, por su presencia, por el prójimo.
          </span>
          <span>
            <strong>AMAMOS A NUESTRA IGLESIA.</strong> Nos encanta esta iglesia,
            amamos la gente que nos rodea, tú eres mi hermano.
          </span>
          <span>
            <strong>NUNCA DEJA DE CRECER.</strong> Personalmente,
            profesionalmente y espiritualmente. Los seres vivos crecen, la
            iglesia crece y se perfecciona.
          </span>
          <span>
            <strong>DAMOS HONOR ARRIBA, ABAJO Y A NUESTRO ALREDEDOR.</strong>
            Somos conocidos como personas de honor que dan honor libremente.
            Construimos en lugar de derribar, sumamos y multiplicamos en lugar
            de restar y dividir. Tratamos a las personas mejor de lo que
            merecen.
          </span>
          <span>
            <strong>LA IGLESIA ES DIVERTIDA.</strong> ¡Nos divierte estar cerca!
            Encontramos alegría en cada circunstancia.
          </span>
          <span>
            <strong>LO QUE HACEMOS, LO HACEMOS ATRACTIVO.</strong> Las personas
            se sienten atraídas por Jesús y deberían ser atraídas por el CAMINO
            que les presentamos, dejamos con ganas de más. Hacemos del evangelio
            un estilo de vida atractivo, siendo para todos irresistibles. Dales
            algo de que hablar.
          </span>
          <span>
            <strong>RECHAZA EL BIEN POR LA EXCELENCIA.</strong> Dios merece lo
            mejor de nosotros, incluso si toma más tiempo o requiere más
            energía. No nos conformamos con lo suficientemente bueno.
          </span>
          <span>
            <strong>LIDERA DESDE EL FRENTE.</strong> La gente te está mirando,
            muéstrales el camino. La gente no puede seguirte a un lugar al que
            tú no irás. Sé el primero en moverte.
          </span>
        </p>
      </div>
    </div>
  );
}
export function ValoresDoctrinales() {
  return (
    <div id="vd">
      <h2 className=" text-6xl md:text-7xl mb-10 ml-0 md:ml-10 text-center md:text-left ">
        Valores doctrinales de nuestra iglesia.
      </h2>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 mx-8">
        <p className="text-left flex flex-col">
          <span>
            <strong>1.</strong> Valoramos la Biblia como la Palabra de Dios que
            norma nuestra fe y conducta.
          </span>
          <br />
          <span>
            <strong>2.</strong> Valoramos la adoración como un estilo de vida y
            nuestra meta suprema.
          </span>
          <br />
          <span>
            <strong>3.</strong> Valoramos la salvación de las almas a través de
            la predicación del evangelio.
          </span>
          <br />
          <span>
            <strong>4.</strong> Valoramos el discipulado como el instrumento
            para alcanzar crecimiento y la madurez cristiana.
          </span>
        </p>
        <p className="text-left flex flex-col">
          <span>
            <strong>5.</strong> Valoramos el amor fraternal como la expresión
            auténtica de la familia de Dios que somos.
          </span>
          <br />
          <span>
            <strong>6.</strong> Valoramos el servicio cristiano como evidencia
            del amor de Dios.
          </span>
          <br />
          <span>
            <strong>7.</strong> Valoramos el sentido de pertenencia y compromiso
            como fundamento de la unidad en Cristo.
          </span>
        </p>
      </div>
    </div>
  );
}
