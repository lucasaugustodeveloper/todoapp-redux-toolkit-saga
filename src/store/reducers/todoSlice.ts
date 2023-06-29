import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '..';

export type TodoProps = {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

const initialState: TodoProps[] = []

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<TodoProps>) => {
      const { payload } = action;
      const data = { ...payload, done: false }

      state.push(data)
    },
    done: (state, action: PayloadAction<TodoProps>) => {
      const { payload } = action

      const data = state.map(item => {
        if (item.id === payload.id) {
          return { ...item, done: true }
        }

        return item
      })

      return state = data
    },
    remove: (state, action: PayloadAction<string>) => {
      const id = action.payload
    
      const newState = state.filter(item => item.id !== id)

      return state = newState
    }
  }
})

export const { increment, done, remove } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo

export default todoSlice.reducer
