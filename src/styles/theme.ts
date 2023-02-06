export const theme = {
  font: {
    family: 'Inter',
    weights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    sizes: {
      title: '3rem',
      subtitle: '2.25rem',
      paragraph: '1.5rem',
      small: '1.25rem',
    },
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
  colors: {
    primary: '#0070f3',
    secondary: '#5c2d91',
    black: '#000000',
    white: '#FFFFFF',
    gray: {
      light: '#f7f7f7',
      medium: '#cacaca',
      dark: '#7f7f7f',
    },
  },
  spacing: {
    xxs: '0.125rem',
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  breakpoints: {
    xs: '576px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px',
  },
  flex: {
    dir: {
      row: 'row',
      col: 'column',
    },
    wrap: {
      wrap: 'wrap',
      nowrap: 'nowrap',
    },
    justify: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
    },
    align: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      baseline: 'baseline',
      stretch: 'stretch',
    },
    alignContent: {
      start: 'flex-start',
      center: 'center',
      end: 'flex-end',
      between: 'space-between',
      around: 'space-around',
      stretch: 'stretch',
    },
  },
}
