export class AppRoutes {
  POST = "/";
  //    POST = "/post";
  NOT_FOUND = "/404";
  URL = "/url/:url";
  /**
   * It checks if the route is an error route.
   * @param {string} route - The route to check
   * @returns A boolean value.
   */
  static isErrorRoute(route) {
    return [this.NOT_FOUND].includes(route);
  }

  // TODO: check if the route is private
  static isPrivateRoute(route) {
    return true;
  }

  // TODO: check if the route is public
  static isPublicRoute(route) {
    return true;
  }
}
