const App = ({ initialButtonText, buttonClass }) => { // деструктуризация объекта
    // функциональный компонент
    // чтобы измнения при нажатии на кнопку перенеслись, нужно вызвать фунцию еще раз
    const [buttonText, setButtonText] = React.useState(initialButtonText);  
    const [classesList, setClassesList] = React.useState(buttonClass)  // buttonText и classesList -    состояние

    const onButtonclick = () => {
        setButtonText('button has been pressed');
        setClassesList('green-btn');
    };
    return (
        <div className="app">
            <button className={classesList} onClick={onButtonclick}>{buttonText}</button>
            {/*{любое выражение JS} */}
        </div>
    );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="click me 123" buttonClass="someClassName"/>);  // свойства
