export default function Footer() {
  const copyrightSymbol = "\u00A9";
  return (
    <div className="flex flex-row shadow-md p-1 bg-white">
      <div className="flex justify-start ">
        <p className="p-1 m-1">{copyrightSymbol} 2024, card91</p>
      </div>
      <div className="flex flex-grow justify-end ">
        <a href="#" className=" p-1 m-1">
          License
        </a>
        <a href="#" className=" p-1 m-1">
          Documentation
        </a>
        <a href="#" className=" p-1 m-1">
          Support
        </a>
      </div>
    </div>
  );
}
