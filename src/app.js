import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, NavLink, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/style.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is dashbord component.
    </div>
);

const AddExpensePage = () => (
    <div>
        This is add expense component.
    </div>
);

const EditExpensePage = () => (
    <div>
        This is edit expense component
    </div>
);

const HelpPage = () => (
    <div>
        This is help page component
    </div>
);

const Header = () => (
    <header>
        <h1> Expensify </h1>
        <NavLink to="/" activeClassName="is-active" exact={true}> Home </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active"> Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active"> Help </NavLink>
        
    </header>
)
const NotFoundPage = () => (
    <div>
        Error 404 - <Link to="/">Go Home</Link>
    </div>
);

const routes = (
    <BrowserRouter>
        <div>
            <Header />        
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>   
        </div>    
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));