'use client'
import React, { createContext, useState } from 'react'
export const homeContext = createContext()
function Context({children}) {
    const [favorites , setFavorites] = useState(JSON.parse(localStorage.getItem('favhouse') )|| []);
    console.log(favorites);
    localStorage.setItem('favhouse',JSON.stringify(favorites))
  return (
    <homeContext.Provider value={[favorites , setFavorites]}>
    {children}
    </homeContext.Provider>
)
}

export default Context;