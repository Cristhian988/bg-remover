import { testimonialsData } from "../assets/assets";
import { Title } from "./Title";

export const Testimonials = () => {
  return (
    <div>
      {/* Title */}
      <Title className="mb-6 sm:my-12">
        Testimonios de usuarios que <br /> confían en nosotros
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-8">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto hover:scale-105 transition-all duration-700"
          >
            <p className="text-4xl text-gray-500">❛❛</p>
            <p className="text-sm text-gray-500">{item.text}</p>
            <div className="flex items-center gap-3 mt-5">
              <img src={item.image} alt="" className="w-9 rounded-full" />
              <div>
                <p>{item.author}</p>
                <p className="text-sm text-gray-600">{item.jobTitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
