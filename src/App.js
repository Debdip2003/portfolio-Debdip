import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes"

function App() {
  return (
    <div className="w-screen h-screen bg-black">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
