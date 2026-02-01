import { User } from "@phosphor-icons/react";

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  console.log(icon);
  return (
    <div className="card w-md flex-none bg-orange-200 card-xl shadow-sm">
      <div className="card-body">
        {/* MOCKED Icon */}
        <div className="mb-2">
          {" "}
          <User size={40} />
        </div>
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
