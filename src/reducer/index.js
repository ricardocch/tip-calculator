const initialState = {
    Bill:0,
    Percentage:0,
    People:0,
    Tip:0,
    Total:0
};

function rootReducer(state = initialState, action) {
    
    if (action.type === 'SET_BILL') {
        
        return {
        ...state,
        Bill: action.payload
        }
    }

    if (action.type === 'SET_PERCENTAGE') {
        return {
        ...state,
        Percentage: action.payload
        }
    }

    if (action.type === 'SET_PEOPLE') {
        return {
        ...state,
        People: action.payload
        }
    }

    if (action.type === 'CALCULATE') {
        let percentage = state.Percentage / 100
        let Tip = (state.Bill * percentage ) / action.payload
        Tip = Math.round(Tip * 100) / 100
        let Total = (state.Bill/ action.payload) + Tip
        Total = Math.round(Total * 100) / 100

        return {
        ...state,
        Tip, 
        Total
        }
    }

    if (action.type === 'RESET') {
        return {
            Bill:0,
            percentage:0,
            People:0,
            Tip:0,
            Total:0
        }
    }

    return state;
}

export default rootReducer;