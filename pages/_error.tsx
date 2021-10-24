import { NextApiRequest, NextApiResponse } from 'next'

import { TEXTS } from 'constants/texts'

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
  return (
    <main>
      <h1>{statusCode}</h1>
      <p>{TEXTS.error_occured}</p>
    </main>
  )
}

ErrorPage.getInitialProps = ({ err }: InitialProps) => {
  const statusCode = err ? err.statusCode : TEXTS.something_went_wrong
  return { statusCode }
}
export default ErrorPage
