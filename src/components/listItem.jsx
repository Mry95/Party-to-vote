import React, { Component } from 'react'
import '../static/css/dl.min.css'
class ListItem extends Component {
    render() {
        let { src, title, price, type } = this.props
        return (
            <dl>
                <dt><img src={src} alt="" /></dt>
                <dd>
                    <h3>
                        {title}
                    </h3>
                    <p>
                        ￥{price}\人
                    </p>
                    <p>
                        {type}
                    </p>
                    {this.props.children}
                </dd>
            </dl>
        )
    }
}
ListItem.defaultProps = {
    src:"/1.gif", 
    title:"扎心了", 
    price:63, 
    type:"私房菜"
}
export default ListItem