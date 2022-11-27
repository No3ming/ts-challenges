// Implement the generic Mutable<T> which makes all properties in T mutable (not readonly).

// For example

interface Todo {
  readonly title: string
  readonly description: string
  readonly completed: boolean
}

type MutableTodo = Mutable<Todo> // { title: string; description: string; completed: boolean; }

// readonly 不在key范围内
type Mutable<T extends Record<PropertyKey, any>> = {
    [k in keyof T]: T[k]
}