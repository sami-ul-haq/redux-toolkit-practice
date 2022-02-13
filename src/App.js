import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./components/Counter";
import Posts from "./components/Posts";
import Todos from "./components/Todos";
import User from "./components/User";
import Users from "./components/Users";
import Header from "./components/Header";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="posts" element={<Posts />} />
          <Route path="posts/:id" element={<Post />} />
          <Route path="todos" element={<Todos />} />
          <Route path="users" element={<Users />} />
          <Route path="counter" element={<Counter />} />
          <Route path="users/:id" element={<User />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
