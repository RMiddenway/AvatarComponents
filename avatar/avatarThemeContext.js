
import React, { useContext } from 'react'
import { colours } from './avatarTheme'

export const ThemeContext = React.createContext({
  colours
})

export const useTheme = () => useContext(ThemeContext)