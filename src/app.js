class IndecisionApp extends React.Component {
    render(){
        return(
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOption/>
            </div>
        );
    }
}
class Header extends React.Component {
    render(){
        return (
            <div>
                <h1> Indecision App</h1>
                <h2> Put your life in the hands of a computer</h2>
            </div>
            
        );
    }
}

class Action extends React.Component {
    render(){
        return (
            <button> What should I do?</button>
        );
    }
}

class Options extends React.Component {
    render(){
        return (
            <div>
                Options component here
                <Option />
            </div>
        );
    }
}

class Option extends React.Component {
    render(){
        return (
            <div>
                <p> A option Here</p>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render(){
        return (
            <div>
                Add option
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));