import { ADD_TILE, REMOVE_TILE } from './constant'

export function addTile(color) {
  return {
    type: ADD_TILE,
    created_at: Date.now(),
    color,
  }
}

export function removeTile(id) {
  return {
    type: REMOVE_TILE,
    id,
  }
}

export function addTileWithChecking(color) {
  // parameter dispatch ini merupakan dispatch dari store yang bisa kita gunakan untuk mengirimkan
  // action / event ke store

  // Sementara parameter getState merupakan fungsi yang bisa kita gunakan untuk mengakses nilai
  // store global saat ini.
  return function (dispatch, getState) {
    if (getState().grid.length < 5) {
      dispatch(addTile(color))
    }
  }
}
