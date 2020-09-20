let { call } = function () { }

let array: Array<any> = []

namespace ArrayMethods {

  // Array element position
  export const indexOf: <K>( collection: ArrayLike<K>, entry: K, fromIndex?: number ) => number = call.bind( array.indexOf ) as any
  export const lastIndexOf: <K>( collection: ArrayLike<K>, entry: K, fromIndex?: number ) => number = call.bind( array.lastIndexOf ) as any

  // Array element addition
  export const push: <K>( collection: ArrayLike<K>, ...element: Array<K> ) => number = call.bind( array.push ) as any
  export const unshift: <K>( collection: ArrayLike<K>, ...element: Array<K> ) => number = call.bind( array.unshift ) as any

  // Array element extraction
  export const pop: <K>( collection: ArrayLike<K> ) => K = call.bind( array.pop ) as any
  export const shift: <K>( collection: ArrayLike<K> ) => K = call.bind( array.shift ) as any

  // Array element splicing
  export const splice: <K>( collection: ArrayLike<K>, start?: number, deleteCount?: number, ...element: Array<K> ) => Array<K> = call.bind( array.splice ) as any

  // Array slices
  export const slice: <K>( collection: ArrayLike<K>, begin?: number, end?: number ) => Array<K> = call.bind( array.slice ) as any

  // Array forEach
  export const forEach: {
    <K, T> ( collection: ArrayLike<K>, functionCallback: ( entry: K, index: number, array: typeof collection ) => void ): void
    <K, T> ( collection: ArrayLike<K>, functionCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => void, thisArg: T ): void
  } = call.bind( array.forEach ) as any

  // Array map
  export const map: {
    <K, T, R> ( collection: ArrayLike<K>, mapCallback: ( entry: K, index: number, array: typeof collection ) => R ): Array<R>
    <K, T, R> ( collection: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => R, thisArg: T ): Array<R>
  } = call.bind( array.map ) as any

  // Array extraction
  export const filter: {
    <K, T> ( collection: ArrayLike<K>, filterCallback: ( entry: K, index: number, array: typeof collection ) => boolean ): Array<K>
    <K, T> ( collection: ArrayLike<K>, filterCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => boolean, thisArg: T ): Array<K>
  } = call.bind( array.filter ) as any

  // Array sorting
  export const sort: {
    <K> ( collection: ArrayLike<K> ): typeof collection
    <K> ( collection: ArrayLike<K>, sortCallback: ( a: K, b: K ) => number ): typeof collection
  } = call.bind( array.sort ) as any

  // Array condition checking
  interface Conditioner {
    <K, T> ( collection: ArrayLike<K>, conditionCallback: ( entry: K, index: number, array: typeof collection ) => boolean ): boolean
    <K, T> ( collection: ArrayLike<K>, conditionCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => boolean, thisArg: T ): boolean
  }
  export const every: Conditioner = call.bind( array.every ) as any
  export const some: Conditioner = call.bind( array.some ) as any

  // Array reduction
  interface Reductioner {
    <K, L> ( collection: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index: number, array: typeof collection ) => L ): L
    <K, L> ( collection: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index: number, array: typeof collection ) => L, initial: L ): L
  }
  export const reduce: Reductioner = call.bind( array.reduce ) as any
  export const reduceRight: Reductioner = call.bind( array.reduceRight ) as any

  // Array check element
  export const includes: <K>( collection: ArrayLike<K>, element: K, from?: number ) => boolean = call.bind( array.includes ) as any

  // Array check conditions
  export const find: {
    <K, T> ( collection: ArrayLike<K>, findCallback: ( entry: K, index: number, array: typeof collection ) => boolean ): K
    <K, T> ( collection: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => boolean, thisArg: T ): K
  } = call.bind( array.find ) as any
  export const findIndex: {
    <K, T> ( collection: ArrayLike<K>, findCallback: ( entry: K, index: number, array: typeof collection ) => boolean ): number
    <K, T> ( collection: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => boolean, thisArg: T ): number
  } = call.bind( array.findIndex ) as any

  // Array concatenation
  export const concat: <K>( ...parts: ArrayLike<K>[] ) => Array<K> = call.bind( array.concat ) as any

  // Array flattening
  type FlattenedArray<A, D extends number> = {
    "done": A,
    "recur": A extends Array<infer T> ? FlattenedArray<T, [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ][ D ]> : A
  }[ D extends -1 ? "done" : "recur" ]

  export const flat: {
    <K> ( collection: ArrayLike<K> ): Array<FlattenedArray<Array<K>, 1>>
    <K, D extends number> ( collection: ArrayLike<K>, depth: D ): Array<FlattenedArray<Array<K>, D>>
  } = call.bind( array.flat ) as any
  export const flatMap: {
    <K, T, R> ( collection: ArrayLike<K>, mapCallback: ( entry: K, index: number, array: typeof collection ) => R ): Array<FlattenedArray<Array<K>, 1>>
    <K, T, R> ( collection: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof collection ) => R, thisArg: T ): Array<FlattenedArray<Array<K>, 1>>
  } = call.bind( array.flatMap ) as any

  export const entries: <K>( collection: ArrayLike<K> ) => Iterator<[ number, K ]> = call.bind( array.entries ) as any
  export const keys: <K>( collection: ArrayLike<K> ) => Iterator<number> = call.bind( array.keys ) as any
  export const values: <K>( collection: ArrayLike<K> ) => Iterator<K> = call.bind( array.values ) as any
}

export default ArrayMethods

export const indexOf: typeof ArrayMethods.indexOf = ArrayMethods.indexOf
export const lastIndexOf: typeof ArrayMethods.lastIndexOf = ArrayMethods.lastIndexOf

export const push: typeof ArrayMethods.push = ArrayMethods.push
export const pop: typeof ArrayMethods.pop = ArrayMethods.pop
export const shift: typeof ArrayMethods.shift = ArrayMethods.shift
export const unshift: typeof ArrayMethods.unshift = ArrayMethods.unshift

export const splice: typeof ArrayMethods.splice = ArrayMethods.splice
export const slice: typeof ArrayMethods.slice = ArrayMethods.slice

export const forEach: typeof ArrayMethods.forEach = ArrayMethods.forEach

export const map: typeof ArrayMethods.map = ArrayMethods.map

export const filter: typeof ArrayMethods.filter = ArrayMethods.filter

export const sort: typeof ArrayMethods.sort = ArrayMethods.sort

export const every: typeof ArrayMethods.every = ArrayMethods.every
export const some: typeof ArrayMethods.some = ArrayMethods.some

export const reduce: typeof ArrayMethods.reduce = ArrayMethods.reduce
export const reduceRight: typeof ArrayMethods.reduceRight = ArrayMethods.reduceRight

export const includes: typeof ArrayMethods.includes = ArrayMethods.includes

export const find: typeof ArrayMethods.find = ArrayMethods.find
export const findIndex: typeof ArrayMethods.findIndex = ArrayMethods.findIndex

export const concat: typeof ArrayMethods.concat = ArrayMethods.concat

export const flat: typeof ArrayMethods.flat = ArrayMethods.flat
export const flatMap: typeof ArrayMethods.flatMap = ArrayMethods.flatMap