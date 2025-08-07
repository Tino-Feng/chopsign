import './static/styles/normalize.scss'
import './static/styles/index.scss'
import './locale'

import ReactDOM from 'react-dom/client'

import { ConfigProvider } from 'antd'
import { THEME } from '#/config'
import { Router } from './router'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <ConfigProvider theme={THEME}>
      <Router />
    </ConfigProvider>
  )
}
