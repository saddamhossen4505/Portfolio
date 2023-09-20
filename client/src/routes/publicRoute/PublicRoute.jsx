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
        path: "/",
        element: <Home />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
];
