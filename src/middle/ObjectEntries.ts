// Implement the type version of Object.entries

// For example

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}
type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];

type ObjectEntries<T extends Record<PropertyKey, any>> = {
    [k in keyof T]: [k, T[k]]
}[keyof T]