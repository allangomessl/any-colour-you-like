

function color<T extends {}>(color: string, pallete: T = {} as any): string & T {
  return Object.assign(color, pallete)
}


// blue: '#2185d0',
// red: '#db2828',
// orange: '#f2711c',
// yellow: '#fbbd08',
// olive: '#b5cc18',
// green:  '#21ba45',
// teal: '#00b5ad',
// violet: '#6435c9',
// purple: '#a333c8',
// pink: '#e03997',
// brown: '#86593c',
// gray: '#8c8989',

const scale = {
  0: '#000000',
  1: '#181818',
  2: '#323232',
  3: '#555555',
  4: '#686868',
  5: '#828282',
  7: '#AAAAAA',
  8: '#B4B4B4',
  9: '#D1D1D1',
  10: '#FFFFFF',
}

const pallete = {
  white: color(scale[10], {
    fg: scale[2],
  }),
  black: color(scale[2], {
  }),
  red: color('#ff3b2d', {
    light: '#ff5b5b',
    dark: '#c10d00',
  }),
  orange: color('#ec9c0a', {
    light: color('#ffbd44'),
    dark: color('#b67705'),
    fg: scale[10]
  }),
  yellow: color('#FFD700', {
    light: '#ffe55c',
    dark: '#bea104',
  }),
  green: color('#21ba45', {
    light: '#4bf472',
    dark: '#068f26',
  }),
  blue: color('#4169E1', {
    light: '#3198fc',
    dark: '#0d0daa',
  }),
  purple: color('#a333c8', {
    light: '#ce56f6',
    dark: '#731593',
  }),
  grey: color('#9c9c9c', {
    light: '#f2f2f2',
    dark: '#4d4d4d',
    fg: scale[10]
  }),
  pink: color('#fc0f95', {
    light: '#ff84c9',
    dark: '#d92b8c',
  }),
  teal: color('#008080', {
    light: '#00cdcd',
    dark: '#015251'
  }),
  violet: color('#8F00FF'),
  olive: color('#99992b'),
  brown: color('#663D14'),
}

const colors = {
  white: scale[10],
  black: scale[2],
  primary: pallete.orange,
  hovered: pallete.orange.light,
  focused: pallete.orange.dark,
  background: scale[10],
  foreground: scale[3],
  border: '#dedede',
}

const button = {
  default: pallete.grey.light,
  inverted: pallete.grey.dark,
}

const sizes = {
  '0': 0.5,
  '1': 0.6,
  '2': 0.7,
  '3': 0.8,
  '4': 0.9,
  '5': 1,
  '6': 1.2,
  '7': 1.4,
  '8': 1.6,
  '9': 1.8,
  '10': 2,
  mini: 0.5,
  small: 0.75,
  normal: 1,
  big: 1.4,
  massive: 2
}

const typograpy = {
  fontSize: '14px',
  fontFamily: "'Noto Sans JP', sans-serif"
}

const multiply = {
  border: '1px',
  margin: '4px',
  padding: '4px'
}

export const base = {
  pallete,
  colors,
  button,
  typograpy,
  sizes,
  multiply
}
export type Theme = typeof base

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
