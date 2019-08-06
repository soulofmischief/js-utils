// @flow strict


export function throttle(
  func: () => *,
  wait: number,
  options: {
    leading: boolean,
    trailing: boolean,
  } = {
    leading: false,
    trailing: false,
  }) {
  let context, args: ?*[] = [], result
  let timeout = null
  let previous = 0

  const later = function () {
    //previous = options.leading === false ? 0 : Date.now()
    previous = options.leading ? Date.now() : 0
    timeout = null
    result = func.apply( context, args || [])
    context = args = null
  }

  return function () {
    const now = Date.now()

    if ( !previous && options.leading === false ) previous = now

    const remaining = wait - ( now - previous )

    context = this
    args = arguments

    if ( remaining <= 0 ) {
      if ( timeout ) clearTimeout( timeout )

      timeout = null
      previous = now
      result = func.apply( context, args )
      context = args = null

    } else if ( !timeout && options.trailing !== false ) {
      timeout = setTimeout( later, remaining )
    }

    return result
  }
}
