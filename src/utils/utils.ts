// Functions
export function debounce(fn: any, ms: any) {
  let timer: any;
  return (_: any) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn();
    }, ms);
  };
}
