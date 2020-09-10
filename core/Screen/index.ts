import { ScreenHeader } from './Screen.Header'
import { Slot } from '../rp'
import { Screen as ScreenBase } from './Screen'
ScreenBase.Header = Slot.of('header', ScreenHeader)

export * from './Screen'
