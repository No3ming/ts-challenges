// 获取两个接口类型中的差值属性。

type Foo = {
  a: string;
  b: number;
}
type Bar = {
  a: string;
  c: boolean
}

type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

type Diff<T1 extends Record<PropertyKey, any>, T2 extends Record<PropertyKey, any>> = Omit<T1 & T2, keyof T1 & keyof T2>