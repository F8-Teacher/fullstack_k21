import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function App() {
  const [socket, setSocket] = useState<null | Socket>(null);
  useEffect(() => {
    const connectSocket = () => {
      const socket = io("ws://localhost:3000");
      setSocket(socket);
      socket.on("connect", () => {
        console.log("Đã kết nối tới socket io server");
      });
      socket.on("disconnect", () => {
        console.log("Đã đóng kết nối socket io server");
      });
    };
    connectSocket();
  }, []);
  useEffect(() => {
    socket?.on("new-message", (data) => {
      console.log(data);
    });
  }, [socket]);
  const handleSendMessage = () => {
    socket?.emit("send-message", {
      x: 10,
      value: "Hello anh em",
    });
  };
  return (
    <div>
      <h1 className="text-3xl">Socket.IO</h1>
      <button
        className="bg-green-600 px-3 py-1 text-white"
        onClick={handleSendMessage}
      >
        Send Message
      </button>
    </div>
  );
}
