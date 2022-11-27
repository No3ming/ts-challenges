// Implement a generic RequiredByKeys<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be required. When K is not provided, it should make all properties required just like the normal Required<T>.

// For example

interface User111 {
  name?: string
  age?: number
  address?: string
}

type UserRequiredName = RequiredByKeys<User111, 'name'> // { name: string; age?: number; address?: string }

// ？也属于 key的内容 原来是怎么样就会怎么样， 必填使用-?来处理
type RequiredByKeys<Target extends Record<PropertyKey, any>, Key extends keyof Target> = {
    [k in keyof Target as k extends Key ? k : never]-?: Target[k]
} & {
    [k in keyof Target as k extends Key ? never : k]: Target[k]
}