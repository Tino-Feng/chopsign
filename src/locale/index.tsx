import i18n, { type Resource } from 'i18next'

import { initReactI18next } from 'react-i18next'
import { DEFAULT_LANGUAGE } from '#/config'
import type { LocaleModule } from './types'

const context = import.meta.webpackContext('./', {
  recursive: true,
  regExp: /\.y[a]*ml$/
})


const resources = context.keys().reduce(
  (acc, key) => {
    const lang = key.replace(/\.\/(.+)\/.+\.y[a]*ml/, '$1')
    const module = context(key) as LocaleModule
    if (lang in acc) {
      acc[lang].translation = {
        ...acc[lang].translation,
        ...module.default
      }
    } else {
      acc[lang] = {
        translation: module.default
      }
    }
    return acc
  },
  {} as Record<string, Resource>
)

i18n.use(initReactI18next).init({
  resources,
  lng: DEFAULT_LANGUAGE,

  interpolation: {
    escapeValue: false
  }
})

export { i18n as default }
