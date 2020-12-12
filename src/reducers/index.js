// このindex.jsではアプリケーション内での全てのreducerを総括する
// つまり全てのreducerを1つに結合する。

// 今回の場合はreducerが1つしかないが、
// 普段のアプリケーションでは複数のreducerを書く事になる
// その時はcombineReducersの引数のオブジェクトに
// ↓そのアプリケーションが使うreducerを列挙するだけで済む。
// export default combineReducers({ foo, bar, baz })

        // ↓reducerを結合する為の関数
import {combineReducers} from 'redux'
import count from './count'

export default combineReducers({count})
