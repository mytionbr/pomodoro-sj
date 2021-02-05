export const parseRequestUrl = ()=>{
    const url = document.location.hash.toLocaleLowerCase()
    const request = url.slice('/')
    return {
        resoucer: request[1]
    }
}