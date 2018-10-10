const user = {
    name : 'Azzam',
    age : 22
}
function getLocation(location){
    if (location){
        return <p>Location : {location}</p>;
    }
}
const templateTwo = (
    <div>
        <h1> {user.name ? user.name : 'Anonymous'} </h1>
        <p> {user.age}</p>
        {getLocation(user.location)}
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounterApp();
}
const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
}

const renderCounterApp = () => {
    const templateThree = (
        <div>
            <h1> Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    const appRoot = document.getElementById('app');
    ReactDOM.render(templateThree, appRoot);
}

renderCounterApp(); 