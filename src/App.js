import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import Home from "./component/home/home"
import Work from "./component/work/work";
import Menu from "./component/menu/menu";
import Order from  "./component/order/order"
import Call from  "./component/call/call"
import Food from  "./component/food/food"
import Footer from "./component/footer/footer";

import "./styles/styles.scss"

function App() {
    return (
        <div>
            <Header/>
            <Hero/>
            <Home/>
            <Work/>
            <Menu/>
            <Order/>
            <Call/>
            <Food/>
            <Footer/>
        </div>
    );
}

export default App;
