export const delayTime = (promise, time) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  }).then(() => promise)
}
