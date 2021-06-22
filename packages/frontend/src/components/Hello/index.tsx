import { ReactNode } from 'react'
import { useTheme } from '../../hooks/useTheme'

import { Container } from './styles'

interface HelloProps {
  children?: ReactNode
}

export default function Hello({ children }: HelloProps) {
  const { selectedThemeVariant, changeSelectedTheme } = useTheme()

  return (
    <Container>
      <h1>Hello Noia 😎</h1>
      {children}
      <button onClick={() => changeSelectedTheme('dark')}>Dark theme</button>
      <button onClick={() => changeSelectedTheme('light')}>Light theme</button>
      <span>{`Tema atual: ${selectedThemeVariant}`}</span>
    </Container>
  )
}
