import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  const handleSendContact = () => {
    //Logic
    //Navigate về home
    navigate("/", {
      replace: true,
    });
    // window.location.href = "/";
  };
  return (
    <div>
      <h1 className="text-3xl">Contact</h1>
      <button
        className="bg-green-600 dark:bg-[#333] px-3 py-1 dark:border dark:border-white text-white"
        onClick={handleSendContact}
      >
        Send contact
      </button>
    </div>
  );
}
