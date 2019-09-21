import React, { Component } from 'react'
import RouterView from '../router/RouterVeiw'
import routers from '../router/routers'
export default class Index extends Component {
    render() {
        return (
            <RouterView routers={routers}></RouterView>
        )
    }
}
