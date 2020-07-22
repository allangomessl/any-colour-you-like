import { Box as Flex } from './Box'
import { Row } from './Row'
import { Col } from './Col'
import { Float } from './Float'

export type Box = typeof Flex & {
  Row: typeof Flex
  Col: typeof Flex
  Float: typeof Flex
}

Object.defineProperty(Flex, 'H', {
  value: Row
})

Object.defineProperty(Flex, 'V', {
  value: Col
})

Object.defineProperty(Flex, 'Float', {
  value: Float
})

export const Box: Box = Flex as any
export { Row } from './Row'
export { Col } from './Col'
export { Float } from './Float'
