export interface Controller {
  handle: <T>(value: T) => Promise<any>
}