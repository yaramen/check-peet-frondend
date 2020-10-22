import React from 'react';
import {Switch, Route} from "react-router-dom"
import {Header} from "./common/Header";
import {Footer} from "./common/Footer";
import {Home} from "./components/Home";
import {Category} from "./components/Category";
import {Product} from "./components/Product";
import {Cart} from "./components/Cart";
import {NotFound} from "./components/NotFound";
import {Container, FullPage, MainGrow} from "./styles";

function App() {
    return (
        <Container>
            <FullPage>
                <Header/>
                <MainGrow>
                    <Switch>
                        <Route path="/" component={Home} exact/>
                        <Route path="/category/:categoryId" component={Category}/>
                        <Route path="/product/:productId" component={Product}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/" component={NotFound}/>
                    </Switch>
                </MainGrow>
                <Footer/>
            </FullPage>
        </Container>
    );
}

export default App;
