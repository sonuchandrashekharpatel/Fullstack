export function filterData(data, {continent, country, is_open_to_public}) {
    
    let filterData = data
    if(continent){
        filterData = filterData.filter(dest => dest.continent.toLowerCase() === continent.toLowerCase())
    }

    if(country) {
        filterData = filterData.filter(dest => dest.country.toLowerCase() === country.toLowerCase())
    }

    if(is_open_to_public) {
        filterData = filterData.filter(dest => dest.is_open_to_public.toString().toLowerCase() === is_open_to_public.toLowerCase())
    }

    return filterData
}