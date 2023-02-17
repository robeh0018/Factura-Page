import React from 'react'
import ReactDOM from 'react-dom/client'

import { FacturaApp } from './FacturaApp';

import './styles.css'
import { ThemeApp } from "./theme/ThemeApp";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeApp>
        <FacturaApp/>
      </ThemeApp>
  </React.StrictMode>,
)
