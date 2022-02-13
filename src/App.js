
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { getUser, login } from "./api/user-service";
import Footer from "./components/common/Footer";
import MenuBar from "./components/common/MenuBar";
import TopBar from "./components/common/TopBar";
import CustomRoutes from "./router/CustomRoutes";
import { loginSuccess } from "./store/user/userActions";
import {useStore} from "./store";


const App = () => {

  const {dispatchUser} = useStore();

const loadData = async () => {
  
  try {

    const respUser = await getUser();
    if(respUser.status !== 200 )throw ("An error occurred while loading");
    
    dispatchUser(loginSuccess (respUser.data));
  } catch (error) {
    console.log(error);
  }
}



useEffect(() => {

  loadData();
},[])




  return (
    <BrowserRouter>
      <TopBar />
      <MenuBar />
      <CustomRoutes/>
     
      <Footer />
      <ToastContainer/>
    </BrowserRouter>
  );
};

export default App;