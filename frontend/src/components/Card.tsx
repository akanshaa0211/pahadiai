type CardProps = {
  title: string;
};

function Card({ title }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "150px",
      }}
    >
      {title}
    </div>
  );
}

export default Card;
