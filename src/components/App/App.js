import AnimalCard from "../AnimalCard/AnimalCard";
import "./App.css";
import data from "./../../utils/data";
import "./../AnimalCard/AnimalCard.css";

function showAdditional(additional) {
    const alertInfo = Object.entries(additional)
        .map((info) => `${info[0]}: ${info[0]}`)
        .join("\n");

    alert(alertInfo);
}

function App() {
    return (
        <div className="wrapper">
            <h1>Animals</h1>
            {data.map((animal) => {
                return (
                    <AnimalCard
                        key={animal.name}
                        name={animal.name}
                        additional={animal.additional}
                        diet={animal.diet}
                        scientificName={animal.scientificName}
                        size={animal.size}
                        showAdditional={showAdditional}
                    />
                );
            })}
        </div>
    );
}

export default App;
