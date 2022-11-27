// 将两个类型合并成一个类型，第二个类型的键会覆盖第一个类型的键。

// 例如

type foo = {
  name: string;
  age: string;
}

type coo = {
  age: number;
  sex: string
}

type Result = Merge<foo,coo>; // expected to be {name: string, age: number, sex: string}
type Merge<T1 extends Record<PropertyKey, any>, T2 extends Record<PropertyKey, any>> = T1 & T2 extends infer R ? {[k in keyof R]: k extends keyof T2 ? T2[k] : R[k]} : never