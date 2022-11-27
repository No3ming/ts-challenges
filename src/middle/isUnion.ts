// Implement a type IsUnion, which takes an input type T and returns whether T resolves to a union type.

// For example:

type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false
// 完全没懂

type IsUnion<T, C = T> = T extends T ? [C] extends [T] ? false : true : never