const randomID = () => Math.random().toString(36).substring(7);

export const generateID = (times = 2) => {
    const id = Array.from({length: times}, () => randomID()).join("");

    return id
}

export default generateID;