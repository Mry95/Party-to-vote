import React, { Component } from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
export default class RouterVeiw extends Component {
    render() {
        let {routers}=this.props
        let RouterArr=routers.filter(item=>item.component)
        let RedirectArr=routers.filter(item=>!item.component)
        return (
            <Switch>
                {
                    RouterArr.map(item=><Route key={item.path} path={item.path} render={(props)=><item.component {...props} routers={item.children}/>}/>)
                }
                {
                    RedirectArr.map(item=><Redirect key={item.path} path={item.path} to={item.redirect}/>)
                }
            </Switch>
        )
    }
}
