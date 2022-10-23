// 不使用 Omit 实现 TypeScript 的 Omit<T, K> 泛型。

// Omit 会创建一个省略 K 中字段的 T 对象。

// 例如：

interface Todo__ {
  title: string
  description: string
  completed: boolean
}

type TodoPreview__ = MyOmit<Todo__, 'description' | 'title'>

const todo__: TodoPreview__ = {
  completed: false,
}

type MyOmit<T, U extends keyof T> = {
    [K in keyof T as(K extends U ? never : K)]: T[K]
}