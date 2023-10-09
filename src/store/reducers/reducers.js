
const initialState = {
    count: 0,
    text: 'Hello world',
    txt: '',
    randomNumber: (Math.random() * 100).toFixed(0),
    tries:6
}

const reducers = (state = initialState, actions) => {
    const { type, payload } = actions;
    switch (type) {
        case 'setCount':
            return { ...state, count: (state.count += payload) }
        case 'guess':
         
                if (state.randomNumber == payload) {
                    
                    return state.tries!==0? { ...state, txt: 'Поздравляем вы отгадали число' ,tries:state.tries-1}:state
                } else if (state.randomNumber < payload) {
                    return  state.tries!==0?{ ...state, txt: 'берите ниже!'  ,tries:state.tries-1}:state
                } else if (state.randomNumber > payload) {
                    return  state.tries!==0? { ...state, txt: 'берите выше!' ,tries:state.tries-1 }:state
                }
                else {
                    return state
                }
         

        case 'restart':
            return {
                ...state,
                randomNumber: (Math.random() * 100).toFixed(0),
                txt: '',
                tries:6
            }
        default:
            return state;
    }

}

export default reducers;