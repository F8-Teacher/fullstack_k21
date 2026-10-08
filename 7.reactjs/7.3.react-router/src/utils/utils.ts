export const debounce = <T extends unknown[]>(callback: (...args: T) => void, timeout = 500) => {
    let id: number;
    return (...args: T) => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => {
            callback(...args);
        }, timeout)
    }
}

//id1 = setTimeout1
//id2 = setTimeout2
//id3 = setTimeout3