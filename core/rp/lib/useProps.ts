
export type ValuesOf<T extends any[]>= T[number];

type UseProps = <T extends {}, K extends keyof T, M extends { [value: string]: K[] }>(props: T, map: M) => {
  [IP in keyof M]: { 
    [ok in ValuesOf<M[IP]>]: T[ok]
  } & {
    [k in string]: any
  }
}

export const useProps: UseProps = (props, slots) => {

  return Object.keys(slots).reduce((acc, slot) => {
    const selecteds = slots[slot] || []
    acc[slot] = selecteds.reduce((acc2, select) => {
      if (props[select]) {
        acc2[select] = props[select]
      }
      return acc2
    }, {} as any)
    return acc
  }, {}) as any

}
