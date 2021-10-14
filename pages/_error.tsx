import { NextApiRequest, NextApiResponse } from 'next'

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
      <p>Oops! An error has occured</p>
    </main>
  )
}

ErrorPage.getInitialProps = ({ res, err }: InitialProps) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
export default ErrorPage
