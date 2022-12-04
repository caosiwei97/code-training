function parseToMoney(num) {
  const [integer, decimal] = num.toFixed(3).split('.')

  return integer.replace(/(?!=^)(?=(\d{3})+$)/, ',') + '.' + decimal
}
