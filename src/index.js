import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducers'
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// ここで作られるstoreはアプリケーション内部で唯一になる
// そしてアプリケーション内の全てのstateはこのstoreに集約されている。
const store = createStore(reducer)

// ここで作成したstoreがアプリケーション内のどのコンポーネントからも参照できるようにする
// そのために利用するのが、Provider
// 実装は簡単で、既存のコンポーネントをProviderコンポーネントでラップして、
// store属性にさっき作成したstoreを渡してあげるだけ
// こうすることでアプリケーション内の全ての階層のコンポーネントでstoreが使えるようになる。


ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
