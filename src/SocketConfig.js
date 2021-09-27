import io from "socket.io-client";

let socket = io("https://loom-server.herokuapp.com/");

export default socket;
