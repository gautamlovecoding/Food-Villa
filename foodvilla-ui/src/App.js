import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Error from "./Components/Error";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import Profile from "./Components/Profile";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import LoginForm from "./Components/LogInForm";
import SignupForm from "./Components/SignUpForm";
import ForgotPasswordForm from "./Components/ForgotPassword";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import
const Instamart = lazy(() => import("./Components/Instamart"));
const About = lazy(() => import("./Components/About"));

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Gautam Kumar",
    email: "gautam1111@gmail.com",
    designation: "FrontEnd Developer",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/user/login",
        element: <LoginForm />,
      },
      {
        path: "/user/signUp",
        element: <SignupForm />,
      },
      {
        path: "/user/forgot",
        element: <ForgotPasswordForm />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense>
            <Instamart />,
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
