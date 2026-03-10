import Card from "../../components/Card";

const cards = [
  {
    icon: "user",
    title: "About Me",
    description: "This is the description this is the description this is the description",
  },
  {
    icon: "experience",
    title: "Experience",
    description: "This is the description this is the description this is the description",
  },
  {
    icon: "projects",
    title: "Projects",
    description: "This is the description this is the description this is the description",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-30 px-[15%] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
