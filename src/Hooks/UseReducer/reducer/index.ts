type StateTypes = Record<"count", number>
type ActionTypes = Record<"type", string>

export const initialState = {
  count: 0,
}

export const reducer = (state: StateTypes, action: ActionTypes) => {
  switch (action.type) {
    case "increment" :
      return {
        count: state.count + 1
      }
    case "decrement" :
      return {
        count: state.count - 1
      }
    case "reset" :
      return initialState
    default :
      return state
  }
}
