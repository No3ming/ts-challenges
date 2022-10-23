// 实现内置的 Parameters 类型，而不是直接使用它，可参考TypeScript官方文档。
// https://www.typescriptlang.org/docs/handbook/utility-types.html#parameterstype
// 例如：

const foo = (arg1: string, arg2: number): void => {}

type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
type MyParameters<T> =  T extends (...args: infer U) => any ? U : never