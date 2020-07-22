import { Model } from '@mediatr/crud-api'

export type Patient = {
  id: number,
  code: string,
  name: string,
  sex: string,
  dateBirth: Date
  phone?: string
  disabled?: boolean
}

export const Patient = Model.create<Patient>('Patient')({

}, 'list', 'detail', 'save', 'remove')
