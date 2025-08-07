import style from './index.module.scss'
import logo from '@/static/images/logo.png'

import { Trans, useTranslation } from 'react-i18next'
import { Button, Form, Input, Flex, Checkbox, Image } from 'antd'
import { useEffect } from 'react'

export default function Login() {
  const { t } = useTranslation()
  const [loginForm] = Form.useForm()
  const submit = () => {
    const values = loginForm.getFieldsValue()
    console.log(values)
  }

  useEffect(() => {
    document.title = t('login.title')
  }, [])
  return (
    <div id={style.login}>
      <div className={style['brand-information']}>
        <Image
          src={logo}
          preview={false}
          wrapperStyle={{ position: 'fixed', top: '40px', left: '20px' }}
        />
      </div>
      <div className={style['login-box']}>
        <div className={style['login-container']}>
          <Form
            size="large"
            layout="vertical"
            form={loginForm}
            onFinish={submit}
            initialValues={{
              email: '',
              password: '',
              protocol: false
            }}
          >
            <Form.Item
              label={t('login.form.email.label')}
              name="email"
              rules={[
                {
                  required: true,
                  message: t('login.form.email.rules.required')
                },
                { type: 'email', message: t('login.form.email.rules.format') }
              ]}
            >
              <Input placeholder={t('login.form.email.placeholder')} />
            </Form.Item>
            <Form.Item
              label={t('login.form.password.label')}
              name="password"
              rules={[
                {
                  required: true,
                  message: t('login.form.password.rules.required')
                },
                {
                  pattern: /^(?=.*[a-zA-Z]).{8,16}$/,
                  message: t('login.form.password.rules.format')
                }
              ]}
              extra={
                <Flex justify="flex-end">
                  <Button
                    variant="link"
                    color="primary"
                    className={style.forgot}
                  >
                    {t('login.form.password.forgot')}
                  </Button>
                </Flex>
              }
            >
              <Input.Password
                placeholder={t('login.form.password.placeholder')}
                spellCheck
              />
            </Form.Item>
            <Form.Item noStyle>
              <Checkbox className={style.protocol}>
                <Trans
                  i18nKey="login.protocol"
                  values={{
                    userProtocol: t('login.userProtocol'),
                    privacyPolicy: t('login.privacyPolicy')
                  }}
                  components={[
                    <Button
                      key={0}
                      variant="link"
                      color="primary"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: 0,
                        fontSize: 'inherit',
                        height: 'auto'
                      }}
                    />,
                    <Button
                      key={1}
                      variant="link"
                      color="primary"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: 0,
                        fontSize: 'inherit',
                        height: 'auto'
                      }}
                    />
                  ]}
                />
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary" block>
                {t('login.form.submit')}
              </Button>
            </Form.Item>
            <Form.Item>
              <Flex
                justify="center"
                gap={4}
              >
                <Trans
                  i18nKey="login.noAccount"
                  values={{
                    link: t('login.toRegister')
                  }}
                  components={[
                    <Button
                      key={0}
                      variant="link"
                      color="primary"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        padding: 0,
                        fontSize: 'inherit',
                        height: 'auto'
                      }}
                    />
                  ]}
                />
              </Flex>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
