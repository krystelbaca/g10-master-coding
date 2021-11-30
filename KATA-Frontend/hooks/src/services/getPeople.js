// fetch api data
export function getPeople () {
  return fetch('https://swapi.dev/api/people/')
        .then(res => res.json())
}