import React, { Component } from 'react'
import '../static/css/voteitem.css'
class VoteItem extends Component {
    render() {
        let {title,msg}=this.props
        return (
            <div className="vote-item">
                <h3>{title}</h3>
                <p>{msg}</p>
            </div>
        )
    }
}
VoteItem.defaultProps={
    title:"标题",
    msg:"创建于2018.11.16"
}
export default VoteItem
