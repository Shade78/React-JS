const App = () => {
    // функциональный компонент
    // чтобы измнения при нажатии на кнопку перенеслись, нужно вызвать фунцию еще раз
    let [buttonText, setButtonText] = React.useState('Click me');
    console.log(buttonText);

    const onButtonclick = () => {
        setButtonText('Hello from react');
    };
    return (
        <div className="app">
            <button onClick={onButtonclick}>{buttonText}</button>
            {/*{любое выражение JS} */}
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
