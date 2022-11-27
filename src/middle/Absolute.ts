// 实现一个接收string,number或bigInt类型参数的Absolute类型,返回一个正数字符串。

// 例如

type Test222 = -100;
type Result = Absolute<Test222>; // expected to be "100"

type Absolute<T extends string | number | bigint> = `${T}` extends `${infer F}${infer L}` ? `${F extends "-" ? "" : F}${L}` : ""