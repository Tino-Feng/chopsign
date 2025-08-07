import type { ThemeConfig } from 'antd'

const DEFAULT_LANGUAGE = navigator.language.startsWith('ja') ? 'ja-JP' : navigator.language
const TOKEN_NAME = 'chop_sign_token'
const THEME: ThemeConfig = {
  token: {
    colorPrimary: '#FF8500',
    controlHeightLG: 48,
    fontFamily: '"Noto Sans", "Noto Sans JP", "Noto Sans SC"'
  },
  components: {
    Form: {
      labelColor: '#858A99',
      verticalLabelPadding: '0 0 16px 0'
    }
  }
}

export { THEME, DEFAULT_LANGUAGE, TOKEN_NAME }
