import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TicketName from "./TicketName/TicketName";
import Sidebar from "./Sidebar";
import WorkPackpage from "./WorkPackpage/WorkPackpage";
import UserManagement from "./UserManagement/UserManagement";

const router = createBrowserRouter([
  {
    path: "/project/ticket-name",
    element: <TicketName/>
  },
   {
    path: "/",
    element: <UserManagement/>
  },
  {
    path: "/work-packpage",
    element: <WorkPackpage/>
  }
]);
function App() {

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
