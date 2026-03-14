import { User } from "@phosphor-icons/react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div
      className="
      group
      relative
      rounded-2xl
      p-px
      bg-linear-to-b
      from-orange-200/40
      to-transparent
      transition
      duration-300
      hover:-translate-y-2
    "
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-orange-200/40"></div>

      {/* Card */}
      <div
        className="
        relative
        h-full
        rounded-2xl
        bg-white/70
        backdrop-blur-md
        border
        border-gray-200
        p-8
        shadow-sm
        transition
        duration-300
        group-hover:shadow-2xl
      "
      >
        {/* Icon */}
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500 transition-all duration-300 group-hover:scale-110">
          <User size={28} weight="bold" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-3">{title}</h2>

        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default Card;
