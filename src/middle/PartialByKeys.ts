// Implement a generic PartialByKeys<T, K> which takes two type argument T and K.

// K specify the set of properties of T that should set to be optional. When K is not provided, it should make all properties optional just like the normal Partial<T>.

// For example

interface User {
  name: string
  age: number
  address: string
}

type UserPartialName = PartialByKeys<User, 'name'> // { name?:string; age:number; address:string }
// const a111: UserPartialName = {
//     age: 1,
//     address: ""
// }
type PartialByKeys<Target extends Record<PropertyKey, any>, Key extends keyof Target> = {
    [k in keyof Target as k extends Key ? never : k]: Target[k]
} & {
    [k in Key]?: Target[k]
}