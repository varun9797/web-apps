import { useEffect, useState } from "react"

let DATA = [
    {
        name: "fruits",
        isChecked: false,
        children: [
            {
                name: "banana",
                isChecked: false
            },
            {
                name: "Apple",
                isChecked: false
            },
            {
                name: "Mango",
                isChecked: false
            }
        ]
    },
    {
        name: "vagitables",
        isChecked: false,
        children: [
            {
                name: "Broclie",
                isChecked: false
            },
            {
                name: "Spinich",
                isChecked: false,
                children: [
                    {
                        name: "Indian Spinach",
                        isChecked: false,
                        children: [
                            {
                                name: "Green Spinach",
                                isChecked: false,
                            },
                            {
                                name: "Red Spinach",
                                isChecked: false
                            }

                        ]
                    },
                    {
                        name: "German Spinach",
                        isChecked: false
                    }

                ]
            }
        ]
    }
]
export default function RecursiveCheckboxes() {
    const [data, setData] = useState(DATA)
    const updatedCheckbox = (name, flag) => {
        const recursive = (arr, shouldChildrenHasSameFlag = false) => {
            let isSameLoop = false
            return arr.map((el) => {
                if (name == el.name || (shouldChildrenHasSameFlag && !isSameLoop)) {
                    let temp = { ...el }
                    temp.isChecked = flag;
                    isSameLoop = name == el.name ? true : false; //We need this flag To avoid change of sibllings node flag(isChecked). 
                    shouldChildrenHasSameFlag = true;
                    if (el.children) {
                        return { ...temp, children: recursive(el.children, shouldChildrenHasSameFlag) }
                    } else {
                        return temp;
                    }
                } else {

                    if (el.children) {
                        return { ...el, children: recursive(el.children) }
                    } else {
                        return el;
                    }
                }
            })
        }

        setData((prev) => recursive(prev))
    }

    return (
        <>
            <CheckBoxList data={data} setData={setData} updatedCheckbox={updatedCheckbox} />
        </>
    )
}



export const CheckBoxList = ({ data, setData, updatedCheckbox }) => {
    const handleOnChange = (el, flag) => {
        updatedCheckbox(el.name, flag)
    }

    return (
        <>
            {
                data.map((el, i) => {
                    return <div className="checkbox-section" key={i}>
                        <label>{el.name}</label>
                        <input type="checkbox" onChange={(e) => handleOnChange(el, !el.isChecked)} value={el.isChecked} checked={el.isChecked} />
                        {
                            el.children && <CheckBoxList data={el.children} setData={setData} updatedCheckbox={updatedCheckbox} />
                        }
                    </div>
                })
            }
        </>
    )
}