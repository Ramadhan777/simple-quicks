import {combineReducers} from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import task from './task'

const taskConfig = {
    key: 'task',
    storage
}

const reducer = combineReducers({
    task: persistReducer(taskConfig, task)
})

export default reducer