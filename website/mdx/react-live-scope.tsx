import React from "react"
import * as universe from '@universe-ui/core'
import { Plus, Male, HouseDamage } from 'styled-icons/fa-solid'
import * as hooks from '../hooks'

const ReactLiveScope = {
  React,
  ...React,
  ...universe,
  icons: {
    Plus, Male, HouseDamage
  },
  hooks
}

export default ReactLiveScope
