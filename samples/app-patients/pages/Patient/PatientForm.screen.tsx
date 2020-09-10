import * as React from 'react'
import { Screen, Col, Input, Button, Slot } from "@universe-ui/core"
import { useParams, useNavigate } from 'react-router'
import styled from 'styled-components'
import { useForm } from "react-hook-form";
import { useCommand } from '@mediatr/react'
import { Patient } from '../../Api/Patient'

const FlexForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
` as any

const sex = [ 'M', 'F' ]

export const PatientFormScreen = ({ repository }) => {

  const submitRef = React.useRef<any>()
  const data = repository.detail.data
  const { id } = useParams()
  const nav = useNavigate()


  const patient = useCommand(Patient.detail)

  const { register, handleSubmit, reset } = useForm({
    defaultValues: patient.data || {},
    mode: 'onBlur'
  })

  React.useEffect(() => {
    patient.handle({ id }).then(data => {
      reset(data)
    })
  }, [id])

  React.useEffect(() => {
    repository.detail.handle({ id })
  }, [id])

  const submit = handleSubmit(async (data) => {
    await repository.save.handle(data)
    nav('..')
  })

  // const handleSubmit = useCallback(, [repository.save.handle, nav])

  return (
    <Screen loading={repository.detail.loading || repository.save.loading}>
      <Slot slot='header'>
        <Button onClick={submit}>Salvar</Button>
      </Slot>
      <FlexForm initialValues={data} enableReinitialize onSubmit={submit} noValidate>
        <Col>
          <Input.Text ref={register} name='name' label='Nome' />
          <Input.Select ref={register} name='sex' label='Sexo' items={sex} />
          <Input.Date ref={register} name='dateBirth' />
          <Input.Masked ref={register} name='phone' type='phone' />
        </Col>
      </FlexForm>
    </Screen>
  )
}
