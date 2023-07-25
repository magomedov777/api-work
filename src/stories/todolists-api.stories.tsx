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

    export const GetTasks = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
           TodolistApi.getTasks(todolistId) 
           .then((res) => {
             setState(res.data)
            })
        }, [])
        return <div>{JSON.stringify(state)}</div>
     }

     export const CreateTasks = () => {
        const [state, setState] = useState<any>(null)
        useEffect(() => {
            const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
            const title = 'hiiiiiii'
           TodolistApi.createTasks(todolistId, title) 
           .then((res) => {
             setState(res.data)
            })
        }, [])
        return <div>{JSON.stringify(state)}</div>
     }

     export const DeleteTask = () => {
        const [state, setState] = useState<any>(null)
        const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
        const taskId = '5c0ae069-2092-4dca-a5ec-46ca541522c2'
        useEffect(() => {
            TodolistApi.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            })
        }, [])
        return <div>{JSON.stringify(state)}</div>
    }

    export const UpdateTask = () => {
        const [state, setState] = useState<any>(null)
        const todolistId = '3d7829e8-cb72-4f75-8dee-ccd8cb89de76'
        const taskId = 'f314d1a5-e819-4554-be6b-6f8be021a0fc'
        const title = '!!!!!!!!! new task !!!!!!!!'
        useEffect(() => {
            TodolistApi.updateTask(todolistId, taskId, title)
            .then((res) => {
                setState(res.data)
            })
        }, [])
        return <div>{JSON.stringify(state)}</div>
    }
