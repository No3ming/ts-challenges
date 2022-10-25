// 在这个挑战中，你需要写一个接受数组的类型，并且返回扁平化的数组类型。

// 例如:

type flatten = Flatten<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, 5]
type Flatten<T> = T extends [infer F, ...infer U] ? (F extends unknown[] ? [...Flatten<F>, ...Flatten<U>] : [F, ...Flatten<U>])  : []