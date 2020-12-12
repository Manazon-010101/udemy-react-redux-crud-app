import { INCREMENT, DECREMENT } from '../actions'

// state つまり状態の初期値をオブジェクトで定義する
const initialState = { value:0 }

// 次にcount reducer を関数として定義する
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {value: state.value +1}
    case DECREMENT:
      return {value: state.value -1}
    default:
      return state
  }
}
