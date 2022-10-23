// 在类型系统里实现通用的 Array.push 。

// 例如：

type Result12 = Push<[1, 2], '3'> // [1, 2, '3']

type Push<T extends any[], U extends any> = [...T, U]