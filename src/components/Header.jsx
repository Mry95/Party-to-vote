import React, { Component } from 'react'
import '../static/css/header.css'
import {withRouter} from 'react-router-dom'
class Header extends Component {
    render() {
        let {title,flag}=this.props;
        return (
            <header>
                {
                  flag?<span onClick={()=>{this.props.history.go(-1)}} >back</span> :null
                }
                <span className="title">{title}</span>
            </header>
        )
    }
}
Header.defaultProps={
    title:"标题",
    flag:false
}
export default withRouter(Header)

