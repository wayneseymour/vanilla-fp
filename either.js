const log = console.log.bind(console, 'Result:')

// const Either = Right || Left

const Right = x =>
  ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right(${x})`
  })

const Left = x =>
  ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left(${x})`
  })

const result =
  // Right(2) // Folds out the value
  Left(2)     // Folds out the 'error'
    .map(x => x + 1)
    .map(x => x / 2)
    .fold(x => 'error', x => x)

log(result)
