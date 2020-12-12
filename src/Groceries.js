import React from 'react'
import {connect} from 'react-redux'

const Groceries = ({groceries}) => {
    return (
        <ul>
            {
                groceries.map((curr,idx)=>{
                    return (
                        <li key={idx}>{curr.name}</li>
                    )
                })
            }
        </ul>
    )
}

const mapStateToProps = ({groceries}) =>{
    return {
        groceries
    }
}

export default connect(mapStateToProps)(Groceries)