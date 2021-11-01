
export function setBill(payload){
    return {
        type:'SET_BILL',
        payload
    }
}

export function setPercentage(payload){
    return {
        type:'SET_PERCENTAGE',
        payload
    }
}

export function setPeople(payload){
    return {
        type:'SET_PEOPLE',
        payload
    }
}

export function calculate(payload){
    return {
        type:'CALCULATE',
        payload
    }
}

export function calculateTip(payload){
    return {
        type:'CALCULATE_TIP',
        payload
    }
}

export function reset(){
    return {
        type:'RESET'
    }
}