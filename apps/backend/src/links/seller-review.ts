import { defineLink } from '@medusajs/framework/utils'

import ReviewModule from '../modules/reviews'
import SellerModule from '../modules/seller'

export default defineLink(SellerModule.linkable.seller, {
  linkable: ReviewModule.linkable.review,
  isList: true
})
