export default function (
  fn: (...args: any[]) => unknown,
  wait: number
): typeof fn {
  let timerId: ReturnType<typeof setTimeout> | null;

  return function (...args: any[]) {
    if (timerId) {
      clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
      // @ts-ignore
      fn.apply(this, args);
      timerId = null;
    }, wait);
  };
}
