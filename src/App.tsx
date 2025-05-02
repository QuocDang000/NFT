import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Loading from "./components/loading/Loading";

import { Layout } from "./layout";

import ErrorBoundary from "./page/errorPage/ErrorBoundary";
import { RouterErrorBoundary } from "./page/errorPage/RouterErrorBoundary ";
import { HomePage } from "./page/homePage/HomePage";

import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <RouterErrorBoundary />,
    children: [
      {
        path: "",
        element: <HomePage />,
        errorElement: <RouterErrorBoundary />,
      },
    ],
  },
]);

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
