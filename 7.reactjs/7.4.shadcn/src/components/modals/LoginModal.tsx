import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import type { SubmitEvent } from "react";
import { useAuthStore } from "@/store/useAuthStore";
import { toast } from "sonner";
type LoginModalProps = {
  open: boolean;
  onClose?: () => void;
};
export default function LoginModal({ open, onClose }: LoginModalProps) {
  const { setAuth } = useAuthStore();
  const requestLogin = () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // resolve(true);
        reject(new Error());
      }, 2000);
    });
  const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Logic
    setAuth();
    onClose?.();
    // const id = toast.loading("Đang login...");
    // try {
    //   await requestLogin();
    //   toast.success("Login thành công");
    // } catch {
    //   toast.error("Login thất bại");
    // } finally {
    //   toast.dismiss(id);
    // }
    toast.promise(requestLogin, {
      loading: "Đang login...",
      success: "Login thành công",
      error: "Login thất bại",
    });
  };
  return (
    <Dialog
      open={open}
      onOpenChange={(status: boolean) => {
        if (!status) {
          onClose?.();
        }
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-semibold text-xl">Login</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <Label className="mb-2">Email</Label>
            <Input placeholder="Email..." />
          </div>
          <div className="mb-3">
            <Label className="mb-2">Password</Label>
            <Input type="password" placeholder="Password..." />
          </div>
          <div className="flex gap-3">
            <Button>Login</Button>
            <Button type="button" variant={"destructive"} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
      <DialogOverlay className="bg-black/70" />
    </Dialog>
  );
}
