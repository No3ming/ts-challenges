// 实现 ReplaceAll<S, From, To> 将一个字符串 S 中的所有子字符串 From 替换为 To。

// 例如

type replaced1 = ReplaceAll<'t y p e s', ' ', ''> // 期望是 'types'
type ReplaceAll<S extends string, From extends string, To extends string> = S extends `${infer F}${infer M extends From}${infer L}` ? `${F}${To}${ReplaceAll<L, From, To>}` : S