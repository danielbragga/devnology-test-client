import styled from 'styled-components'
import { theme } from '../../styles/theme'

interface ButtonProps {
  color?: string
}

export const StyledButton = styled.button<ButtonProps>`
  background-color: ${theme.colors.white};
  color: ${theme.colors.black};
  height: ${theme.spacing.xxl};
  border-radius: ${theme.borderRadius.sm};
  width: ${theme.spacing.xl};
  display: ${theme.flex.display.flex};
  align-items: ${theme.flex.align.center};
  justify-content: ${theme.flex.justify.center};
`
