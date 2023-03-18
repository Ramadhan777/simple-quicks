import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    list : []
}

const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTaskList: (state, action) => {
            state.list = action.payload
        }
    }
})

export const {addTaskList} = taskReducer.actions

export default taskReducer.reducer