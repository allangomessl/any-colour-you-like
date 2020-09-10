import { css } from 'styled-components'
import { newFeature, HTMLSize, mapSizeCorner, getSizeMult, getSize, mapSize, getForegroundColor, getColor } from './lib.css'
import { Theme } from '../themes'

export type box = Partial<{ 
  grow: number
  fill: boolean
  w: any
}>

export const box = newFeature(({ grow, fill }: box) => (grow || fill) && css`
  flex-basis: 0;
  flex-shrink: 1;
  flex-grow: ${fill ? 1 : 0 };
  flex-grow: ${grow};
`)

export type flex = Partial<{
  wrap: boolean
  justify: string
  align: string
  dir: 'row' | 'col'
  gap: HTMLSize
}>

export const flex = newFeature(({ wrap, dir, align, justify, gap }: flex) => css`
  ${(dir) && css`display: flex`};
  ${wrap && css`flex-wrap: wrap`};
  ${dir === 'row' && css`flex-direction: row`};
  ${dir === 'col' && css`flex-direction: column`};
  ${align && css`align-items: ${align}`};
  ${justify && css`justify-content: ${justify}`};

  ${(dir === 'row' && gap) && css`
    & > *:first {
      margin-left: ${getSize(gap)};
    }
    & > * {
      margin-right: ${getSize(gap)};
    }
  `}

  ${(dir === 'col' && gap) && css`
    & > *:first {
      margin-top: ${getSize(gap)};
    }
    & > * {
      margin-bottom: ${getSize(gap)};
    }
  `}

`)

export type circle = Partial<{ circle: boolean | HTMLSize }>
export const circle = newFeature(({ circle }) => circle && css`
  border-radius: 50%;

  ${/string|number/.test(typeof circle) && css`
    min-width: ${getSize(circle)};
    max-width: ${getSize(circle)};
    min-height: ${getSize(circle)};
    max-height: ${getSize(circle)};
  `}
`)

export type w = Partial<{ w: HTMLSize }>
export const w = newFeature(({ w }: w) => css`
  ${w && css`width: ${getSize(w)}`};
`)

export type h = Partial<{ h: HTMLSize }>
export const h = newFeature(({ h }: h) => css`
  ${h && css`height: ${getSize(h)}`};
`)


export type wh = Partial<{ wh: HTMLSize }>
export const wh = newFeature(({ wh }: wh) => css`
  ${wh && w({ w: wh })}
  ${wh && h({ h: wh })}
`)

export type minW = Partial<{ minW: HTMLSize }>
export const minW = newFeature(({ minW }: minW) => css`
  ${minW && css`min-width: ${minW}`};
`)

export type maxW = Partial<{ maxW: HTMLSize }>
export const maxW = newFeature(({ maxW }: maxW) => css`
  ${maxW && css`max-width: ${maxW}`};
`)

export type minH = Partial<{ minH: HTMLSize }>
export const minH = newFeature(({ minH }: minH) => minH && css`
  min-height: ${minH};
`)

export type maxH = Partial<{ maxH: HTMLSize }>
export const maxH = newFeature(({ maxH }: maxH) => maxH && css`
  max-height: ${maxH};
`)

export type bg = Partial<{ bg: any }>
export const bg = newFeature(({ bg }: bg) => bg && css`
  background: ${bg};
`)

export type fg = Partial<{ fg: any }>
export const fg = newFeature(({ fg }: fg) => fg && css`
  color: ${fg};
`)

export type padding = Partial<{ padding: any }>
export const padding = newFeature(({ padding }: padding) => padding && css`
  ${mapSize('padding-%s', padding)};
`)

export type margin = Partial<{ margin: string }>
export const margin = newFeature(({ margin }: margin) => margin && css`
  ${mapSize('margin-%s', margin)};
`)

export type border = Partial<{ border: string }>
export const border = newFeature(({ border }: border) => border && css`
  ${mapSize('border-%s-width', border, 1)};
`)

export type corner = Partial<{ corner: string }>
export const corner = newFeature(({ corner }: corner) => corner && css`
  ${mapSizeCorner('border-%s-radius', corner, 2)};
`)

export type clickable = Partial<{ onClick: any, href: string, to: string }>
export const clickable = newFeature(({ onClick, href, to }: clickable) => (onClick || href || to) && css`
  cursor: pointer;
  &:hover {
    &:after {
      content: ' ';
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, .25);
    }
  }
`)

export type disabled = Partial<{ disabled: boolean }>
export const disabled = newFeature(({ disabled }: disabled) => disabled && css`
  pointer-events: none;
  color: gray !important;
  border: 1px solid gray;
  background: transparent;
  & * {
    color: gray !important;
    background: transparent !important;
  }
`)

export type attached = Partial<{ attached: boolean }>
export const attached = newFeature(({ attached }: attached) => css`
  /* margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  flex: 1;
  border: none;
  box-shadow: none; */
`);

export type absolute = Partial<{ absolute: boolean }>
export const absolute = newFeature(({ absolute }: absolute) => absolute && css`
  position: absolute;
  height: 100%;
  width: 100%;
`)

export type relative = Partial<{ relative: boolean }>
export const relative = newFeature(({ relative }: relative) => relative && css`
  position: relative;
`)

export type scrollable = Partial<{ scrollable: boolean }>
export const scrollable = newFeature(({ scrollable }: scrollable) => scrollable && css`
  overflow: auto;
`)


export type loading = Partial<{ loading: boolean }>
export const loading = newFeature(({ loading }: loading) => loading && css`
  position: relative;
  &:after {
    content: '';
    position: absolute;
    z-index: 999999999999999;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    border-radius: inherit;
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -15px;  
    margin-left: -15px;
    z-index: 999999999999999;
    width: 2em;
    height: 2em;
    border-radius: 50px;
    border: 5px solid grey;
    border-top-color: black;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

`)

export type color = Partial<{ theme: Theme, color?: '' | keyof (Theme['pallete'] & Theme['colors']) }>
export const color = newFeature(({ color, theme }: color) => css`
  ${color && css`
    --color: ${getColor(color, theme)};
    --fg-color: ${getForegroundColor(color, theme)};
  `};
`)

export type size = Partial<{ theme: Theme, size: keyof (Theme['sizes']) }>
export const size = newFeature(({ theme, size }: size) => css`
  --size: 1;
  ${size && css`--size: ${theme.sizes[size] || size}`};
`)
