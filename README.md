# Array Methods

A JavaScript library of Array methods.

Better usage instructions to come.

## Install
```
npm install @dnvr/array-methods
```

## Usage
```TS
import {

  push,
  shift

} from '@dnvr/array-methods'

let arr = [ 1, 2, 3 ]

// Following turns arr to [ 1, 2, 3, 4, 5, 6 ]
push( arr, 4, 5, 6 )

// Following returns 1 and arr becomes [ 2, 3, 4, 5, 6 ]
shift( arr )

```

