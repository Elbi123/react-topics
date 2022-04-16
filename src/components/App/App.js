import AnimalCard from "../AnimalCard/AnimalCard";
import "./App.css";
import "./../AnimalCard/AnimalCard.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hello from "../Hello/Hello";
import Plant from "../Plant/Plant";
import Nav from "../Nav/Nav";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <Hello />
                    </Route>
                    <Route path="/animal">
                        <AnimalCard />
                    </Route>
                    <Route path="/plant">
                        <Plant />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
