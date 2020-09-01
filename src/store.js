import {createStore, combineReducers} from 'redux'
import inputReduser from './redusers/inputReduser'
import mainReduser from './redusers/mainReduser'

const store = createStore(combineReducers({
    input:inputReduser,
    main:mainReduser
}))

export default store