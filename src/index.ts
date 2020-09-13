let { call } = function () { }

let array: Array<any> = []

namespace ArrayMethods {

  // Array element position
  export const indexOf: <K>( haystack: ArrayLike<K>, entry: K, fromIndex?: number ) => number = call.bind( array.indexOf ) as any
  export const lastIndexOf: <K>( haystack: ArrayLike<K>, entry: K, fromIndex?: number ) => number = call.bind( array.lastIndexOf ) as any

  // Array element addition
  export const push: <K>( haystack: ArrayLike<K>, ...needle: Array<K> ) => number = call.bind( array.push ) as any
  export const unshift: <K>( haystack: ArrayLike<K>, ...needle: Array<K> ) => number = call.bind( array.unshift ) as any

  // Array element extraction
  export const pop: <K>( haystack: ArrayLike<K> ) => K = call.bind( array.pop ) as any
  export const shift: <K>( haystack: ArrayLike<K> ) => K = call.bind( array.shift ) as any

  // Array element splicing
  export const splice: <K>( haystack: ArrayLike<K>, start?: number, deleteCount?: number, ...needle: Array<K> ) => Array<K> = call.bind( array.splice ) as any

  // Array slices
  export const slice: <K>( haystack: ArrayLike<K>, begin?: number, end?: number ) => Array<K> = call.bind( array.slice ) as any

  // Array forEach
  export const forEach: {
    <K, T> ( haystack: ArrayLike<K>, functionCallback: ( entry: K, index: number, array: typeof haystack ) => void ): void
    <K, T> ( haystack: ArrayLike<K>, functionCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => void, thisArg: T ): void
  } = call.bind( array.forEach ) as any

  // Array map
  export const map: {
    <K, T, R> ( haystack: ArrayLike<K>, mapCallback: ( entry: K, index: number, array: typeof haystack ) => R ): Array<R>
    <K, T, R> ( haystack: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => R, thisArg: T ): Array<R>
  } = call.bind( array.map ) as any

  // Array extraction
  export const filter: {
    <K, T> ( haystack: ArrayLike<K>, filterCallback: ( entry: K, index: number, array: typeof haystack ) => boolean ): Array<K>
    <K, T> ( haystack: ArrayLike<K>, filterCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => boolean, thisArg: T ): Array<K>
  } = call.bind( array.filter ) as any

  // Array sorting
  export const sort: {
    <K> ( haystack: ArrayLike<K> ): typeof haystack
    <K> ( haystack: ArrayLike<K>, sortCallback: ( a: K, b: K ) => number ): typeof haystack
  } = call.bind( array.sort ) as any

  // Array condition checking
  interface Conditioner {
    <K, T> ( haystack: ArrayLike<K>, conditionCallback: ( entry: K, index: number, array: typeof haystack ) => boolean ): boolean
    <K, T> ( haystack: ArrayLike<K>, conditionCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => boolean, thisArg: T ): boolean
  }
  export const every: Conditioner = call.bind( array.every ) as any
  export const some: Conditioner = call.bind( array.some ) as any

  // Array reduction
  interface Reductioner {
    <K, L> ( haystack: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index: number, array: typeof haystack ) => L ): L
    <K, L> ( haystack: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index: number, array: typeof haystack ) => L, initial: L ): L
  }
  export const reduce: Reductioner = call.bind( array.reduce ) as any
  export const reduceRight: Reductioner = call.bind( array.reduceRight ) as any

  // Array check element
  export const includes: <K>( haystack: ArrayLike<K>, needle: K, from?: number ) => boolean = call.bind( array.includes ) as any

  // Array check conditions
  export const find: {
    <K, T> ( haystack: ArrayLike<K>, findCallback: ( entry: K, index: number, array: typeof haystack ) => boolean ): K
    <K, T> ( haystack: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => boolean, thisArg: T ): K
  } = call.bind( array.find ) as any
  export const findIndex: {
    <K, T> ( haystack: ArrayLike<K>, findCallback: ( entry: K, index: number, array: typeof haystack ) => boolean ): number
    <K, T> ( haystack: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => boolean, thisArg: T ): number
  } = call.bind( array.findIndex ) as any

  // Array concatenation
  export const concat: <K>( ...parts: ArrayLike<K>[] ) => Array<K> = call.bind( array.concat ) as any

  // Array flattening
  type FlattenedArray<A, D extends number> = {
    "done": A,
    "recur": A extends Array<infer T> ? FlattenedArray<T, [ -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ][ D ]> : A
  }[ D extends -1 ? "done" : "recur" ]

  export const flat: {
    <K> ( haystack: ArrayLike<K> ): Array<FlattenedArray<Array<K>, 1>>
    <K, D extends number> ( haystack: ArrayLike<K>, depth: D ): Array<FlattenedArray<Array<K>, D>>
  } = call.bind( array.flat ) as any
  export const flatMap: {
    <K, T, R> ( haystack: ArrayLike<K>, mapCallback: ( entry: K, index: number, array: typeof haystack ) => R ): Array<FlattenedArray<Array<K>, 1>>
    <K, T, R> ( haystack: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry: K, index: number, array: typeof haystack ) => R, thisArg: T ): Array<FlattenedArray<Array<K>, 1>>
  } = call.bind( array.flatMap ) as any

  export const entries: <K>( haystack: ArrayLike<K> ) => Iterator<[ number, K ]> = call.bind( array.entries ) as any
  export const keys: <K>( haystack: ArrayLike<K> ) => Iterator<number> = call.bind( array.keys ) as any
  export const values: <K>( haystack: ArrayLike<K> ) => Iterator<K> = call.bind( array.values ) as any
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