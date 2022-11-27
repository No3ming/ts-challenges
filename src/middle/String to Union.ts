// 实现一个将接收到的String参数转换为一个字母Union的类型。

// 例如

type Test12 = '123';
type Result = StringToUnion<Test12>; // expected to be "1" | "2" | "3"

type StringToUnion<T extends string> = `${T}` extends `${infer L}${infer R}` ? ( `${L}` | `${L extends "" ? never : StringToUnion<R>}`) : never