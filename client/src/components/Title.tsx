interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className = "" }: TitleProps) => {
  const baseClasses =
    "text-[clamp(1.5rem,5vw,2.25rem)] text-center mt-4 font-semibold bg-linear-to-r from-gray-900 to-gray-400 bg-clip-text text-transparent";

  const marginClasses = className.includes("mb-") ? "" : "mb-12 sm:mb-20";

  return (
    <h2 className={`${baseClasses} ${marginClasses} ${className}`}>
      {children}
    </h2>
  );
};
