// NOTE: Category Utility Functions
const matchSorter = require('match-sorter')

// const categoryDataURI = 'http://www.shu.edu/_cs_apps/data/category.json'
// const categoryDataURI = 'http://site8.auth.dev.shu.commonspotcloud.com/_cs_apps/data/category.json'
const categoryDataURI = '/_cs_apps/data/category.json'

// NOTE: Filter categories
export function filterByID(categoryID: string | undefined, services: Array<object>) {
  // console.info('Filter by category: ', categoryID, services);

  // NOTE: Loop through the services to find ones that match the current audience
  let filteredServices = services.filter( (service: Services.ServiceProps, idx: number, services ) => {
    // console.info('services => ' , services)
    // console.info('service #' + idx + '=> ', service)
    let match = matchSorter.default(service.category, categoryID, {keys:['uuid']})

    if (match.length) {
      // console.info('match => ', match)
      // console.info('matched service => ', service)
      return service
    }
  })

  return filteredServices
}

// NOTE: Get category data
export function getAll() {
    return fetch( categoryDataURI )
    .then( function(response) {
        // console.info(response)
        let d = response.json()
        // console.info(d);

        return d
    })
    .then( function(d) {
      let matches:string[] = []
      // console.log('data => ', d)
      matches = matchSorter.default(d.data, 'Task-Service', {keys: ['type']})

      // d.data.forEach(c => {
      //   // console.log('data => ', c, 'type => ', c.type)
      //   let match = matchSorter(c.type, 'Task-Service')

      //   if ( match.length ) {
      //     // console.log('Matches => ', match)
      //     matches.push(c)
      //   }
      // })

      // console.log('matches => ', matches)
      return matches
    })
    .catch((error: any) => {
      console.error("Error Occurred in product", error);
    })
}

// NOTE: Get title from UUID search
export function getByID(uuid: string, categories: object[]) {
  // console.info('Category.getByID() ', uuid, categories)
  let data = {}

  // NOTE: Loop over the tags until we find a title match.
  categories.forEach( (category: Services.CategoryProps ) => {
    // console.info('checking: ', category)
    if (category.uuid === uuid) {
      // console.log('Category.getByID(' + uuid + ') => ', uuid, category)
      data = category
    }
  })

  // console.info('Category.getByID() => ', uuid, data)
  return data
}
