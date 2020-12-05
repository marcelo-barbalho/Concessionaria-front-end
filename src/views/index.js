import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Login, List, Branches, Layout, CarList } from "./main/components";
import Home from "./main"
import AdminPage from "./admin";
import {isAuthenticated} from '../config/auth'


const Pages = [
  {
    name: 'Login',
    path: 'login',
    component:Login
  },
  {
    name: 'List',
    path: 'list',
    component:List
  },
  {
    name: 'Branches',
    path: 'branches',
    component:Branches
  },
  {
    name: 'CarList',
    path: 'carList',
    component:CarList
  },
  {
    name: 'Home',
    path: '',
    component:Home
  }
]

const AdminRoute = ({...rest}) => {
  if(!isAuthenticated()) {
    return <Redirect to='login'/> 
  }
  return <Route {...rest} />
}

export default (props) => {
  return (
    <>
      <Layout>
        <Route
          exact
          baseName={props.match.path}
          path={props.match.path + "admin"}
          component={AdminPage}
        />
      {Pages.map((item, i) =>(
        <Route key={i} exact baseName={props.match.path} path={props.match.path + item.path} component={item.component}/>
        ))}
        
      </Layout>
    </>
  );
};
