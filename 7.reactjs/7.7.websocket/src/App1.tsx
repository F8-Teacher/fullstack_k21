import { useEffect, useState } from "react";

export default function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  useEffect(() => {
    const initConnectWebsocket = () => {
      const ws = new WebSocket("ws://localhost:3000");
      setSocket(ws);
      ws.addEventListener("open", () => {
        console.log("Kết nối websocket thành công");
      });
      ws.addEventListener("close", () => {
        console.log("Đóng kết nối websocket");
      });
      ws.addEventListener("message", ({ data }) => {
        const { type, value } = JSON.parse(data);
        if (type === "new-message") {
          console.log(value);
        }
      });
    };
    initConnectWebsocket();
  }, []);
  const handleSendMessage = () => {
    socket?.send(
      JSON.stringify({
        type: "send-message",
        value: "Hello anh em",
      }),
    );
  };
  return (
    <div>
      <h1 className="text-3xl">Demo Websocket</h1>
      <button
        className="bg-green-600 px-3 py-1 text-white"
        onClick={handleSendMessage}
      >
        Send Message
      </button>
    </div>
  );
}
