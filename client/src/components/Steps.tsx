import { stepsData } from "../assets/assets";
import { Title } from "./Title";

export const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-20 xl:py-40">
      <Title className="mb-0 sm:mb-0">
        Cómo eliminar el fondo de <br />
        tus imágenes en segundos
      </Title>
      <div className="flex items-start flex-wrap gap-8 mt-16 xl:mt-24 justify-center">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white border-gray-400 drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500 aspect-auto max-w-md"
          >
            <img src={step.icon} alt="upload" className="max-w-9" />
            <div>
              <p className="text-xl font-medium">{step.title}</p>
              <p className="text-sm text-neutral-500 mt-1">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
