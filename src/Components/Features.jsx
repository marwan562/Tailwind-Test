import FeaturesBox from "./FeaturesBox";

const Features = () => {
  const items = [
    {
      icon: "icon-access-anywhere.svg",
      title: "Access your file, anywhere",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ne tincidunt neque.",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real Time collaboration ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ne tincidunt neque.",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ne tincidunt neque.",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ne tincidunt neque.",
    },
  ];
  return (
    <section className=" my-[40px]">
      <div className=" container">
        <div className=" grid grid-cols-1 gap-[100px] w-[865px] m-auto md:grid-cols-2 max-w-full">
          {items.map((item) => {
            return <FeaturesBox key={item.title} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
