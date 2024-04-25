import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContextShare from './ContextAPI/ContextShare.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextShare>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </ContextShare>
  </React.StrictMode>,
)
