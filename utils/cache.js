const writeToCache = (url, data) =>{
  if (typeof window !== 'undefined') {
  // Perform localStorage action
 localStorage.setItem(url, JSON.stringify(data))
}
}

const readFromCache = (url) => {if (typeof window !== 'undefined') {
  // Perform localStorage action
 JSON.parse(localStorage.getItem(url))
}else{
  console.log('window not defined')
}}
export { readFromCache, writeToCache }