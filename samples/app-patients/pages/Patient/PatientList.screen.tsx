import * as React from 'react'
import { List, Screen, Button, Row, Slot } from '@universe-ui/core'
import { Patient } from '../../Api/Patient'
import { PatientCard } from '../../Components/Patient.Item'
import { PatientFormScreen } from './PatientForm.screen'
import { Routes, Route } from 'react-router'
import { useSelection } from '@mediatr/react'
import { useRepository } from '@mediatr/react'
import { Plus } from '@styled-icons/fa-solid/Plus'
import { Trash } from '@styled-icons/fa-solid/Trash'
import { EllipsisV } from '@styled-icons/fa-solid/EllipsisV'

export const PatientListScreen = () => {
  const patients = useRepository(Patient)

  const marked = useSelection('id')

  React.useLayoutEffect(() => {
    patients.list.handle({
      take: 30
    })
  }, [])

  const handleDelete = React.useCallback(() => {
    marked.reset()
    patients.remove.handle({ ids: marked })
  }, [patients, marked])

  return (
    <>
      <Screen title='Pacientes' loading={patients.list.loading} minW='600px'>
        <Slot slot='header'>
          <Row gap='2px'>
            <Button to='new' color='primary' circle Icon={Plus} disabled={marked.length > 0} />
            <Button onClick={handleDelete} circle color='red' Icon={Trash} disabled />
            <Button onClick={handleDelete} circle Icon={EllipsisV}>Opções</Button>
          </Row>
        </Slot>
        <List items={patients.list.data}>
          <Slot slot='search' handle={patients.search} />
          <Slot slot='shotcuts' space={marked.toogle} />
          <List.Item as={PatientCard} onMark={marked.toogle} />
        </List>
      </Screen>
      <Routes>
        <Route path=':id' element={<PatientFormScreen repository={patients} />} />
      </Routes>
    </>
  )

}
