export const addItem = (key, value) => {
    localStorage.setItem(key, value);
}

export const removeItem = (key) => {
    localStorage.removeItem(key);
}

export const removeAll = () => {
    localStorage.clear();
}

export const getItem = (key) => {
    return localStorage.getItem(key);
}

export const getAccessToken = () => {
    const userIfo = JSON.parse(getItem('userInfo'))
    if(userIfo){
        return userIfo.data.token
    } else {
        return ""
    }
}
