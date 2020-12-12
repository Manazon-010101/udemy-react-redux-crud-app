import React from 'react';

// 親のコンポーネントから子のコンポーネントに対してあるデータを渡したい時に
// propsを使ってデータを渡してあげる。

const App = () => {
  // 簡略化する為、
  // User情報を一括で変数で管理してそれをmap処理を使って順番に回しながら各Userのプロファイルを表示する
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
  ]
  return (
    <div>
      {/* JSのコードなので{}で囲む */}
      {
                            // ↓keyにindexを与えてあげる
        profiles.map((profile, index) => {
          // ↓Reactにはバーチャルdomが存在していて、
          // その中でどのdomが変更になったのかを管理している
          // その変更点のみを実際のdomに反映していくと言う機構がある
          // それぞれの値にkeyを与えてあげて、必要最低限なdomの範囲をReactが管理している
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

//            ↓nameとageを受け取ることができる
const User = (props) => {
return <div>Hi, i am {props.name}, and {props.age} years old! </div>
}

export default App;
