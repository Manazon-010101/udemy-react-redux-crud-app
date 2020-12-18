import _ from 'lodash'
import {
  READ_EVENTS,
  DELETE_EVENT,
} from '../actions'

export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')

    // ↓ DELETE_EVENTがディスパッチされた時のケース
    case DELETE_EVENT:
      // ↓現状でeventsオブジェクトを持っていて
      // そのオブジェクトからあるidのデータを削除することをここで行っている
      // これによってevent情報が書き換えられている
      // つまり該当のidのイベント情報がeventsと言うオブジェクトから削除されてしまう
      // この情報をさらに新しいメモリ空間上に配置してそれに対してreturn指定いく必要がある
      delete events[action.id]
      // それを行うのが↓これ
      // こう書くことで新しいメモリ空間上に更新後のアップデートされたイベントのオブジェクトを
      // reducerが返してくれてDeleteボタンで削除が可能になる。
      return { ...events }
    default:
      return events
  }
}
