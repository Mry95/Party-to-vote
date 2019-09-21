import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import ListItem from '../../components/listItem'
import './css/list-v.min.css'
import { setList,setVoteList } from '../../store/actions'
import { Drawer } from 'antd'
import {withRouter} from 'react-router-dom'

class ListV extends Component {
    state = {
        tabList: [
            '附近',
            '美食',
            '智能排序'
        ],
        flag: true,
        arr: [],
        num: 0,
        visible: false,
        placement: 'bottom'
    }
    componentDidMount() {
        let { list } = this.props;
        if(list){
            this.reduceSum(list)
        }
        
    }
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    onChange = e => {
        this.setState({
            placement: e.target.value,
        });
    };
    reduceSum(arr) {
        let num = arr.reduce((prev, next) => {
            return prev + next.hasGroup
        }, 0);
        this.setState({
            num
        })
    }
    filterArr(arr) {
        return arr.filter(item => item.hasGroup)
    }
    renderSeletArr(){
        let {list}=this.props;
       return list&&list.map((item, index) => {
            if (item.hasGroup) {
               return <ListItem
                    key={item.shopId}
                    title={item.mainCategoryName}
                    price={item.avgPrice}
                    src={item.defaultPic}
                >
                    <span onClick={this.handleClick.bind(this, index, item.shopId)}>{item.hasGroup ? "-" : "+"}</span>
                </ListItem>
            }else{
                return null
            }
        })
    }
    handleClick(ind, id) {
        let { list, setList } = this.props;
        let newArr =list&& list.map(item => {
            if (item.shopId === id) {
                item.hasGroup = item.hasGroup ? 0 : 1
            }
            return item
        })
        setList(newArr)
        this.reduceSum(newArr)

    }
    handleAdd(){
        let {list,title,time,voteList,setVoteList}=this.props;
        let arr=this.filterArr(list)
        let obj={
            title,
            time,
            chid:arr
        }
        voteList.push(obj)
        setVoteList(voteList);
        this.clearArrStatus(list)
        this.props.history.push('/add')
        
    }
    clearArrStatus(arr){
        return arr.map(item=>{
            item.hasGroup=0;
            return item
        })
    }
    handleClear(){
        let {list,setList}=this.props
        setList(this.clearArrStatus(list))
    }
    render() {
        console.log(this.props)
        let { list } = this.props;
        let { tabList, num } = this.state
        return (
            <div className="list-v">
                <Header title="选择参与投票的商户" flag={true}></Header>
                <div className="main">
                    <div className="ipt">
                        <input type="text" placeholder="输入商品用户、地点、找优惠" />
                    </div>
                    <div className="tab">
                        {
                            tabList.map(item => <div key={item}>{item}</div>)
                        }

                    </div>
                    <div className="m-list">
                        {
                            list&&list.map((item, index) => <ListItem
                                key={item.shopId}
                                title={item.mainCategoryName}
                                price={item.avgPrice}
                                src={item.defaultPic}
                            >
                                <span onClick={this.handleClick.bind(this, index, item.shopId)}>{item.hasGroup ? "-" : "+"}</span>
                            </ListItem>)
                        }
                    </div>
                </div>
                <footer>
                    <span onClick={this.showDrawer}><b>{num}</b></span>
                    <div className="button" onClick={this.handleAdd.bind(this)}>确认添加</div>
                </footer>
                <Drawer
                    title="清除全部"
                    placement={this.state.placement}
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <h3 onClick={this.handleClear.bind(this)}>清除</h3>
                    {
                        this.renderSeletArr.call(this)
                    }
                </Drawer>
            </div>
        )
    }
}
export default connect(state => {
    console.log(state)
    return {
        list: state.data.list,
        title: state.data.title,
        time: state.data.time,
        voteList:state.data.voteList
    }
}, {
    setList,
    setVoteList
})(withRouter(ListV))
