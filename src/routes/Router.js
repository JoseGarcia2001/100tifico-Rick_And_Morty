import Error404 from "../pages/Error404";

class Router {
  constructor(routes, app) {
    this.routes = routes;
    this.app = app;
    this.renderRoute = this.renderRoute.bind(this);
  }

  _getRoute() {
    const route = window.location.hash.slice(2);
    return route || "/";
  }

  _matchRoute() {
    let searchedRoute = this._getRoute();

    if (searchedRoute.length <= 3) {
      searchedRoute = searchedRoute === "/" ? searchedRoute : "/:id";
    }
    const matchedRoute = this.routes.find(
      (route) => searchedRoute === route.path
    );

    return matchedRoute || { template: Error404 };
  }

  async renderRoute() {
    const routeToRender = this._matchRoute();

    this.app.innerHTML = await routeToRender.template();
  }
}

export default Router;
