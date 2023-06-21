export function reverseString(str: string): string {
  if (str.length === 0) return str;

  const last: string = str.substring(str.length - 1, str.length);
  const rest: string = str.substring(0, str.length - 1);

  return last + reverseString(rest);
}
