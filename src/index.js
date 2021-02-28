import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app'
// import App from './App';
import reportWebVitals from './reportWebVitals';

// // const ele = <h2>Hello world!!!</h2>

// // const elem = React.createElement('h2', null, "Hello ")
// const elem =(
//   <div>
//      <h1>Hello world</h1>
//      <input type="text" placeholder ="Введите значение "/>
//      <button>Моя кнопочка</button>
//   </div>
// )
// const Header = () => {
//   return <h2>Hello h2</h2>
// }
// const Field = () => {
//   return  <input type="text" placeholder ="Введите значение "/>
// }
// const Button = () => {
//   const name = "My name";
//   const res = () => {
//     return "Please";
//   }
//   const par = <p>My life</p>
//   return  <button>{name}+ss+{res()}{par}</button>

// }

// const App = () => {
//   return (
//     <div>
//       <Header/>
//       <Button/>
//       <Field/>
//     </div>
//   )
// }
ReactDOM.render(<App/>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
