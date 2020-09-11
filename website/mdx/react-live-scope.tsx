import React from "react"
import * as paintbox from 'paintbox'
import { Plus, Male, HouseDamage } from 'styled-icons/fa-solid'
import * as hooks from '../hooks'

const ReactLiveScope = {
  React,
  ...React,
  ...paintbox,
  icons: {
    Plus, Male, HouseDamage
  },
  hooks
}

export default ReactLiveScope
