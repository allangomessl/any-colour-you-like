import React, { useCallback, FC, useRef } from "react"
import { Slot } from "./Slot"

export function useSlot(slot: string, children: any, defaultRender: FC<any> | string) {
  const props = useRef<any>({})
  const normChildren = React.Children.toArray(children)

  const Ext = normChildren?.find((p: any) => {
    return (p?.type?.slot || p?.props?.slot) === slot
  }) as any

  Object.assign(props.current, Ext?.props || {})
  Object.assign(props.current, Ext?.ref ? { ref: Ext.ref } : {})

  const Render = useCallback(React.forwardRef(({ as, ...props }: any, ref) => {
    return React.createElement(as, {
      ...props,
      ref
    })
  }), [])

  const Forward = useCallback(React.forwardRef((props: any, ref) => {
    return React.createElement(Slot, {
      ...props,
      ref
    })
  }), [])

  Forward.defaultProps = {
    as: defaultRender,
    ...props.current,
    slot
  }

  Render.defaultProps = {
    as: defaultRender,
    ...props.current
  }

  return {
    Forward,
    Render,
    props: props.current
  }
}



// export function useSlot(slot: string, children: any, defaultRender: FC<any> | string) {
//   const hookedProps = useRef({})
//   const normChildren = React.Children.toArray(children)

//   const Ext = normChildren?.find((p: any) => {
//     return (p?.type?.slot || p?.props?.slot) === slot
//   }) as any

//   normChildren.splice(normChildren.indexOf(Ext), 1)

//   Object.assign(hookedProps.current, Ext?.props || {})
//   Object.assign(hookedProps.current, Ext?.ref ? { ref: Ext.ref } : {})

//   const render = useCallback(React.forwardRef(function Slot(renderProps: any, ref: any) {
//     const { as, ...props } = { ...renderProps, ...hookedProps.current, ref } as any
//     if (!as && !defaultRender) {
//       return null
//     }
//     return React.createElement(as || defaultRender, {
//       ...props,
//       as: as || defaultRender,
//       slot
//     })
//   }), []) as any as FC<any> & {
//     props: any
//   }

//   render.defaultProps = {
//     slot
//   }

//   render.props = { ...hookedProps.current }
//   return render
// }
