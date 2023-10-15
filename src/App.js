// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Topbar from "./components/topbar/Topbar";
// import Single from "./pages/single/Single";
// import Write from "./pages/write/Write";
// import Setting from "./pages/settings/Settings";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";

// function App() {
//   return (
//     <Router>
//       <Topbar />
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/single">Single</Link>
//           </li>
//           <li>
//             <Link to="/write">Write</Link>
//           </li>
//           <li>
//             <Link to="/setting">Setting</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//         </ul>

//         <hr />

//         <Route exact path="/" component={Home} />
//         <Route path="/single" component={Single} />
//         <Route path="/write" component={Write} />
//         <Route path="/setting" component={Setting} />
//         <Route path="/login" component={Login} />
//         <Route path="/register" component={Register} />
//       </div>
//     </Router>
//   );
// }

// export default App;


import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
  const user = true
  return (
    <Router>
       <Topbar/>
       <Routes>
       <Route exact path="/" element={user?<Home/>:<Register/>}/>
      <Route exact path ='/login' element={user ? <Home/>:<Login/>}/>
      <Route exact path ='/register' element={<Register/>}/>
      <Route exact path ='/write' element={user ? <Write/> : <Register/>}/>
      <Route exact path ='/post/:postId' element={<Single/>}/>
      <Route exact path ='/setting' element={user ? <Setting/> : <Register/>}/>
     </Routes>

    </Router>
 
  );
}

export default App;
