import { useTheme } from '../../hooks/useTheme'
import { Container } from './styles'
import { HiPlay } from 'react-icons/hi'


export default function Hello({ size = 80, ...rest }) {
  const { theme, changeSelectedTheme } = useTheme()
  changeSelectedTheme("blue")
  const baseStyle = { ...rest, size, color: theme.background.primary }  

  return (
    <Container>
      <HiPlay {...baseStyle} />
    </Container>
  )
}
