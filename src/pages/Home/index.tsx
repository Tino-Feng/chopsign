import RouteGuard from '@/layout/RouteGuard'

import { useTranslation } from 'react-i18next'

const Home = () => {
  const { t } = useTranslation()
  return (
    <RouteGuard
      title={t('home.title')}
      requiredAuth={true}
    >
      <div>
        <h1>Home</h1>
      </div>
    </RouteGuard>
  )
}

export { Home as default }
