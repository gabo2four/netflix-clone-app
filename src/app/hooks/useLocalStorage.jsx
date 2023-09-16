import React, { useEffect, useState } from 'react'

export function useLocalStorage(key,initialState) {
  const [state,setState] = useState(initialState)

  useEffect(()=>{
    const item = localStorage.getItem(key)
    const data = JSON.parse(item)
    if(data){
        setState(data)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem(key,JSON.stringify(state))
  },[state])
  return [state,setState]
}