import React, { useCallback, useLayoutEffect } from 'react'
import { List, Screen, Button, Row } from 'universe-ui'
import { Slot } from '@side-of-the/rp'
import { Patient } from '../../Api/Patient'
import { PatientCard } from '../../Components/Patient.Item'
import { PatientFormScreen } from './PatientForm.screen'
import { Routes, Route } from 'react-router'
import { useSelection } from '../../hooks/useSelection'
import { useRepository } from '../../hooks/useRepository'

export const PatientListScreen = () => {
  const patients = useRepository(Patient)

  const marked = useSelection('id')

  useLayoutEffect(() => {
    patients.list.handle({
      take: 30
    })
  }, [])

  const handleDelete = useCallback(() => {
    marked.reset()
    patients.remove.handle({ ids: marked })
  }, [patients, marked])

  return (
    <>
      <Screen title='Pacientes' loading={patients.list.loading} minW='600px'>
        <Slot slot='header'>
          <Row gap='2px'>
            <Button to='new' color='primary' circle icon='plus' disabled={marked.length > 0} />
            <Button onClick={handleDelete} circle color='red' icon='trash-alt' disabled />
            <Button onClick={handleDelete} circle icon='ellipsis-v'>Opções</Button>
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
