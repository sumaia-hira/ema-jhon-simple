import React from 'react';
import './components/Header/Header.css'
import './App.css';
import Header from './components/Header/Header';
import './components/Shop/Shop'
import Shop from './components/Shop/Shop';
import { BrowserRouter as Router,
Switch,
Route,
Link
} from "react-router-dom";
import Review from './components/Review/Review';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound';
import ProductDetail from './components/ProductDetail';





function App() {
  return (
    <div>
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/review" component={Review}>
</Route>
<Route exact path="/Shop" component={Shop}>

</Route>
<Route exact path="/" component={Shop}>

</Route>
<Route exact path="/inventory" component={Inventory}>

</Route>
<Route exact path="/product/:productKey" component={ProductDetail}></Route>
     
    
    <Route exact path="*" component={NotFound}>

</Route>
 </Switch>
</Router>
 </div>
  ); 
}

export default App;
