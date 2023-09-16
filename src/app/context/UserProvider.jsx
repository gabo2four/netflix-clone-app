'use client'
import React, { useState } from 'react'
import { createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
export const UserContext = createContext()

function UserProvider({children}) {
  const [profiles,setProfiles] = useLocalStorage('profiles',[])
  const [currentProfile,setCurrentProfile] = useLocalStorage('currentProfile',{})


  const [currentMovie,setCurrentMovie] = useState({})
  const [movieCurrentCount,setMovieCurrentCount] = useState(0)
  const [movies,setMovies] = useState([])
  const [contro,setContro] = useState(true)


  const [movieModal,setMovieModal] = useState({})

  const [currentWatchMovie,setCurrentWatchMovie] = useState({})

  return <UserContext.Provider value={{
    profiles,setProfiles,
    currentProfile,setCurrentProfile,
    currentMovie,setCurrentMovie,
    movieCurrentCount,setMovieCurrentCount,
    movies,setMovies,
    contro,setContro,
    movieModal,setMovieModal,
    currentWatchMovie,setCurrentWatchMovie
  }}>{children}</UserContext.Provider>
    
}

export default UserProvider