import Button from "../Button/Button";
type Props = {
  h1: string;
  p: string;
  text: string;
  slider: string;
};
const Silder = ({ h1, p, text, slider }: Props) => {
  return (
    <section className="  w-full relative my-2">
      <div className={slider}></div>
      <div className="over-lay absolute  bottom-0 left-0 top-0 right-0 opacity-50"></div>
      <div className="absolute text-center left-0 right-0 top-[30%]">
        <div>
          <h1 className="text-5xl  text-white  font-bold">{h1}</h1>
        </div>
        <div>
          <p className="text-white py-5">{p}</p>
        </div>
        <div>
          <Button name={text} />
        </div>
      </div>
    </section>
  );
};

export default Silder;
