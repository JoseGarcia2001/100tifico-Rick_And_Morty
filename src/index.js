import { routes } from "./routes/routes";
import Router from "./routes/Router";

const container = document.getElementById("content");

const router = new Router(routes, container);

window.addEventListener("load", router.renderRoute);
onhashchange = router.renderRoute;
