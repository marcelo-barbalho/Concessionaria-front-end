const TOKEN_KEY  = 'ml art & luxury'
const USER = 'ml.user'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const getUser = () => localStorage.getItem(USER)


const saveToken = (token, username) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    localStorage.setItem(USER, JSON.stringify(username))

} 

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER)
}

const isAuthenticated =  () => {
    
    return getToken() !== null
}

export {
    getToken,
    saveToken,
    removeToken,
    isAuthenticated,
    getUser
}