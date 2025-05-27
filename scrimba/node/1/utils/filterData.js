export const filterData = (req, data) => {
    const [param, value] = req.url.split('/').slice(-2)
    const filteredData = data.filter(dest => dest[param].toLowerCase() === value.toLowerCase())
    
    return filteredData
}