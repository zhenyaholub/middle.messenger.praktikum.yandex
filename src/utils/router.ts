import { resetErrors } from "../store/validationErrors/actionsCreators";
import { store } from "../store/store";
import { type BlockClassType, type RoutesType } from "../types/router";
import { Route } from "./route";

class Router {
  static __instance: Router;
  routes: Route[] = [];
  history: History = window.history;
  _currentRoute: Route | null = null;

  constructor() {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;

    Router.__instance = this;
  }

  use(pathname: RoutesType, block: BlockClassType, props: any) {
    const route = new Route(pathname, block, props);
    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (event: Event) => {
      const eventTarget = event.currentTarget as Window;
      this._onRoute(eventTarget.location.pathname);
    };

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);

    if (!route) {
      return;
    }

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;

    route.render();
  }

  go(pathname: RoutesType) {
    this.history.pushState({}, "", pathname);
    window.dispatchEvent(new Event("pathnamechanged"));
    store.dispatch(resetErrors());
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find((route) => route.match(pathname));
  }
}

export const router = new Router();
