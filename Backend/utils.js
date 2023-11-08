const getStatus = async(url, port) => {
    console.log(url)
    const response = await fetch(url)
    console.log(response)
    return
}

export const utils = {
    getStatus
}

