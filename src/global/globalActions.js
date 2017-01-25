import {action} from '../utils/actionUtils'

const SCREEN_RESIZE = 'SCREEN_RESIZE'
export const screenResize = (vw, vh) => action(SCREEN_RESIZE, {vw, vh})
