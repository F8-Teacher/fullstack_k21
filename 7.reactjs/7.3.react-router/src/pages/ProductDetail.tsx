import { Navigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { slug } = useParams();
  const isNotFound = true;
  if (isNotFound) {
    //Không tìm thấy
    return <Navigate to={"/404"} />;
  }
  return (
    <div>
      <h1 className="text-3xl">ProductDetail: {slug}</h1>
    </div>
  );
}

//slug

//A -> Navigate -> B
//Replace: A -> B

//Navigate ở phạm vi logic (Nằm trong 1 hàm)
