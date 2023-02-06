import styled from 'styled-components'
import { theme } from '../../styles/theme'

interface ButtonProps {
  color?: string
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  height: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
`
