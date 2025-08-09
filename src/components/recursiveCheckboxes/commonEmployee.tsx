import { useEffect, useState } from "react";

const org = {
    name: "CTO",
    subOrdinates: [
        {
            name: "manager1",
            subOrdinates: [
                {
                    name: "manager2",
                    subOrdinates: [
                        {
                            name: "emp1",
                            subOrdinates: []
                        }
                    ]
                },
                {
                    name: "manager3",
                    subOrdinates: [
                        {
                            name: "emp2",
                            subOrdinates: [
                                {
                                    name: "manager4",
                                    subOrdinates: [
                                        {
                                            name: "emp3",
                                            subOrdinates: []
                                        }
                                    ]
                                },
                                {
                                    name: "manager5",
                                    subOrdinates: [
                                        {
                                            name: "emp4",
                                            subOrdinates: []
                                        }
                                    ]
                                }
                            ]

                        }
                    ]
                }
            ]
        }
    ]
}

const CommonEmployee = () => {
    const [empNames, setEmpNames] = useState({
        emp1: "",
        emp2: ""
    })
    const [showManagerList, setShowManagerList] = useState([])

    const getCommonManager = () => {
        const path1 = getPath(org, empNames.emp1);
        const path2 = getPath(org, empNames.emp2);


        const common = [];

        for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
            if (path1[i] == path2[i]) {
                common.push(path1[i]);
            }
        }
        setShowManagerList(common)
        console.log("*****>>", common);
    }

    useEffect(() => {
        // getCommonManager()
    }, [])

    const getPath = (root, empName, path = []) => {
        if (!root) {
            return;
        }
        path.push(root.name);

        if (root.name == empName) {
            return [...path];
        }

        for (let node of root.subOrdinates) {
            let result = getPath(node, empName, path);
            if (result) return result;
        }

        path.pop();
        return null;

    }

    const submit = () => {
        getCommonManager();
    }
    const onChangeHandler = (event) => {
        let empsNameObj = { ...empNames };
        empsNameObj[event.target.name] = event.target.value;
        setEmpNames(empsNameObj);
    }

    return (
        <div>
            <div>{org.name}</div>
            <List data={org} />
            Enter the Name of any 2 emplyess And i can tell you their common managers
            <div>Emp1: <input name="emp1" value={empNames.emp1} onChange={onChangeHandler} /></div>
            <div>Emp2: <input name="emp2" value={empNames.emp2} onChange={onChangeHandler} /></div>

            <button onClick={submit}>Submit</button>
            {
                showManagerList.map((el, i) => {
                    return <div key={i}>{el}</div>
                })
            }
        </div>
    )
}


export const List = ({ data }) => {
    return (
        <>
            {
                data.subOrdinates && data.subOrdinates.map((el, i) => {
                    return (<div className="list-section" key={i}><div>{el.name} </div>
                        {el.subOrdinates && <List data={el} />}
                    </div>)
                })
            }
        </>
    )
}

export default CommonEmployee;