export type Url = string
export type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

export type TProductId = string

export type TProductAttributes = {
  description: string
}

export type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}
