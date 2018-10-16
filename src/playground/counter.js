
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : props.count
        };
    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count + 1
            };
        });
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count : prevState.count - 1
            };
        });
    }
    handleReset(){
        this.setState(() => {
            return {
                count : 0
            };
        });
    }

    render(){
        return (
            <div>
                <h1> Count : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count : 5
}
ReactDOM.render(<Counter/>, document.getElementById('app'));

// const user = {
//     name : 'Azzam',
//     age : 22
// }
// function getLocation(location){
//     if (location){
//         return <p>Location : {location}</p>;
//     }
// }
// const templateTwo = (
//     <div>
//         <h1> {user.name ? user.name : 'Anonymous'} </h1>
//         <p> {user.age}</p>
//         {getLocation(user.location)}
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const templateThree = (
//         <div>
//             <h1> Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(templateThree, appRoot);
// }

// renderCounterApp(); 