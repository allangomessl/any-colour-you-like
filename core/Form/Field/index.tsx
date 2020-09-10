import { Field as InnerField } from './Field'
import { FieldText } from './Text'
import { FieldSelect } from './Select'
import { FieldDate } from './Date'
import { FieldMasked } from './Masked'

export const Field: InnerField & {
  Text?: typeof FieldText
  Select?: typeof FieldSelect
  Date?: typeof FieldDate
  Masked?: typeof FieldMasked
} = InnerField

Field.Text = FieldText
Field.Select = FieldSelect
Field.Date = FieldDate
Field.Masked = FieldMasked
