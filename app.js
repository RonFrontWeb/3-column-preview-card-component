
function App() {
    return(
        <Grid></Grid>
    )
}

function Grid() {
    return(
        <div className="gridlayout">
            <Card
                className="card card--sedan"
                type="sedans"
                carDescription="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city 
                or on your next road trip."
            /> 
            <Card 
                className="card card--suv"
                type="suvs" 
                carDescription="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation 
                and off-road adventures."
            />    
            <Card 
                className="card card--luxury"
                type="luxury"
                carDescription="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury 
                rental and arrive in style."
            />
        </div>
    )
}

function Card({type,carDescription,className}) {
    return (
        <div className={className}>
            <Icon name={type}></Icon>
            <Title title={type}></Title>
            <Text description={carDescription}></Text>
            <Button></Button>
        </div>
    )
}
function Icon({name}) {
    return (
        <div className="icon__container">
            <img src={`images/icon-${name}.svg`} alt="sedan" />
        </div>
    )
}
function Title({title}) {
    return (
        <h2 className="title">{`${title}`}</h2>
    )
}
function Text({description}) {
    return (
        <p className="text">{description}</p>
    )
}
function Button() {
    return (
        <button className="button">Learn More</button>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
