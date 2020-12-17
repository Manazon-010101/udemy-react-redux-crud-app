import {combineReducers} from 'redux'
// ↓reducerと言う名称が一般的すぎるので別名にしてあげる
import { reducer as form } from 'redux-form'
import events from './events'

export default combineReducers({ events, form })
