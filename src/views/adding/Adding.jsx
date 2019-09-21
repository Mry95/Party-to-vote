import React, { Component } from 'react'
import Header from '../../components/Header'
import ListItem from '../../components/listItem'
import './css/adding.min.css'
import '../../static/css/dl.min.css'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import { SET_TITLE,SET_TIME } from '../../store/types'
class Adding extends Component {
    handleChange(e){
        this.props.setTitle(e.target.value);
        let time=new Date().toString()
        this.props.setTime(time)
    }
    render() {
        return (
            <div className="adding">
                <Header title="聚餐投票" flag={true}></Header>
                <div className="main">
                    <div className="m-header">
                        <div className="label">主题：<input className="input" onChange={this.handleChange.bind(this)} type="text" placeholder="请创建主题"/></div>
                    </div>
                    <div className="button" onClick={()=>{this.props.history.push('/listV')}}>添加喜欢的餐厅</div>
                    <div className="list">
                        <ListItem></ListItem>
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(null,dispatch=>({
    setTitle:(title)=>{
        dispatch({
            type:SET_TITLE,
            title
        })
    },
    setTime:(time)=>{
        dispatch({
            type:SET_TIME,
            time
        })
    }
}))(withRouter(Adding))
