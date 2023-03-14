import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router";
import { ConfigRoutes } from "./routes/configRoute";
function App() {
  const convertRoutes = ConfigRoutes.map((route) => {
    const { layout, element: elementRoute } = route;
    const element = elementRoute;
    if (layout) {
      const Layout = layout;
      element = <Layout>{element}</Layout>;
    }
    return {
      ...route,
      element,
    };
  });
  const element = useRoutes(convertRoutes);
  return <div className="app">{element}</div>;
}

export default App;
