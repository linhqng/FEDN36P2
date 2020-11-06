import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import AdminLayout from "./layouts/AdminLayout/AdminLayout";

import ProtectedRoute from "./routers/ProtectedRoute";

const Login = lazy(() => import("./page/Public/Login/Login"));
const Register = lazy(() => import("./page/Public/Register/Register"));

const DashboardPage = lazy(() => import("./page/Admin/Dashboard/Dashboard"));
const MovieList = lazy(() => import("./page/Admin/MovieList/MovieList"));
const CinemaList = lazy(() => import("./page/Admin/CinemaList/CinemaList"));
const ShowtimeList = lazy(()=> import("./page/Admin/ShowtimeList/ShowtimeList"))
const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />

          <ProtectedRoute
            exact
            path="/admin/dashboard"
            layout={AdminLayout}
            component={DashboardPage}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/movies"
            layout={AdminLayout}
            component={MovieList}
          />
          <ProtectedRoute
            exact
            path="/admin/cinemas"
            layout={AdminLayout}
            component={CinemaList}
          ></ProtectedRoute>
          <ProtectedRoute
            exact
            path="/admin/showtimes"
            layout={AdminLayout}
            component={ShowtimeList}
          ></ProtectedRoute>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
