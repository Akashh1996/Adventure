import React from "react"
import Main from "../Home/Main/Main"
import Footer from "../Home/Footer/Footer"
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Help from "../../Help"
import Contact from "../../Contact"

function Adventure() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route path="/Help" component={Help} />
                    <Route path="/Contact" exact component={Contact} />
                    <Route path="/" exact component={Main} />
                </Switch>
                <Footer />

            </BrowserRouter>
        </>
    )
}

export default Adventure