// Replace the camelCase or PascalCase string with kebab-case.

// FooBarBaz -> foo-bar-baz

// For example

type FooBarBaz = KebabCase<"FooBarBaz">;
const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";

// 如果 第二字母开头是小写，说明第一个字母后面不需要加-，否则加-
type KebabCase<S extends string> = `${S}` extends `${infer F}${infer R}` ? `${R extends Uncapitalize<R> ? `${Uncapitalize<F>}` : `${Uncapitalize<F>}-`}${KebabCase<R>}` : S