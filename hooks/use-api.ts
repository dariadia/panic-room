import useSWR from 'swr'
import { Fetcher, SWRResponse } from 'swr/dist/types'

import { APP_PRODUCTION } from 'constants/locations'

import { RequestOptions, RequestOption, OptionsType } from 'types'

export const buildRequestUrl = (
  url: string,
  RequestParams?: RequestOptions,
): string => {
  if (!RequestParams) {
    return url
  }
  const queryString = Object.keys(RequestParams)
    .map(key => `${key}=${RequestParams[key as RequestOption]}`)
    .join('&')
  return `${url}?${queryString}`
}

export const getProtocol = (host: string): string =>
  host.includes('localhost') ? 'http://' : 'https://'

export const getDefaultFetcher = (url: string) => (): any =>
  fetch(url).then(res => res.json())

export const useAPI = ({
  url,
  fetcher,
  options,
  requestParams,
  host = APP_PRODUCTION,
}: {
  url: string
  fetcher?: Fetcher<unknown>
  options?: OptionsType
  requestParams?: RequestOptions
  host?: string
}): SWRResponse<unknown, unknown> => {
  const apiUrl = `${getProtocol(host)}${host}/api${buildRequestUrl(
    url,
    requestParams,
  )}`
  const apiFetcher = (fetcher || getDefaultFetcher(apiUrl)) as Fetcher<unknown>
  return useSWR(apiUrl, apiFetcher, options)
}
