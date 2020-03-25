export const formatSummary = function(string) {
  return string.replace(/<\/?[^>]+(>|$)/g, "")
};