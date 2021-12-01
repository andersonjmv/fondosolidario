import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from '../App'
import { C2020 } from '../C2020'
import { Contact } from '../Contact'


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/contacto" component={Contact}/>
                <Route exact path="/2020" component={C2020}/>
            </Switch>
        </Router>
    )
}
