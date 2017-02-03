import React from 'react'
import {pure} from 'recompose'
import {Link} from 'react-router'

const MinimizeBar = ({ minimizeCb, text }) => {

  const styles = {
    minimizeBar: {
      fontFamily: 'Open Sans',
      backgroundColor: 'teal',
      color: 'white',
      paddingTop: '10px',
      height: '130px',
      width: '20px',
      borderRadius: '0px 8px 8px 0px',
      zIndex: 100
    },
    minimizeBarText: {
      whiteSpace: 'nowrap',
      transform: 'rotate(90deg)',
      transformOrigin: 'left bottom 0',
      float: 'left',
      alignSelf: 'flex-end'
    }
  }


  return (
    <div style={styles.minimizeBar}
         onClick={minimizeCb.bind(this, null)}
         className="u-pointerCursor">
      <div style={styles.minimizeBarText}>
        {text}
      </div>
    </div>
  )
};

export default pure(MinimizeBar)
