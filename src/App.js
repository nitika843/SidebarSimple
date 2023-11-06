import "./App.css";
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Users from "./Page/Users";
import Messages from "./Page/Messages";
import FileManager from "./Page/FileManager";
import Analytics from "./Page/Analytics";
import Order from "./Page/Order";
import Saved from "./Page/Saved";
import Setting from "./Page/Setting";



function App() {
  return (
    <Router>
      <SideBar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/file-manager" element={<FileManager />} />
          <Route path="/order" element={<Order />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="*" element={<> not found</>} />
        </Routes>
      </SideBar>
    </Router>
  );
}

export default App;