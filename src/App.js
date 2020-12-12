// import React, { Component } from 'react';
import React from 'react';

// このApp.jsにはAppと言うclassがComponentを継承して存在している
// ↓このAppをクラスコンポーネントと呼ぶ
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }

// 関数コンポーネントは関数をただ定義しているだけ
// returnとしてJSXを返している
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meau!</div>
}

export default App;
