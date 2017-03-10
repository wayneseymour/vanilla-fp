const log = console.log.bind(console, 'Result:')
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
const fromNullable = x =>
  x != null ? Right(x) : Left(null)
const findColor = name =>
  fromNullable({red: '#red', blue: '#blue', yellow: '#yellow'}[name])
const findGreen = findColor.bind(null, 'green')
const findRed = findColor.bind(null, 'red')
const end = v => v
  .map(c => c.slice(1))
  .fold(e => 'no color',
        c => c.toUpperCase()
  )
log(end(findGreen()), end(findRed()))

