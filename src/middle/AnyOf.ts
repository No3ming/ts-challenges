// 在类型系统中实现类似于 Python 中 any 函数。类型接收一个数组，如果数组中任一个元素为真，则返回 true，否则返回 false。如果数组为空，返回 false。

// 例如：

type Sample1 = AnyOf<[1, '', false, [], {}]> // expected to be true.
type Sample2 = AnyOf<[0, '', false, [], {}]> // expected to be false.

type AnyOf<T extends any[]> = T extends [] ? false : T  extends [f: infer F, ...r: infer R] ? F extends (false | 0 | "" | undefined | null | [] | Record<string, never> )? AnyOf<R> : true : never