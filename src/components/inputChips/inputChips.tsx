import { useState } from "react";

const InputChips = () => {

    const [chipsList, setChipsList] = useState([]);

    const [chip, setChip] = useState("");

    const handlerOnKeyDown = (event) => {
        if (chip && event.key == "Enter") {
            let copyChipsList = [...chipsList];
            copyChipsList.push(chip);
            setChipsList(copyChipsList);
            setChip("");
        }
    }

    const deleteChip = (index) => {
        let copyChipsList = chipsList.filter((el, i) => {
            return i !== index
        });
        setChipsList(copyChipsList);
    }


    return (
        <div className="chips-section">
            <div><label>Enter Chips Name </label>
                <input value={chip} onChange={(e) => setChip(e.target.value)} onKeyDown={handlerOnKeyDown} />
            </div>

            <div className="display-list-section">
                <ChipsListComponent list={chipsList} deleteChip={deleteChip} />
            </div>
        </div>
    )
}


const ChipsListComponent = ({ list, deleteChip }) => {
    return (
        <>
            {list.map((el, i) => {
                return <div key={i} className="chip">{el}
                    <span className="closebtn" onClick={() => deleteChip(i)}>&times;</span>
                </div>
            })}
        </>

    )
}

export default InputChips;