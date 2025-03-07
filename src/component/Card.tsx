import { Star } from "lucide-react";
export default function Card() {
  const data = [
    {
      image: "./public/Image1.png",
      tag: "Web",
      rating: 4.4,
      value: "(1.23k)",
      title: "Basics of Angular",
      description: "Introductory course for Angular and framework basics",
      color: "bg-violet-300",
    },
    {
      image: "./public/Image2.png",
      tag: "UI/UX",
      rating: 4.2,
      value: "(424)",
      title: "Figma & More",
      description:
        "Keyword suggestion tool provides comprehensive & keyword suggestions",
      color: "bg-red-300",
    },
    {
      image: "./public/Image3.png",
      tag: "SEO",
      rating: 5,
      value: "12",
      title: "Keyword Research",
      description: "Introductory course for Angular and framework basics",
      color: "bg-green-300",
    },
    {
      image: "./public/Image4.png",
      tag: "Music",
      rating: 3.8,
      value: "634",
      title: "Basics to Advance",
      description:
        "20 more lessons like this about music production, writing, mixing, mastering",
      color: "bg-blue-300",
    },
    {
      image: "./public/Image5.png",
      tag: "Painting",
      rating: 4.7,
      value: "34",
      title: "Art & Drawing",
      description:
        "Easy-to-follow video & guides show you how to draw animals & people.",
      color: "bg-yellow-300",
    },
    {
      image: "./public/Image6.png",
      tag: "UI/UX",
      rating: 5,
      value: "12",
      title: "Basic Fundamentals",
      description:
        "This guide will help you develop a systematic approach user interface.",
      color: "bg-violet-300",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 p-4 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col bg-white p-4 rounded-lg shadow-md"
        >
          <div className=" p-2 m-2">
            <img
              src={item.image}
              className="w-full h-48 object-cover rounded-t-lg p-2"
              alt={item.title}
            />
          </div>
          <div className="flex flex-row justify-between p-2">
            <div className={`p-2 rounded ${item.color}`}> {item.tag}</div>
            <div className="flex flex-row">
              {item.rating}
              <Star className="text-yellow-500" size={20} />
              {item.value}
            </div>
          </div>
          <div className=" p-2">
            <div className="font-semibold">{item.title}</div>
            <div>{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
