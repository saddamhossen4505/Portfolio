import { createBrowserRouter } from "react-router-dom";
import { publicRoute } from "./publicRoute/PublicRoute";

// Create BrowserRouter.
export const router = createBrowserRouter([...publicRoute]);
