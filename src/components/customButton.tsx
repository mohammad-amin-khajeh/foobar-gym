const CustomButton = ({
  text,
  className: containerStyles,
}: { text: string; className: string }) => (
  <button
    type="button"
    className={`${containerStyles} group relative cursor-pointer overflow-hidden bg-accent font-bold`}
  >
    <span className="absolute origin-center top-1/2 rotate-45 h-0 w-64 bg-black transition-all ease-out duration-500 translate-x-1/3 group-hover:h-64 group-hover:-translate-y-32" />
    <span className="text-white relative transition-all">{text}</span>
  </button>
);

export default CustomButton;
