// Drop a specified char from a string.

// For example:

type Butterfly = DropChar<' b u t t e r f l y ! ', ' '> // 'butterfly!'

type DropChar<T extends string, R extends string> = T extends `${infer F}${infer S}` ? F extends R ? DropChar<S, R> : `${F}${S extends `${infer F}${infer SS}` ? DropChar<SS, R> : "" }` : T