import { assets } from "../assets/assets";

export const Header = () => {
  return (
    <div className="container mx-auto flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-6 mt-10  sm:mt-16">
      {/* ------ Left Side ------ */}
      <div>
        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold text-neutral-700 leading-tight tracking-tight">
          Elimina el <br className="max-md:hidden" />{" "}
          <span className="bg-linear-to-r from-blue-500 to-blue-900 bg-clip-text text-transparent">
            fondo de tus imágenes
          </span>{" "}
          <br className="max-md:hidden" /> al instante y gratis
        </h1>
        <p className="my-6 text-base text-gray-500">
          Quita fondos de forma automática en segundos. Sube tu foto y deja que{" "}
          nuestra <br className="max-md:hidden" />
          inteligencia artificial haga todo el trabajo pesado por ti, con
          precisión profesional.
        </p>
        <div>
          <input type="file" id="upload1" name="" hidden />
          <label
            htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-linear-to-r from-blue-500 to-blue-800 m-auto hover:scale-105 transition-all duration-700"
          >
            <img src={assets.upload_btn_icon} alt="upload" width={20} />
            <p className="text-white text-sm">Sube tu imagen</p>
          </label>
        </div>
      </div>
      {/* ------ Right Side ------ */}
      <div className="w-full max-w-[clamp(300px,50vw,700px)] mx-auto md:mx-0">
        <img src={assets.header_img} alt="header" />
      </div>
    </div>
  );
};
