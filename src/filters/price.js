export default value => {
  let whole = Math.floor(value)
  let fraction = Math.round((value - whole) * 100)

  if (fraction === 100) {
    fraction = 0;
    whole += 1
  }

  // thousands separator
  whole = '' + whole
  while(whole.match(/^\d{4}/) !== null) {
      whole = whole.replace(/(\d)(\d{3})(\,|$)/, '$1,$2$3')
  }

  // padding for fraction
  fraction = (fraction < 10 ? '0' : '') + fraction

  return '$ ' + whole + '.' + fraction;
}
