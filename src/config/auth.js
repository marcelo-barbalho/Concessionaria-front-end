const TOKEN_KEY  = 'ml art & luxury'
const USER = 'ml.user'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const getUser = () => localStorage.getItem(USER)


const saveToken = (token, user) => {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
    localStorage.setItem(USER, JSON.stringify(user))

} 

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER)
}

const isAuthenticated =  () => {
    
    return getToken() !== false
}

export {
    getToken,
    saveToken,
    removeToken,
    isAuthenticated,
    getUser
}