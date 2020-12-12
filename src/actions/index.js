// actionとはjsのオブジェクトの事でそのオブジェクトの内部で
// typeと言うキーとtypeに対応する値と言うのを持つのがactionの特徴
// そのtypeの値はユニークな物でなければならないと言うのも特徴


// reduxではactionを返す関数のことをaction createrと呼ぶ
// このようにactionを定義してactionをreturnする関数 つまりaction createrをここで定義している

// ↓複数の場所で活用されるデータは1箇所で定義してそれを再利用するのはプログラミングの鉄則
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment = () => ({
  type: INCREMENT
})

export const decrement = () => ({
  type: DECREMENT
})

// これは後にvueを担当するcomponent側でimportして　あるイベントを掴んだ時に当該のaction createrを
// インボーグして、適切な状態遷移を実行させる為の仕組みを行っている。
