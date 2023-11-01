"use client";

const testimonials = [
  {
    name: "Jane",
    avatar: "J",
    title: "Accountant",
    description: "This is the best application I've ever used!",
  },
  {
    name: "Cipto",
    avatar: "C",
    title: "Fullstack Developer",
    description: "I use this daily for asking anything!",
  },
  {
    name: "Mark",
    avatar: "M",
    title: "CEO",
    description:
      "This app has changed my life, cannot imagine working without it!",
  },
  {
    name: "Mary",
    avatar: "M",
    title: "CFO",
    description:
      "The best in class, definitely worth the premium subscription!",
  },
];

const HomePageContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <div
            key={item.description}
            className="card bg-[#192339] border-none text-white flex flex-row items-center justify-between hover:shadow-md transition"
          >
            <div className="card-body flex flex-col space-y-4">
              <div className="card-title flex flex-col items-start">
                <p className="text-lg leading-none">{item.name}</p>
                <p className="text-zinc-400 text-sm leading-none">
                  {item.title}
                </p>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePageContent;
