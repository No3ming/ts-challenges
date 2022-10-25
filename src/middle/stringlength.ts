type StringToArray<S extends string> = S extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []
type LengthOfString<S extends string> = StringToArray<S>['length']

type aaa = LengthOfString<'1111'>