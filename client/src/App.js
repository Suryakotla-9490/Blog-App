import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./Components/common/Navbar";
import { Profile } from "./Components/Profile/Profile";
import  Loginsinup  from "./Components/Form/Loginsinup";
import { Following } from "./Components/Profile/Following";
import { Post } from "./Components/Profile/Post";
import { Followers } from "./Components/Profile/Followers";
import User from "./Components/Users/User";
import Feed from "./Components/Feed/Feed";
import Home from "./Home";
import Addtweet from "./Components/Feed/Addtweet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="" element={<Feed />} />
          <Route path="addtweet" element={<Addtweet />} />
          <Route path="profile" element={<Profile />}>
            <Route path="" element={<Post />} />
            <Route path="Followers" element={<Followers />} />
            <Route path="Following" element={<Following />} />
          </Route>
          <Route path="users" element={<User />} />
        </Route>

        <Route path="/authentication" element={<Loginsinup />} />
      </Routes>
    </div>
  );
}

export default App;
