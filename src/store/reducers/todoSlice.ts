import { createSlice } from '@reduxjs/toolkit'
import { ulid } from 'ulid'

import { RootState } from '..';

export type TodoProps = {
  id: string,
  title: string,
  description: string,
  done: boolean,
}

const initialState: TodoProps[] = [
  {
    id: ulid(),
    title: 'Learn English',
    description: 'search audio, podcasts and books in english',
    done: true,
  },
  {
    id: ulid(),
    title: 'Learn DevOps',
    description: 'search articles for dev ops',
    done: false,
  },
  {
    id: ulid(),
    title: 'Learn AWS',
    description: 'search articles and courses for AWS',
    done: false,
  },
  {
    id: ulid(),
    title: 'Learn GO',
    description: 'search articles, courses for go',
    done: false,
  },
]

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    increment: state => {
      console.log('add todo:', state)
      return state
    },
    done: state => {
      console.log('done todo:', state)
      return state
    },
  }
})

export const { increment, done } = todoSlice.actions
export const selectTodo = (state: RootState) => state.todo

export default todoSlice.reducer
