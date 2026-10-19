import { Server } from "socket.io";

const io = new Server(3000, {
    cors: "*"
});

io.on("connection", (socket) => {
    console.log('Client đã kết nối:', socket.id);

    socket.on('disconnect', () => {
        console.log('Client đã đóng kết nối', socket.id);
    });

    socket.on('send-message', (data) => {
        console.log(data);
        // socket.emit('new-message', 'Chào client'); //Chỉ gửi cho client gửi lên
        // io.emit('new-message', 'Chào client'); //Gửi tất cả client
        socket.broadcast.emit('new-message', 'Chào client'); //Gửi cho tất cả client (Trừ thằng gửi)
    })
});