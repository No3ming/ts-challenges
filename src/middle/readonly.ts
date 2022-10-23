// 实现一个通用MyReadonly2<T, K>，它带有两种类型的参数T和K。

// K指定应设置为Readonly的T的属性集。如果未提供K，则应使所有属性都变为只读，就像普通的Readonly<T>一样。

// 例如

interface Todo {
  title: string
  description: string
  completed: boolean
}

const todo_r: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo_r.title = "Hello" // Error: cannot reassign a readonly property
todo_r.description = "barFoo" // Error: cannot reassign a readonly property
todo_r.completed = true // OK

// type MyReadonly2<T, U extends keyof T> = {
//     readonly [K in U]: T[K]
    
// } & {
//     [K in keyof T as K extends U ? never : K]: T[K]
// }

type MyReadonly2<T, U extends keyof T> = {
    readonly [K in U]: T[K]
    
} & Omit<T, U>