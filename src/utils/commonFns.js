export function elipsize(str, maxLn = 30) {
  if (!str) return "N/A";
  if (str.length <= maxLn) return str;
  return `${str.slice(0, maxLn)}...`;
}
