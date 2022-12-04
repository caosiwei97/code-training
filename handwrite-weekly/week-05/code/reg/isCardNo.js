function isCardNo(num) {
  return /^\d{15}$|^\d{17}[\dxX]/.test(num)
}
