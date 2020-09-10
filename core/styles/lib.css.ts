import { css, FlattenSimpleInterpolation, ThemeProps, ThemedStyledProps } from 'styled-components'
import { get } from 'lodash/fp'

export type HTMLSize = string | number

export const mapSize = (cssProp: string, prop?: string, mult=4) => {

  return prop?.split(' ').map((value) => {
    const int = parseInt((/\d+/g.exec(value) || ['1'])[0])
    var result = '' 
    if (/^(V|T)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'top')}: ${int * mult}px;`
    }
    if (/^(V|B)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'bottom')}: ${int * mult}px;`
    }
    if (/^(H|L)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'left')}: ${int * mult}px;`
    }
    if (/^(H|R)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'right')}: ${int * mult}px;`
    }
    return result
  })
}

export const mapSizeCorner = (cssProp: string, prop?: string, mult=2) => {

  return prop?.split(' ').map((value) => {
    const int = parseInt((/\d+/g.exec(value) || ['1'])[0])
    var result = '' 
    if (/^(V|T)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'top-left')}: ${int * mult}px;`
      result += `${cssProp.replace('%s', 'top-right')}: ${int * mult}px;`
    }
    if (/^(V|B)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'bottom-left')}: ${int * mult}px;`
      result += `${cssProp.replace('%s', 'bottom-right')}: ${int * mult}px;`
    }
    if (/^(H|L)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'top-left')}: ${int * mult}px;`
      result += `${cssProp.replace('%s', 'bottom-left')}: ${int * mult}px;`
    }
    if (/^(H|R)|^\d+/i.test(value)) {
      result += `${cssProp.replace('%s', 'top-right')}: ${int * mult}px;`
      result += `${cssProp.replace('%s', 'bottom-right')}: ${int * mult}px;`
    }
    return result
  })
}

export function getSize(value: HTMLSize) {
  return typeof value === 'number' ? value + 'px' : value
}

export function getSizeMult(value: HTMLSize, mult: HTMLSize = 1) {
  return typeof value === 'number' ? `calc(${value} * ${getSize(mult)})` : getSize(value)
}

export function newFeature<P>(factory: (props: P) => FlattenSimpleInterpolation): typeof factory {
  css.toString = () => css`${p => factory(p as any)}` as any
  return factory
}


export function getColor(colorValue: string, theme: any){
  return get(colorValue, theme.colors) ?? get(colorValue, theme.pallete) ?? colorValue
}

export function getForegroundColor(colorValue: string, theme: any){
  let color: any = getColor(colorValue, theme)

  if (color.fg) {
    return color.fg
  }

  if (color.startsWith('#')) {
    const hexcolor = color.replace('#', '')
    const splitSize = Math.max(2, hexcolor.length / 3)
  
    var r = parseInt(hexcolor.substr(0, splitSize), 16);
    var g = parseInt(hexcolor.substr(splitSize * 1, splitSize), 16);
    var b = parseInt(hexcolor.substr(splitSize * 2, splitSize), 16);
    var yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? theme.colors.black : theme.colors.white;
  } else {
    theme.colors.foreground
  }
}

