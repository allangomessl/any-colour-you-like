import React from 'react'
import { Col, Item, Avatar, features } from 'universe-ui'
import moment from 'moment'
import { Patient } from '../Api/Patient'
import styled, { css } from 'styled-components'

const sexIcon = {
  'F': 'fa-female',
  'M': 'fa-male',
  'O': 'fa-circle'
}

const sexColor = {
  'F': 'deeppink',
  'M': 'blue',
  'O': 'black'
}

const sexDescription = {
  'F': 'Feminino',
  'M': 'Masculino',
  'O': 'Outro'
}


export declare namespace PatientCard {

  export type Props = {
    data: Patient
    onMark: any
    onClick: any
    focused?: boolean
  }

}

const MyItem = styled.div<features.bg | features.fg>`
  ${features.bg};
  ${features.fg};
`

export const PatientCard = ({ focused, data, onClick }: any) => {

  return (
    <Item to={data.id?.toString()} padding='l4' border='b1' gap='2px' onClick={onClick} focused={focused}>
      <MyItem  fg />
      <Avatar icon={sexIcon[data.sex || 'O']} color={sexColor[data.sex || 'O']} />
      <Col fill gap='2px'>
        <strong>{data.name}</strong>
        <span>{data.code}</span>
      </Col>
      <Col gap='2px'>
        <span style={{ textAlign: 'end' }}>{moment().diff(data.dateBirth, 'years', false) + ' anos'}</span>
        <span style={{ textAlign: 'end' }}>{sexDescription[data.sex || 'O']}</span>
      </Col>
    </Item>
  )
}
