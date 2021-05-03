import Character from "../components/Character";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    template: Home,
  },
  {
    path: "/:id",
    template: Character,
  },
];
