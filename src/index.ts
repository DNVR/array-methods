let { call } = function () { }

let array: Array<any> = []

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
export const forEach: <K, T>( haystack: ArrayLike<K>, functionCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => void, thisArg?: T ) => void = call.bind( array.forEach ) as any

// Array map
export const map: <K, T, R>( haystack: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => R, thisArg?: T ) => Array<R> = call.bind( array.map ) as any

// Array extraction
export const filter: <K, T>( haystack: ArrayLike<K>, filterCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => boolean, thisArg?: T ) => Array<K> = call.bind( array.filter ) as any

// Array sorting
export const sort: <K>( haystack: ArrayLike<K>, sortCallback: ( a: K, b: K ) => number ) => typeof haystack = call.bind( array.sort ) as any

// Array condition checking
export const every: <K, T>( haystack: ArrayLike<K>, conditionCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => boolean, thisArg?: T ) => boolean = call.bind( array.every ) as any
export const some: <K, T>( haystack: ArrayLike<K>, conditionCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => boolean, thisArg?: T ) => boolean = call.bind( array.some ) as any

// Array reduction
export const reduce: <K, L>( haystack: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index?: number, array?: typeof haystack ) => L, initial: L ) => L = call.bind( array.reduce ) as any
export const reduceRight: <K, L>( haystack: ArrayLike<K>, reductionCallback: ( accumulator: L, entry: K, index?: number, array?: typeof haystack ) => L, initial: L ) => L = call.bind( array.reduceRight ) as any

// Array check element
export const includes: <K>( haystack: ArrayLike<K>, needle: K, from?: number ) => boolean = call.bind( array.includes ) as any

// Array check conditions
export const find: <K, T>( haystack: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => boolean, thisArg?: T ) => K = call.bind( array.find ) as any
export const findIndex: <K, T>( haystack: ArrayLike<K>, findCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: typeof haystack ) => boolean, thisArg?: T ) => number = call.bind( array.findIndex ) as any

// Array concatenation
export const concat: <K>( ...parts: ArrayLike<K>[] ) => Array<K> = call.bind( array.concat ) as any

// Array flattening
export const flat: <K, D extends number>( haystack: ArrayLike<K>, depth?: D ) => Array<FlatArray<Array<K>, D>> = call.bind( array.flat ) as any
export const flatMap: <K, T, R>( haystack: ArrayLike<K>, mapCallback: ( this: typeof thisArg, entry?: K, index?: number, array?: Array<FlatArray<Array<K>, 1>> ) => R, thisArg?: T ) => Array<R> = call.bind( array.flatMap ) as any

export const entries: <K>( haystack: ArrayLike<K> ) => Iterator<[ number, K ]> = call.bind( array.entries ) as any
export const keys: <K>( haystack: ArrayLike<K> ) => Iterator<number> = call.bind( array.keys ) as any
export const values: <K>( haystack: ArrayLike<K> ) => Iterator<K> = call.bind( array.values ) as any