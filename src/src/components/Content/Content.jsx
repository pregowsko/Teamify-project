import React from "react";
import bemCssModule from 'bem-css-modules';
import {Redirect, Route, Switch} from 'react-router-dom';
import { default as ContentStyles } from './Content.module.scss';
import { useContext } from "react/cjs/react.production.min";
import { StoreContext } from "../../store/StoreProvider";
import Courses from "../Courses/Courses";
import UserCourses from "../UserCourses/UserCourses";
import AdminPanel from "../AdminPanel/AdminPanel";

const style = bemCssModule(ContentStyles);

const ADMIN_TYPE = 1;

const Content = () => {
    const {user} = useContext(StoreContext);

    const isUserLogged = Boolean(user);
    const isAdmin = user?.accessLevel === 1;
    return (
        <main className={style()}>
            <Switch>
                <Route exact path="/" render={() => <Courses />} />
                { isUserLogged && <Route exact path="/my-courses" render={() => <UserCourses />} />}
                { isAdminLogged && <Route exact path="/manage-courses" render={() => <AdminPanel />} />}
                <Redirect to="/" />
            </Switch>
        </main>
    );
};

export default Content;