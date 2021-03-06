import {createStore} from 'redux';

const incrementCount = ({incrementBy = 1}) => ({
    type : 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({count }) => ({
    type : 'SET',
    count
});

const resetCount = () => ({
    type : 'RESET'
});
// Reducers
// reducers are pure functions
// never change state or action
const countReducer = (state = { count : 0}, action) => {
    switch (action.type) {
        case 'INCREMENT' :
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            };
        case 'RESET' : 
            return {
                count : 0
            };
        case 'SET' : 
            return {
                count : action.count
            }
        default:
            return state;
    }
};
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy : 5}));
store.dispatch(decrementCount({ decrementBy : 2}));
store.dispatch(resetCount());
store.dispatch(setCount({ count : 101}));
unsubscribe();

store.dispatch({
    type : 'INCREMENT',
    incrementBy : 5
});

store.dispatch({
    type : 'DECREMENT'
});

store.dispatch({
    type : 'RESET'
});

store.dispatch({
    type : 'DECREMENT',
    decrementBy : 10
});

store.dispatch({
    type : 'SET',
    count : 101
});