// 实现 Capitalize<T> 它将字符串的第一个字母转换为大写，其余字母保持原样。

// 例如

type capitalized = Capitalize1<'hello world'> // expected to be 'Hello world'
type Capitalize1<T extends string> = T extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : T