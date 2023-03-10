// styles
import './App.css';
import './fonts.css';
import './websiteLayout.css';


// pages
import HomeComponent from './Pages/HomeComponent.js';
import ToolsComponent from './Pages/ToolsComponent.js';
import ProjectComponent from './Pages/ProjectComponent.js';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeComponent />,
    },
    {
      path: "/tools",
      element: <ToolsComponent />,
    },
    {
      path: "/projects",
      element: <ProjectComponent />,
    },
  ]);

  return (
    <div className="App">
      
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

