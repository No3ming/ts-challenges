// From T, pick a set of properties whose type are not assignable to U.

// For Example

type OmitBoolean = OmitByType<{
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}, boolean> // { name: string; count: number }

type OmitByType<T extends Record<PropertyKey, any>, C = any> = {
    [k in keyof T as T[k] extends C ? never : k]: T[k]
}