export const getOutputByQueryParams = (data, queryObj) => {
    const params = Object.keys(queryObj)
    const filteredData = data.filter(dest => {
        return params.reduce((accum, current) => {
            let current_cond = true
            if (typeof dest[current] === "string")
                 current_cond = dest[current].toLowerCase() == queryObj[current].toLowerCase().replace("-", " ")
            else if (typeof dest[current] === "boolean")
                current_cond = dest[current] === (queryObj[current].toLowerCase() === "true")

            return current_cond && accum
        }, true)
    }) 

    return filteredData
}