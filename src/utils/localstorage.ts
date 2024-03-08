export function setLocalStorage(key: string, data: object) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function getLocalStorage(key: string) {
    const getData: any = localStorage.getItem(key);
    return JSON.parse(getData);
}