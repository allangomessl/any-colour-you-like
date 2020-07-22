import { ScreenHeader } from './Screen.Header'
import { Screen as ScreenBase } from './Screen'
import { Slot } from '../rp'

export type Screen = ScreenBase & {
  Header?: Slot<ScreenHeader>
}

export const Screen: Screen = ScreenBase
Screen.Header = Slot.of('header', ScreenHeader)
