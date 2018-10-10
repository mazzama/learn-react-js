const app = {
    title : 'Indecision App',
    subtitle : 'Put your hands down',
    options : ['one', 'two']
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    
    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    console.log(app.options);
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}
const appRoot = document.getElementById('app');

const render = () => {
    // JSX
    const template = (
        <div>
            <h1>Hi {app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p> {app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p> {app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>
            <button disabled={app.options.length === 0} onClick={makeDecision}>Make Decision</button>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();