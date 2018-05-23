// NOTE: Audience Utility Functions
const matchSorter: any = require('match-sorter');

// const audienceDataURI = 'http://www.shu.edu/_cs_apps/data/categories.cfm?type=audience'
// const audienceDataURI = 'http://site8.auth.shu.commonspotcloud.com/_cs_apps/data/categories.cfm?type=audience'
const audienceDataURI = '/_cs_apps/data/category.json'

// NOTE: Filter audiences by ID
export function filterByID(audienceID: string, services: Array<object>, audiences:Array<object>) {
  // console.info('Audience.filterByID() => Audience ID: ', audienceID)
  // console.info('Audience.filterByID() => Unfiltered Serivces:', services)
  // console.info('Audience.filterByID() => Audience to filter with:', audiences)

  // NOTE: Get the info of the requested audience
  let audienceFilter: Services.AudienceProps = getID(audienceID, audiences)
  // console.info('Audience.filterByID() => Audience UUID', audienceFilter)
  // console.info('Audience.filterByID() => Audience UUID', audienceFilter.uuid)

  // NOTE: Loop through the services to find ones that match the current audience
  let filteredServices = services.map( (service: Services.ServiceProps, idx: number, services ) => {
    // console.info('Audience.filterByID() Services => ' , services)
    // console.info('Audience.filterByID() Service #' + idx + '=> ', service)

    // let match = matchSorter(s.audience, audienceID, {keys:['title']})
    let match = matchSorter(service.audience, audienceFilter.uuid, {keys:['uuid']})
    // console.info('Audience.filterByID() matchSorter => ', match)

    if (match.length) {
      // console.info('Audience.filterByID() match => ', match)
      // console.info('Audience.filterByID() matched service => ', service)
      return service
    }
  })

  // console.info('Audience.filterByID() filteredServices => ', filteredServices)
  filteredServices = filteredServices.filter( (service) => {
    return service !== undefined
  })

  // console.info('Audience.filterByID() => Filtered Services', filteredServices)
  return filteredServices
}

// NOTE: Get audience data
export function getAll() {
  return fetch( audienceDataURI )
  .then( function(response) {
    // console.info(response)
    let d = response.json()
    // console.info(d);

    return d
  })
  .then( function(d) {
    let matches:string[] = []
    // console.log('data => ', d)
    // console.info(matchSorter.default(d.data, 'Audience', {keys: ['type']}))
    matches = matchSorter.default(d.data, 'Audience', {keys: ['type']})

    // d.data.forEach(c => {
    //   // console.info('data => ', c, 'type => ', c.type)
    //   // console.info('matchSorter => ', matchSorter.default(c.type, 'Audience'))
    //   let match = matchSorter.default(c.type, 'Audience')

    //   if ( match.length ) {
    //     // console.log('Matches => ', match)
    //     matches.push(c)
    //   }
    // })

    // console.log('matches => ', matches)
    return matches
  })
  .catch((error: any) => {
    console.error("Error Occurred while trying to get audiences.", error)
  });
}

// NOTE: Get audience ID from title search
export function getID(title:string, audiences:Array<object>) {
  // console.info('Audience.getID() ', title, audiences)
  let data = {
    uuid: '',
    title: ''
  }

  // NOTE: Loop over the audiences until we find a title match.
  audiences.forEach( (audience: Services.AudienceProps ) => {
    // console.info('checking: ', audience)
    if (audience.title.toLowerCase() === title.toLowerCase()) {
      data = audience
    }
  })

  // console.info('Audience.getID() => data ', uuid)
  return data
}

// NOTE: Get audience title from UUID search
export function getByID(uuid: string, audiences: object[]): object {
  // console.info('Audience.getByID() ', uuid, audiences)
  let data = {}

  // NOTE: Loop over the audiences until we find a title match.
  audiences.forEach( (audience: Services.AudienceProps ) => {
    // console.info('checking: ', audience)
    if (audience.uuid === uuid) {
      // console.info('Audience.getByID(' + uuid + ') => ', uuid, audience)
      data = audience
    }
  })

  return data
}
