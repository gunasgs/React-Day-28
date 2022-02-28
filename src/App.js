
import "./App.css";
import Dashboard from "./dashboard";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Userlist from "./Userlist";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserCreate from "./UserCreate";
import UserView from "./UserView";
import UserEdit from "./UserEdit";
function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div class="container-fluid">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/userlist" element={<Userlist />} /> 
                <Route path="/UserCreate" element={<UserCreate />} />
                <Route path="/UserView/:id" element={<UserView />} />
                <Route path="/UserEdit/:id" element={<UserEdit />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
