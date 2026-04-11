import { io } from "socket.io-client";

function socket_Connect() {
    let login = window.localStorage.getItem("login");
    login = JSON.parse(login);
    const socket = io("https://localhost:443", {
        extraHeaders: {
            "access_token": login.token_Temp,
            "user_id": login.account_id
        }
    });
    return socket;
}

export { socket_Connect as default };