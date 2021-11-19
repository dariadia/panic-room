export const getTimeInSeconds = ({
  days = 0,
  hours = 0,
  minutes = 0,
  seconds = 0,
}: {
  days?: number
  hours?: number
  minutes?: number
  seconds?: number
}): number => seconds + minutes * 60 + hours * 60 * 60 + days * 24 * 60 * 60

export const getTimeTillMidnight = (): number => {
  const midnight = new Date()
  midnight.setHours(24)
  midnight.setMinutes(0)
  midnight.setSeconds(0)
  midnight.setMilliseconds(0)
  return Math.round((midnight.getTime() - new Date().getTime()) / 1000)
}
// export const getRemainingTime = ({event}) => {

//   let delta = Math.abs(date_future - date_now) / 1000

//   // calculate (and subtract) whole days
//   const days = Math.floor(delta / 86400)
//   delta -= days * 86400

//   // calculate (and subtract) whole hours
//   const hours = Math.floor(delta / 3600) % 24
//   delta -= hours * 3600

//   // calculate (and subtract) whole minutes
//   const minutes = Math.floor(delta / 60) % 60
//   delta -= minutes * 60

//   // what's left is seconds
//   const seconds = delta % 60
// }
