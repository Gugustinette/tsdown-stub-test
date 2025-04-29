export interface FooData {
  name: string
  age: number
}

export function foo(): FooData {
  return {
    name: 'foo',
    age: 1,
  }
}
