import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { mystore } from './Theme/Store';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import SendingContext from './MovieApp/Context';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { myStore } from './Store/Store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={myStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>


);
//   <Provider store={mystore}> 
//   <ChakraProvider>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </ChakraProvider>
// </Provider>
/* <React.StrictMode>
    <App />
  </React.StrictMode> */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
