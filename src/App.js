import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { Provider, useSelector } from "react-redux";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchListVidoeContainer from "./components/SearchListVidoeContainer";

const ToggleContainer = () => {
  const toggleValue = useSelector((store) => store.selectContainer.toggle);
  // console.log(toggleValue);
  return (
    <div className="">
      {toggleValue ? <MainContainer /> : <SearchListVidoeContainer />}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <ToggleContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
function App() {
  return (
    <Provider store={store}>
      <div className="bg-black text-white w-full h-full">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
