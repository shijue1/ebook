import Storage from 'web-storage-cache'

const localStorage = new Storage()

export function setLocalStorage(k, v) {
    return localStorage.set(k, v)
}

export function getLocalStorage(k) {
    return localStorage.get(k)
}

export function removeLocalStorage(k) {
    return localStorage.delete(k)
}
export function clearLocalStorage() {
    localStorage.clear()
}

export function getLocale() {
    return getLocalStorage('locale')
}

export function  setLocale(locale) {
    return setLocalStorage('locale', locale)
}
