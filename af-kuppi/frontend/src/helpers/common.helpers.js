const isEmpty = (value) => {
    if (value === "" || value === null || value === undefined || value === "null" || value === "undefined") {
        return true;
    } else {
        return false;
    }
}

const setLocalStorageItem = (key, obj) => {
    try {
        localStorage.setItem(key, JSON.stringify(obj));
        return true;
    } catch (e) {
        return false;
    }
}

export {
    isEmpty,
    setLocalStorageItem
}
