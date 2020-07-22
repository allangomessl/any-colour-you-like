import React from 'react'
import { Col } from '../Flex'
import { Button } from '../Action'
import styled from 'styled-components'

export declare namespace Nav {
  export type Props = Col.Props
}

export type Nav = React.FC<Nav.Props> & {
  Icon?: Button
}

export const Nav: Nav = React.forwardRef((props, ref) => {
  return (
    <Col role='nav' {...props} ref={ref} />
  )
})

Nav.Icon = styled(Button).attrs({
  border: '0',
})`
  box-shadow: none;
`

Nav.defaultProps = {
  minW: '60px',
  border: 'R4',
  padding: '1',
  align: 'center',
  gap: 2,
}
