// From T, pick a set of properties whose type are assignable to U.

// For Example

type OnlyBoolean = PickByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { isReadonly: boolean; isEnable: boolean; }
// 使用never 进行排除
type PickByType<T extends Record<PropertyKey, any>, V extends any> = {
    [k in keyof T as T[k] extends V ? k : never]: T[k]
}