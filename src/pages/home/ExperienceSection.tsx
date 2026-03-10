import Card from "../../components/Card";

const cards = [
  {
    icon: "user",
    title: "About Me",
    description: "this is the description this is the description this is the description",
  },
  {
    icon: "user",
    title: "Experience",
    description: "this is the description this is the description this is the description",
  },
  {
    icon: "user",
    title: "Projects",
    description: "this is the description this is the description this is the description",
  },
  {
    icon: "user",
    title: "Education",
    description: "this is the description this is the description this is the description",
  },
  {
    icon: "user",
    title: "Skills",
    description: "this is the description this is the description this is the description",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-30 px-[15%] bg-white">
      <div className="flex gap-6 overflow-x-auto">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
