import { Input } from "@/components/ui/input";
import { House } from "lucide-react";
export default function Home() {
  return (
    <div>
      <House color="red" size={32} />
      <h1 className="text-3xl">Home</h1>
      <Input placeholder="Nhập gì đó..." />
      {/* <Button
        variant={"outline"}
        className={cn(
          "hover:bg-amber-700 hover:text-white cursor-pointer",
          active && "bg-amber-700 text-white",
        )}
      >
        Click me
      </Button> */}
    </div>
  );
}
