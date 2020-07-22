import { Theme, base } from './base'

export const darkSide: Theme = {
  ...base,
  colors: {
    ...base.colors,
    background: base.pallete.white,
    foreground: base.pallete.black,
    border: base.pallete.grey,
  }
}
