export const apiRoute = {
    searchCities(value:string) {
        return `/autocomplete/?q=${value}`
      },
      popularCities(number:Number = 5){
        return `/popular/${number}`
      },
      searchPopularCities(city:string){
        return `/popular/from/${city}/5`
      }
}