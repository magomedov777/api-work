import React, {useEffect, useState} from 'react'
import { TodolistApi } from '../api/todolist-api'

export default {
   title: 'API'
}

export const GetTodolists = () => {
   const [state, setState] = useState<any>(null)
   useEffect(() => {
      const promise = TodolistApi.getTodolists() 
      promise.then((res) => {
        setState(res.data)
       })
   }, [])
   return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'RTK'
        const promise = TodolistApi.createTodolists(title)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'ab5c1cdd-bbee-42ab-9dc6-0d1b0f3d6067'
    useEffect(() => {
        const promise = TodolistApi.deleteTodolists(todolistId)
        promise.then((res) => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

    export const UpdateTodolist = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
           const todolistId = 'f218899d-2471-462c-a03f-5d6e6d72d2a2'
           const title = 'New List Test'
           const promise = TodolistApi.updateTodolists(todolistId, title)
           promise.then((res) => {
            setState(res.data)
           })
        }, []) 
        return <div>{JSON.stringify(state)}</div>
    }
