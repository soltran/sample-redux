// Use these utilities in your react components to help style more efficiently without needing stylesheets.

// easy way to specify what flex size for your element
export const uflexPercent = (percent, total=100) => {
  return {
    flexBasis: `${100*percent/total}%`
  }
}

export const sFlexRow = {
  display: 'flex',
  flexDirection: 'row'
}

// to easily combine style objects together.
export const styleMerge = (...styles) => Object.assign({}, ...styles)

export const centered = {
  margin: 'auto 0'
}



