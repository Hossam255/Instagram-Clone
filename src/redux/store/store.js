import {createStore} from 'redux'
import { logoReducer } from '../reducer/reducer'

export const store = createStore(logoReducer)