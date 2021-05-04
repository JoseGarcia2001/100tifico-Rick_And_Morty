import { routes } from "./routes/routes";
import Router from "./routes/Router";
import "./styles/styles.css";

const container = document.getElementById("content");

const router = new Router(routes, container);

window.addEventListener("load", router.renderRoute);
window.addEventListener("hashchange", router.renderRoute);
