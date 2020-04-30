import "./styles.css";

import io from "socket.io-client";

const sockets = [
  io("wss://push.aws.kambicdn.com", {
    forceNew: true,
    transports: ["websocket"]
  }),
  io("wss://push.aws.kambicdn.com", {
    forceNew: true,
    transports: ["websocket"]
  })
];

sockets.map(socket => {
  socket.on("connect", () => {
    console.log("connect", socket.id); // true
    socket.emit("subscribe", { topic: "v2018.ubse.ev.json" });
    socket.emit("subscribe", { topic: "v2018.ubse.sv.ev.json" });
    socket.emit("subscribe", { topic: "v2018.ubse.ev.1006325528.json" });
    socket.emit("subscribe", { topic: "v2018.ubse.sv.ev.1006325528.json" });
  });

  socket.on("message", msg => {
    console.log("message on socket", socket.id, msg); // true
  });

  return socket;
});

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
