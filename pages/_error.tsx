import { NextApiRequest, NextApiResponse } from 'next'
import { useTranslation } from 'next-i18next'

type InitialProps = {
  req: NextApiRequest
  res: NextApiResponse
  err: Error & {
    statusCode?: number
  }
}

type ErrorPageProps = {
  statusCode?: number
}

const ErrorPage = ({ statusCode }: ErrorPageProps): JSX.Element => {
  const { t } = useTranslation('error')
  return (
    <main>
      <h1>{statusCode}</h1>
      <p>
        {t('ops')} {t('error_occured')}
      </p>
    </main>
  )
}

ErrorPage.getInitialProps = ({ err }: InitialProps) => {
  const statusCode = err ? err.statusCode : 'Something went wrong'
  return { statusCode }
}
export default ErrorPage
