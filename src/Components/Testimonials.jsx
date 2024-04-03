import InformationList from "./InformationList";

const Testimonials = () => {
  const Information = [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus,adipiscing elit. Mauris nec ",
      imgUrl: "/images/profile-1.jpg",
      name: "Ahmed",
      skils: "Founder & CEO, Huddle",
    },
    {
      id: 2,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus,adipiscing elit. Mauris nec ",
      imgUrl: "/images/profile-2.jpg",
      name: "Mohammed",
      skils: "Software Engineer",
    },
    {
      id: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tincidunt neque. Duis nulla lectus,adipiscing elit. Mauris nec ",
      imgUrl: "/images/profile-3.jpg",
      name: "Eman",
      skils: "Graphic designer",
    },
  ];
  return (
    <section className=" pb-[300px] pt-[20px]  ">
      <div className="container m-auto p-3 relative ">
        <div className=" z-10 absolute  -top-5 -left-[2px]  ">
          <img
            src="/images/bg-quotes.png"
            alt="semicollom-img"
            className=" top-5 object-contain"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[40px] max-w-full place-items-center">
          {Information.map((item) => {
            return <InformationList key={item.id} {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
