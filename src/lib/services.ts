// NOTE: Service Utility Functions

// const serviceDataURI = 'http://www.shu.edu/_cs_apps/data/tasks-services.json'
// const serviceDataURI = 'http://site8.auth.dev.shu.commonspotcloud.com/_cs_apps/data/tasks-services.json'
const serviceDataURI = '/_cs_apps/data/tasks-services.json'

// TODO: Define the objects that are expected to be returned. Should NOT be using `any`!

// NOTE: Get service data
export function getAll() {
  return fetch( serviceDataURI )
    .then( function ( response: any ) {
      // console.info('Services Lib - getAll() response => ', response)
      let data = response.json()
      // console.info('Services Lib - getAll() JSON data => ', data);
      return data
    })
    // .then( function ( s: any ) {
    //   console.info('Services Lib - getAll() Services => ', s);
    //   let services: Array<object> = []

    //   // NOTE: Look up info for audiences, catgeories and tags, then add them to the data.
    //   s.data.forEach( ( service: Services.ServiceProps ) => {
    //     console.info('Services Lib - Current Service => ', service)

    //     let tags = getTags(service)
    //     console.info('Services Lib - Tags => ', tags)

    //     service.tag = tags
    //     console.info('Services Lib - Current Service Updated => ', service)

    //     services.push(service)
    //   })

    //   console.info('Services Lib - Updated Services => ', services)
    //   return services
    // })
    .catch( ( error: any ) => {
      console.error( "Services Lib - Error Occurred in product", error );
    } );
}

// NOTE: Get tags for services
function getTags( service: Services.ServiceProps ) {
  // console.info('libs.getServiceTags(services) => ', services)
  let tags = new Array < Services.TagProps > ()

  service.tag.forEach( ( tag, i: number ) => {
    console.info( 'Services Lib - Tag for service => ', tag )
    tags.push(tag)
  })

  return tags
}
