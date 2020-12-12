import {createStore} from 'redux'
const LOAD_GROCERIES = 'LOAD_GROCERIES'

const store = createStore((state = {groceries: []}, action)=>{
   if(action.type === 'LOAD_GROCERIES'){
        return state = {...state, groceries: action.groceries}
    }else{
        return state
    }
})


const loadGroceries = (groceries)=>{
    return {
        type: LOAD_GROCERIES,
        groceries
    }
}

export default store
export {loadGroceries}