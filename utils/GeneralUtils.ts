export function safeParseInt(str: string | undefined | null, defaultNumber: number = 0): number {
  if (!str) return defaultNumber;
  const num = parseInt(str, 10)
  return isNaN(num) ? defaultNumber : num;
}
