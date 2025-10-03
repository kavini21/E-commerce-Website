import { BrowserRouter, Route ,Routes} from "react-router";
import Register from "../pages/Auth/Register/Register";
import Navbar from "../components/Navbar/Navbar";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Error from "../pages/Error/Error";
import AuthCheck from "../AuthCheck/AuthCheck";

const MainLayout = () => {
  return (
    <BrowserRouter>
    {/*navbar */}
    <Navbar/>
    <Routes>
        <Route path= "/" element= {
          <AuthCheck>

            <Home/>
          </AuthCheck>
          
          
          }/>
        <Route path= "auth" element = {<Auth/>}>
          <Route path="login" element = {<Login/>}/>
          <Route path ="register" element={<Register/>}/>

        </Route>
        {/* not found routes */}
        <Route path = "*" element ={<Error/>} />

    </Routes>

    </BrowserRouter>
  );
};

export default MainLayout;