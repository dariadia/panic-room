import fortuneCookieWishes from './fortune-cookie-wishes.json'

export default function handler(res: {
  status: (
    arg0: number,
  ) => { (): any; new (): any; json: { (arg1: any): void; new (): any } }
}): void {
  res.status(200).json(fortuneCookieWishes)
}
