import React from 'react'
import { PatientListScreen } from './Patient/PatientList.screen'
import { Routes, Route } from 'react-router'

export const Pages = () => (
  <Routes>
    <Route path='patients/*' element={<PatientListScreen />} />
  </Routes>
)