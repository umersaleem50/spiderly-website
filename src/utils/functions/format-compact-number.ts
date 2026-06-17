export const formatCompactNumber = new Intl.NumberFormat('en', {
  notation: 'compact',
  compactDisplay: 'short', // Yields 'K', 'M', 'B' etc.
});
