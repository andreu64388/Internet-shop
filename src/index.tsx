
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import './CSS/index.css';
import store from "./store/state";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);

