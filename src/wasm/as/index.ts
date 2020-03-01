// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function factorial(value: f64): f64 {
  const zero = 0;
  const one = 1;
  if (value == zero || value == one) return one;
  return value * factorial(value - one);
}