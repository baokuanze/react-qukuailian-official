import {Link,Route, Redirect,Switch,HashRouter as Router} from 'react-router-dom'
import React from 'react';
import Home from '../page/home/App'
class RouterContaner extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Router>
                <div className='router'>
                    <Switch>
                        <Route exact path="/" render={
                            ()=>{ return <Redirect to="/home" />}
                        }>
                        </Route>
                        <Route path='/home' component = {Home}/>
                    </Switch>
                </div> 
            </Router>
        )
    }
}
export default RouterContaner