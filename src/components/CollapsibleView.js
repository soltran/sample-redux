import React from 'react'
import {pure} from 'recompose'
import { sFlexRow, uflexPercent, styleMerge } from '../utils/styleUtils';
import MinimizeBar from './MinimizeBar'

export const CollapsibleView = (
  {
    minimizeCb,
    children,
    open,
    vh,
    about
  }
) => {
  const styles = {
    view: {
      backgroundColor: 'transparent',
      minHeight: `${vh}px`,
      margin: '-8px',
      marginRight:'20px',
    },
    content: {
      width: '90%',
      borderRight: 'teal 2px solid'
    }
  }

  return (
    <div style={sFlexRow}>
      <div style={open ? uflexPercent(40) : {}}>
        <div style={styleMerge(styles.view, sFlexRow)}>
          <div style={styles.content}>
            { open ? about : null }
          </div>
          <MinimizeBar text={ open ? 'Collapse' : 'About this page' } minimizeCb={minimizeCb} />
        </div>
      </div>
      <div style={uflexPercent( open ? 60 : 100)}>
        {children}
      </div>
    </div>

  )
};

export default pure(CollapsibleView)
