// Esta será un array de rutas, donde se ingresarán las rutas
// Junto con el contenido que se quiera desplegar cuando la ruta
// haga Match

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
