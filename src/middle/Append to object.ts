// 实现一个为接口添加一个新字段的类型。该类型接收三个参数，返回带有新字段的接口类型。

// 例如:

type Test = { id: '1' }
type Result = AppendToObject<Test, 'value', 4> // expected to be { id: '1', value: 4 }
// PropertyKey = number | string | symbol
type AppendToObject<T extends Record<PropertyKey, any>, U extends PropertyKey, V> = (T & {
    [K in U]: V
  }) extends infer R ? { [K in keyof R]: R[K]} : never