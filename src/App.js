import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Holidays from "./pages/holiday/Holidays";
import Leauge from "./pages/leuges/Leauge";
import HolidayEdit from "./pages/holiday/HolidayEdit";
import Addholiday from "./pages/holiday/Addholiday";
import LeaugeEdit from "./pages/leuges/LeaugeEdit";
import Addleauge from "./pages/leuges/Addleauge";
//import Login from "./pages/Login"

function App() {
  return (
   <>
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route exact path='/holiday' component={Holidays}/> 
          <Route  path='/holiday/:id' component={HolidayEdit} />
          <Route exact path='/leauge' >
            <Leauge/>
          </Route>
          <Route  path='/addholiday' component={Addholiday} />
          <Route path ="/leaugeEdit" component ={LeaugeEdit}/>
          <Route path="/addleauge" component={Addleauge}/>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
