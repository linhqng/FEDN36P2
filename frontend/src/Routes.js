import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "./components/Loading/Loading";
import AdminLayout from "./layouts/AdminLayout/components/AdminLayout";
import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import ProtectedRoute from "./routers/ProtectedRoute";
import WithLayoutRoute from "./routers/WithLayoutRoute";
import AuthRoute from "./routers/AuthRoute";

const Login = lazy(() => import("./page/Public/Login/Login"));
const Register = lazy(() => import("./page/Public/Register/Register"));
const HomePage = lazy(() => import("./page/Public/HomePage/HomePage"));

const DashboardPage = lazy(() => import("./page/Admin/Dashboard/Dashboard"));
const MovieList = lazy(() => import("./page/Admin/MovieList/MovieList"));
const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Router>
        <Switch>
          <AuthRoute exact path="/login" component={Login} />
          <AuthRoute exact path="/register" component={Register} />

          <ProtectedRoute
            exact
            path="/admin/dashboard"
            layout={AdminLayout}
            component={DashboardPage}
          />
          <ProtectedRoute
            exact
            path="/admin/movies"
            layout={AdminLayout}
            component={MovieList}
          />
          <WithLayoutRoute
            exact
            path="/"
            layout={PublicLayout}
            component={HomePage}
          />
        </Switch>
      </Router>
    </Suspense>
  );
};

export default Routes;
