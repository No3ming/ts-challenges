// Implement RemoveIndexSignature<T> , exclude the index signature from object types.

// For example:


type Foo1 = {
  [key: string]: any;
  foo(): void;
  string: any
}

type A = RemoveIndexSignature<Foo1>  // expected { foo(): void }

// keyof {[key: string]: any} 得到 string | number
  // keyof {[key: number]: any} 得到 numebr
  // keyof {[key: symbol]: any} 得到 symbol
type RemoveIndexSignature<T extends Record<PropertyKey, any>> = {
    [K in keyof T as K extends `${infer newK}` ? newK : never ]: T[K]
  }

  type DeleteAllKey<T> = {
    [K in keyof T as never]: T[K]
  }
  type t8 = DeleteAllKey<Foo>
  // t8: {}