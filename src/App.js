import {Component, useState} from "react";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div data-test="app">
                    <MainNavigation/>
                    <Layout>
                        <Switch>
                            <Route exact path="/">
                                <AllMeetupsPage/>
                            </Route>
                            <Route path="/newMeetUp">
                                <NewMeetupsPage/>
                            </Route>
                            <Route path="/favorites">
                                <FavoritesPage/>
                            </Route>
                        </Switch>
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

