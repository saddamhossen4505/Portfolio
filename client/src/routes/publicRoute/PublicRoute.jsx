import Layout from "../../layout/Layout";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Home from "../../pages/home/Home";
import Portfolio from "../../pages/portfolio/Portfolio";

// Create public route.
export const publicRoute = [
  {
    element: <Layout />,
    children: [
      {
        path: "https://developer-saddam.onrender.com/",
        element: <Home />,
      },

      {
        path: "https://developer-saddam.onrender.com/contact",
        element: <Contact />,
      },

      {
        path: "https://developer-saddam.onrender.com/about",
        element: <About />,
      },

      {
        path: "https://developer-saddam.onrender.com/portfolio",
        element: <Portfolio />,
      },
    ],
  },
];
