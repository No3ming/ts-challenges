// 实现联合类型的全排列，将联合类型转换成所有可能的全排列数组的联合类型。

type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

type Permutation<T, U = T> = [T] extends [never] ? [] : T extends U ? [T, ...Permutation<Exclude<U, T>>] : never