// @flow strict

export function getTimeSince(
  timeStamp: DOMHighResTimeStamp,
  time?: DOMHighResTimeStamp
) {
  return ( time ?? performance.now()) - timeStamp
}
