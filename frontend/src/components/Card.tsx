type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "10px",
        width: "220px",
      }}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;