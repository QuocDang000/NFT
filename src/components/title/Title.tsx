import "./title.scss";

export const Title = ({ text }: { text: string }) => {
  return <h2 className="title">{text}</h2>;
};
