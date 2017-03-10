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
const findColor = name => {
  const found = ({red: '#red', blue: '#blue', yellow: '#yellow'})[name]
  return found ? Right(found) : Left(null)
}
const findGreen = findColor.bind(null, 'green')
const findRed = findColor.bind(null, 'red')
const end = v => v
  .map(c => c.slice(1))
  .fold(e => 'no color',
    c => c.toUpperCase()
  )
log(end(findGreen()), end(findRed()))

