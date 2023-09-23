const getInfo = () => {
    const id = localStorage.getItem('id')
    if (id) {
        return JSON.parse(id);
    } else {
        return [];
    }
}
const saveLocalStorage = (id) => {
    const phoneID = getInfo();
    const exits = phoneID.find(idx => idx === id)
    if (!exits) {
        phoneID.push(id)
        localStorage.setItem('id', JSON.stringify(phoneID))
    }
}


export { saveLocalStorage, getInfo }