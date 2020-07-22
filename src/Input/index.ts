import { InputDate } from './Date'
import { InputSelect } from './Select'
import { InputText } from './Text'
import { InputMasked } from './Masked'

export declare namespace Input {
  export namespace Text {
    type Props = InputText.Props
  }
  export namespace Date {
    type Props = InputDate.Props
  }
  export namespace Select {
    type Props = InputSelect.Props
  }
  export namespace Masked {
    type Props = InputMasked.Props
  }

  type Text = InputText
  type Date = InputDate
  type Select = InputSelect
  type Masked = InputMasked
}

export type Input = {
  Text?: InputText
  Date?: InputDate
  Select?: InputSelect
  Masked?: InputMasked
}

export const Input: Input = {}

Input.Text = InputText
Input.Select = InputSelect
Input.Masked = InputMasked
Input.Date = InputDate