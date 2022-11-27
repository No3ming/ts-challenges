// Given a tuple type T that only contains string type, and a type U, build an object recursively.

type a = TupleToNestedObject<['a'], string> // {a: string}
type b = TupleToNestedObject<['a', 'b'], number> // {a: {b: number}}
type c = TupleToNestedObject<[], boolean> // boolean. if the tuple is empty, just return the U type

type TupleToNestedObject<T extends any[], V extends any> =
T extends [infer P, ...infer R] 
    ? R["length"] extends 0 
        ? {[k in P as k extends PropertyKey ? k : never]: V} 
        : {[k in P as k extends PropertyKey ? k : never]: TupleToNestedObject<R, V>}
    : V