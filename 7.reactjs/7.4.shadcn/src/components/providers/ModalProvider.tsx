import { useLoginStore } from "@/store/useLoginStore";
import LoginModal from "../modals/LoginModal";

export default function ModalProvider() {
  const { open, setClose } = useLoginStore();
  return (
    <>
      <LoginModal open={open} onClose={setClose} />
    </>
  );
}
