import React from 'react'
import { LanguageProvider } from './src/context/LanguageContext'

export const wrapRootElement = ({ element }) => {
  return <LanguageProvider>{element}</LanguageProvider>
}