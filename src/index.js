import React, { Component } from 'react';
import { render } from 'react-dom';
import store, {loadGroceries} from './store'
import {connect, Provider} from 'react-redux'
import axios from 'axios'
import Groceries from './groceries'

class _App extends Component{
    componentDidMount(){
        this.props.load()
    }
    render(){
        return (
            <div>
                <h1>Acme Groceries</h1>
                <Groceries/>
            </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return {
        ...state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        load: async()=>{
            const groceries = (await axios.get('/api/groceries')).data
            return dispatch({
                type: 'LOAD_GROCERIES',
                groceries
            })
        }
    }
}
const App = connect(mapStateToProps,mapDispatchToProps)(_App)


render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));

