
export const trigger = (payload) => {
    return{
        type: 'setCount',
        payload,
    }
}
export const guess = (payload) => {
    return{
        type: 'guess',
        payload,
    }
}


export const restart = (payload) => {
    return{
        type: 'restart',
        payload,
    }
}