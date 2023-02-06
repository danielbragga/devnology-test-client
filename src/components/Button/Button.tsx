import { StyledButton } from './Button.styled'

interface ButtonProps {
  children?: React.ReactNode
  onClick?: () => void
}

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
