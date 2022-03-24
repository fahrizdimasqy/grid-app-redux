import { ADD_TILE, REMOVE_TILE } from './constant'

const initialState = []

function reducer(state = initialState, action) {
  // body...
  switch (action.type) {
    case ADD_TILE:
      // generate id
      const nextId = state.length + 1
      // membuat title, memberikan nilai color, nilai ini cukup kita baca dari payload action yang dikirimkan oleh komponen yaitu action.color
      const newTile = { id: nextId, color: action.color }
      return [...state, newTile]

    case REMOVE_TILE:
      return state.filter((tile) => tile.id !== action.id)

    default:
      return state
  }
}

export default reducer
