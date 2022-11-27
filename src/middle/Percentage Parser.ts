// Implement PercentageParser. According to the /^(\+|\-)?(\d*)?(\%)?$/ regularity to match T and get three matches.

import { setSourceMapRange } from "typescript"

// The structure should be: [plus or minus, number, unit] If it is not captured, the default is an empty string.

// For example:

type PString1 = ''
type PString2 = '+85%'
type PString3 = '-85%'
type PString4 = '85%'
type PString5 = '85'

type R1 = PercentageParser<PString1> // expected ['', '', '']
type R2 = PercentageParser<PString2> // expected ["+", "85", "%"]
type R3 = PercentageParser<PString3> // expected ["-", "85", "%"]
type R4 = PercentageParser<PString4> // expected ["", "85", "%"]
type R5 = PercentageParser<PString5> // expected ["", "85", ""]


type PercentageParser<T> = T extends `${infer O}${infer S}` ? (O extends "+" | "-" ? (S extends `${infer SS}%` ? [O, SS, "%"] : [O, S, ""]) : (["", ...(`${O}${S}` extends `${infer SS}%` ? [SS, "%"]: [`${O}${S}`, ""])])) : ["", "", ""]