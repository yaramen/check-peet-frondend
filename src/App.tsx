import React from 'react';
import {Switch, Route} from "react-router-dom"
import {Header} from "./common/Header/Header";
import {Footer} from "./common/Footer/Footer";
import {Home} from "./components/Home";
import {Category} from "./components/Category";
import {Product} from "./components/Product";
import {Cart} from "./components/Cart";
import {NotFound} from "./components/NotFound";
import {Container} from "./styles";

function App() {
    return (
        <Container>
            <Header/>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/category/:categoryId" component={Category}/>
                <Route path="/product/:productId" component={Product}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/" component={NotFound} />
            </Switch>
            <Footer/>
        </Container>
    );
}

export default App;
