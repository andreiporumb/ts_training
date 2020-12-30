import { emptyObject, emptyString } from 'utils/constants'
import { yourEntityPager, yourEntityListFilter } from './cacheKeyFunctions'
import { emailKey } from "./cacheKeyFunctions"

// Here you define the default values for local apollo state (@client only values)
// https://www.apollographql.com/docs/react/local-state/local-state-management/

const yourEntityDefaultPager = {
  afterId: null,
  totalCount: 0,
  pageSize: 10,
  sortBy: 'FieldName',
  direction: 1,
  page: 0
}
const yourEntityDefaultListFilter = emptyObject

//const emailValue = { email: emptyString }

const emailValue = { email: "admin@totalsoft.ro" } // this should be empty in live


export const defaults = {
 [emailKey]: emailValue
}
