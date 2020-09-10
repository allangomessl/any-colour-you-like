import { css } from 'styled-components'
import { color, size } from './features.css'
import { clear } from './mixins.css'
import { getForegroundColor } from './lib.css'

export const button = css`
  --color: ${p => p.theme.button.default};
  --fg-color: ${p => getForegroundColor(p.theme.button.default, p.theme)};
  ${(p: any) => p.inverted && css`
    --color: ${p => p.theme.button.inverted};
    --fg-color: ${p => getForegroundColor(p.theme.button.inverted, p.theme)};
  `}

  ${color};
  ${size};
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  font-weight: 600;
  line-height: calc(1em * var(--size));
  text-align: center;
  min-width: calc(1em * var(--size));
  height: calc(1em * var(--size));
  text-align: start;
  position: relative;
  
  padding: 0;
  box-sizing: content-box;
  font-size: calc(2em * var(--size));

  border-width: 2px;
  border-radius: 4px;
  box-shadow: 1px 1px 4px 1px rgba(0,0,0,0.2);

  background: var(--color);
  border-color: transparent;
  color: var(--fg-color);

  &:hover {
    filter: brightness(85%);
  }

  ${(p: any) => p.inverted && css`
    background: transparent;
    border-color: var(--color);
    color: var(--color);

    &:hover {
      background: var(--color);
      color: var(--fg-color);
    }
  `}
`

export const input = css`
  background: transparent;
  display: block;
  border-bottom-width: 3px;
  min-height: 38px;
  font-size: 1.5em;
  width: 100%;
  padding: 0px 8px;

  &:focus {
    border-color: ${props => props.theme.colors.focused};
  }
`

export const label = css`
  display: block;
  position: absolute;
  line-height: 38px;
  padding-left: 8px;
  color: #777;
  z-index: 1;
  transition-property: line-height font-size left top transform -webkit-transform color;
  transition-duration: .4s;
  transition-timing-function: ease;

  input:focus ~ &, 
  input:valid ~ & {
    transform: translateY(-16px) translateX(-8px);
    line-height: 20px;
    font-size: 0.9em;
    font-weight: 500;
    transition-property: line-height font-size left top transform -webkit-transform color;
    transition-duration: .4s;
    transition-timing-function: ease;
  }
`

export const a = css`
  ${clear}
  text-decoration: none;

  ${(p: any) => !p.container && css`
    font-weight: 700;
  `}

  color: ${p => p.theme.colors.foreground};

  ${(p: any) => (p.to || p.href || p.onClick) && css`
    cursor: pointer;
  `};

  ${(p: any) => !p.container && (p.to || p.href || p.onClick) && css`
    color: ${p.theme.colors.primary};
    &:hover {
      color: ${p => p.theme.colors.hovered};
    }
  `};

  ${(p: any) => p.container && (p.to || p.href || p.onClick) && css`
    &:hover {
      background: ${p => p.theme.colors.hovered};
    }
  `};

`
