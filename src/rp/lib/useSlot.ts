import React, { useCallback, FC, useRef } from "react"

export function useSlot(slot: string, children: any, defaultRender: FC<any> | string) {
  const hookedProps = useRef({})  
  const normChildren = React.Children.toArray(children)

  const Ext = normChildren?.find((p: any) => {
    return (p?.type?.slot || p?.props?.slot) === slot
  }) as any

  normChildren.splice(normChildren.indexOf(Ext), 1)

  Object.assign(hookedProps.current, Ext?.props || {})
  Object.assign(hookedProps.current, Ext?.ref ? { ref: Ext.ref } : {})  

  const render = useCallback(React.forwardRef(function Slot(renderProps: any, ref: any) {
    const { as, ...props } = { ...hookedProps.current, ...renderProps, ref } as any
    if (!as && !defaultRender) {
      return null
    }
    return React.createElement(as || defaultRender, props)
  }), []) as any as FC<any> & {
    props: any
  }
  render.props = { ...hookedProps.current }
  return render
}
