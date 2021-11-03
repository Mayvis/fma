export default function (
  fn: (...args: any[]) => unknown,
  limit: number
): typeof fn {
  let inThrottle: boolean;

  return function (...args: any[]) {
    if (!inThrottle) {
      // @ts-ignore
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
