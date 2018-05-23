// NOTE: Tag Utility Functions
// const tagDataURI = 'http://www.shu.edu/_cs_apps/data/tags.cfm'
// const tagDataURI = 'http://site8.auth.dev.shu.commonspotcloud.com/_cs_apps/data/tags.cfm'
const tagDataURI = '/_cs_apps/data/tags.json'

// NOTE: Filter tags by ID
export function filterByID(tagID: string, services: Array<object>, tags:Array<object>) {
  // console.info('Tag.filterByID() => Tag ID: ', tagID)
  // console.info('Tag.filterByID() => Unfiltered Serivces', services)

  //NOTE: Create a temp array for filtered services
  let filteredServices: Array<object> = []

  // NOTE: Get the info of the requested tag
  let tagFilter: Services.TagProps = getID(tagID, tags)

  // NOTE: Loop through the services to find ones that match the current tag
  services.forEach( (service: Services.ServiceProps) => {
    service.tag.forEach( (tag: Services.TagProps) => {
      if ( tag.uuid === tagFilter.uuid ) {
        filteredServices.push(service)
      }
    } )
  } )

  // console.info('Tag.filterByID() => Filtered Services', filteredServices)
  return filteredServices
}

// NOTE: Get tag data
export function getAll() {
  return fetch( tagDataURI )
  .then( function(response) {
    // console.info(response)
    let d = response.json()
    // console.info(d);

    return d
  })
  .then( (d: any) => {
    const allTags = d.data
    return d

  } )
  .catch((error: any) => {
    console.error("Error Occurred while trying to get tags.", error)
  });
}

// NOTE: Get tag ID from title search
export function getID(title:string, tags:Array<object>) {
  // console.info('Tag.getID() ', title, tags)
  let data = {
    active: false,
    contentID: 0,
    parentID: 0,
    title: '',
    uuid: ''
  }

  // NOTE: Loop over the tags until we find a title match.
  tags.forEach( (tag: Services.TagProps ) => {
    // console.info('checking: ', tag)
    if (tag.title.toLowerCase() === title.toLowerCase()) {
      data = tag
    }
  })

  // console.info('Tag.getID() => data ', uuid)
  return data
}

// NOTE: Get tag Title from UUID search
export function getByID(uuid: string, tags: object[]) {
  // console.info('Tag.getID() ', uuid, tags)
  let data

  // NOTE: Loop over the tags until we find a title match.
  tags.forEach( (tag: Services.TagProps ) => {
    if (tag.uuid === uuid) {
      // console.info('checking: ', tag)
      data = tag
    }
  })

  // console.info('Tag.getTitle() => ', uuid, data)
  return data
}

// NOTE: Filter services by tag title
export function filterByTitle( query: string, tags: object[] ){
  let data: string[] = []

  tags.forEach(
    ( t: Services.TagProps) => {
      if ( t.title === query ) {
        // console.info('tag => ', t)
        data.push(t.uuid)
      }
    }
  )
  // console.info('data => ', data)

  return data
}
