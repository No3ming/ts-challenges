// Given a number (always positive) as a type. Your type should return the number decreased by one.

// For example:

type Zero = MinusOne<1> // 0
type FiftyFour = MinusOne<55> // 54
// 利用数组长度来计算 递归一次 数组长度+1
type MinusOne<T extends number, C extends any[] = []> = [1, ...C]["length"] extends T 
    ? C["length"]
    : MinusOne<T, [1, ...C]>