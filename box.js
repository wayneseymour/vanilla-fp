
const log = console.log.bind(console)

const Box = x =>
  ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box(${x})`
  })

Box(3)
  .map(x => x + 1)
  .fold(log)


