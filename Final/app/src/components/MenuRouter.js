import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MediaCard from './Card';

import ItemsList from './ItemList';

function MenuRouter() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/tarjeta">Tarjeta</Link>
                    </li>
                    <li>
                        <Link to="/alumnos">Alumnos</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Home} />
                <Route path="/tarjeta" component={Tarjeta} />
                <Route path="/alumnos" component={Alumnos} />
            </div>
        </Router>
    );
}

function Home() {
    return (
       <h3>hola</h3>
    );
}

function Tarjeta() {
    return (
       <MediaCard />
    );
}

function Alumnos({ match }) {
    return (
        <div>
            <h2>Alumnos</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/A0955014`}>A0955014</Link>
                </li>
                <li>
                    <Link to={`${match.url}/A1118324`}>A1118324</Link>
                </li>
                <li>
                    <Link to={`${match.url}/A1329402`}>A1329402</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:matricula`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>alumnos</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.matricula}</h3>
            <MediaCard alumno={match.params.matricula}/>
        </div>
    );
}

export default MenuRouter;
