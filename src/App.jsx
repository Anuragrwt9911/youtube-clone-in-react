import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        <Body />
      </div>
    </Provider>
  );
};
/**
 * head
 * body
 *    sideBar
 *        Menu Items
 * Main container
 *    buttonList
 *    Video container
 *      video card
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
