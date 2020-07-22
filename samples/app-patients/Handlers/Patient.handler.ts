import { Patient } from '../Api/Patient'
import indexBy from 'lodash/fp/indexBy';
import faker from 'faker';

var range = (start: any, end: any) => [...Array(end - start + 1)].map((_, i) => start + i);

var patients: Patient[] = [
  {
    id: 1,
    code: 'ag',
    name: 'Allan Gomes',
    phone: '8185-1717',
    sex: 'M',
    dateBirth: new Date(1992, 3, 1)
  },
  ...range(10, 150).map((idx) => ({
    id: idx,
    code: faker.random.alphaNumeric(),
    name: faker.name.findName(),
    phone: faker.phone.phoneNumber('###########'),
    sex: 'M',
    disabled: (idx % 10) === 0,
    dateBirth: faker.date.past(90)
  }))
]

var byId = indexBy('id', patients) 

async function asyncTimeout(time: number) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(resolve, time)
    } catch (e) {
      reject(e)
    }
  })
}

Patient.list.handler = async ({ skip = 0, take = 30, search }: any, ctx) => {

  if (search) {
    return patients.filter(p => p.name.toLowerCase().includes(search)).slice(skip, skip + take)
  }

  await asyncTimeout(1000)
  return patients.slice(skip, skip + take)
}

Patient.detail.handler = async (params, ctx) => {
  await asyncTimeout(500)
  return patients.find(({ id }) => params.id == id)
}

Patient.remove.handler = async (params, ctx) => {
  await asyncTimeout(500)
  patients = patients.filter(({ id }) => !params.ids.includes(id))
  byId = indexBy('id', patients) 
  return params as any
}

Patient.save.handler = async (params, ctx) => {
  await asyncTimeout(500)
  if (params.id && byId[params.id]) {
    const base = byId[params.id]
    Object.assign(base, params)
    return base
  } else {
    const newModel = { ...params, id: Math.random() }
    patients = [newModel, ...patients]
    byId = indexBy('id', patients)
    return newModel 
  }
}