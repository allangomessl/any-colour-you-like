
export const decimal = ({ scale=2, thousand='.', decimal=',' } = {}) => ({
  mask: Number,
  scale: scale,
  thousandsSeparator: thousand,
  radix: decimal,
  mapToRadix: ['.'],
  autofix: true,
  normalizeZeros: true
})
