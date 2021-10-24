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
      <p>oops</p>
    </main>
  )
}

ErrorPage.getInitialProps = ({ err }: InitialProps) => {
  const statusCode = err ? err.statusCode : 'Something went wrong'
  return { statusCode }
}
export default ErrorPage
