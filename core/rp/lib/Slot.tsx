import * as React from 'react'

export declare namespace Slot {

  export type Names = string | 'shotcuts' | 'header' | 'item' | 'footer'
  export type Props<T extends React.FC<any>> = {
    as?: T
    slot?: Names
  } & React.ComponentProps<T> & {
    [k: string]: any
  }
}

export type Slot<T extends React.FC<any>> = React.FC<Slot.Props<T>> & {
  create?: <T extends React.FC<any>> (name: Slot.Names, def: T) => React.FC<Slot.Props<T>>
}

function SlotBase<T extends React.FC<any>=any>(props: Slot.Props<T>, ref) {
  return <></>
}
 
export const Slot = React.forwardRef(SlotBase) as typeof SlotBase & {
  of?: <T extends React.FC<any>> (name: Slot.Names, def?: T) => React.FC<Slot.Props<T>>
}

Slot.of = function <T extends React.FC<any>>(slot: string, def: T = null) {
  if (def) {
    def.defaultProps = {
      slot
    }
    return def
  }

  const Cmp = (props: React.ComponentProps<T>) => (
    <Slot slot={slot} as={def} {...props} />
  )
  Cmp.defaultProps = {
    slot
  }
  return Cmp
} as any
