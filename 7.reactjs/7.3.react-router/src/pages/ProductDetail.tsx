import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  return (
    <div>
      <h1 className="text-3xl">ProductDetail: {slug}</h1>
    </div>
  );
}

//slug
