// NOTE: Utility Functions

// NOTE: Prevent default actions
export function preventDefaultAction(event: any) {
    event.preventDefault()
}

// NOTE: Filter out any duplicates
// REF: [https://stackoverflow.com/questions/1960473/unique-values-in-an-array]
function getUniqueValues(value: any, index: number, self: any) {
  return self.indexOf(value) === index
}
