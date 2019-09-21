import React, { Component } from 'react'
import Header from '../../components/Header'
import VoteItem from '../../components/voteItem'
import "./css/add.css"
import {connect} from 'react-redux'
class Add extends Component {
    render() {
        let {voteList}=this.props
        return (
            <div className="wrap">
                <Header title="聚餐投票" flag={false}></Header>
                <main>
                    <div className="button" onClick={()=>{this.props.history.push('/adding')}}>创建投票</div>
                    <div className="my-vote">
                        <h4>我创建的投票</h4>
                        {
                            voteList.map((item,index)=><VoteItem title={item.title} msg={item.time} key={index }></VoteItem>)
                        }
                    </div>
                </main>
            </div>
        )
    }
}
export default connect(state=>({voteList:state.data.voteList}))(Add)
