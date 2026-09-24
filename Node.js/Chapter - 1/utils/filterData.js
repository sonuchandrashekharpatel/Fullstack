/* Lesson 17: Filter the Query Parameters */
export function filterData({continent, country, is_open_to_public}, data) {

    let filteredData = data
    if(continent) {
        filteredData =  filteredData.filter(dest => dest.continent.toLowerCase() === continent.toLowerCase())
    }

    if(country) {
        
        filteredData =  filteredData.filter(dest => dest.country.toLowerCase() === country.toLowerCase())
    }

    if(is_open_to_public){
        filteredData = filteredData.filter(dest => dest.is_open_to_public.toString().toLowerCase() === is_open_to_public.toLowerCase())
    }

    return filteredData

}

/* Lesson 14: Modularize the code 2 */

/* 
export function filterData({continent, country}, data) {
    if(continent) {
        return data.filter(dest => dest.continent.toLowerCase() === continent.toLowerCase())
    }

    if(country) {
        return data.filter(dest => dest.country.toLowerCase() === country)
    }

} */