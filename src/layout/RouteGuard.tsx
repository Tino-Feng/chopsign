import { useEffect } from 'react'
import { Navigate } from 'react-router'
import { authStore } from '@/store/auth'
import { TOKEN_NAME } from '#/config'

export interface RouteGuardProps {
  /**
   * 页面标题
   */
  title: string
  /**
   * 是否需要登录
   */
  requiredAuth?: boolean
  /**
   * 路由守卫的子元素
   */
  children: React.ReactNode
}

export default function RouteGuard(props: RouteGuardProps) {
  const { title, requiredAuth, children } = props
  useEffect(() => {
    document.title = title
  }, [title])

  if (requiredAuth) {
    const token = authStore.getState()[TOKEN_NAME]
    if (!token) {
      return <Navigate to="/login" />
    }
  }
  return children
}
