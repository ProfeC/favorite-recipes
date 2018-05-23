// NOTE: Utility Functions
import * as UtilsTags from './tags'

const matchSorter = require('match-sorter')

export function filterByTitle(itemTitle: string | undefined, services: Array<object>) {
  let filteredServices: Array<object> = [];

  services.forEach( (service: Services.ServiceProps) => {
    //console.info(service.title);
    if( service.title === itemTitle ) {
      filteredServices.push(service);
    }
  });
  return filteredServices;
}

// NOTE: Filter by query
export function filterByQuery(query: string, services: Array<object>, audiences:object[], categories: object[], tags: object[]) {
  // console.info('libs.filterByQuery query => ', query.toLowerCase())
  // console.info('libs.filterByQuery service => ', services)
  // console.info('libs.filterByQuery audience => ', audiences)
  // console.info('libs.filterByQuery categories => ', categories)
  // console.info('libs.filterByQuery tags => ', tags)

  let filteredServices:object[] = services.filter(
      (service: Services.ServiceProps) => {
        query = query.trim().toLowerCase()
        let titles: string[] = []
        // let stringToSearchMatch: string[] = []
        // stringToSearchMatch.push(service.title.toLowerCase())
        // console.info('libs.filterByQuery service => ', service)

        // NOTE: Get a list of audiences
        service.audience.forEach( ( a: Services.AudienceProps ) => {
          titles.push(a.title.toString())
          // stringToSearchMatch.push(a.title.toString().toLowerCase())
          // console.info('audience', a.title.toString(), stringToSearchMatch)
        })

        // NOTE: Get a list of categories
        service.category.forEach( ( c: Services.CategoryProps ) => {
          titles.push(c.title.toString())
          // stringToSearchMatch.push(c.title.toString().toLowerCase())
          // console.info('category', c.title.toString(), stringToSearchMatch)
        })

        // NOTE: Get a list of tags
        service.tag.forEach ( ( t:Services.TagProps ) => {
          // console.info('tag', t)
          titles.push(t.title.toString())
          // stringToSearchMatch.push(t.title.toString().toLowerCase())
          // console.info('tag', t.title.toString(), stringToSearchMatch)
        })

        let stringToSearch = (service.title.toString() + ' ' + titles.join(' ')).trim().toLowerCase()
        // console.info('String to search => ', stringToSearch.trim().toLowerCase())
        // console.info('search match?', stringToSearch.trim().toLowerCase().search(query) >= 0)

        // console.info('String matches to search => ', stringToSearchMatch)
        // console.info('matchSorter match', matchSorter(stringToSearchMatch, query, {threshold: matchSorter.rankings.CONTAINS}))

        return stringToSearch.search(query) >= 0
        // return matchSorter(stringToSearchMatch, query.trim().toLowerCase(), {threshold: matchSorter.rankings.CONTAINS})
      }
    )

    // console.info('lib.utils Filtered services => ', filteredServices)

    return filteredServices
}

// NOTE: Prevent default actions
export function preventDefaultAction(event: any) {
    event.preventDefault()
}

// NOTE: Filter out any duplicates
// REF: [https://stackoverflow.com/questions/1960473/unique-values-in-an-array]
function getUniqueValues(value: any, index: number, self: any) {
  return self.indexOf(value) === index
}
