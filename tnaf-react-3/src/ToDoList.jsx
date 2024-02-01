import React from "react";

function ToDoList() {
    const [tasks, setTasks] = React.useState([]);
    const [doneTasks, setDoneTasks] = React.useState([]);
    const [priority, setPriority] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    const handlePriority = (e) => {
        setPriority(e.target.checked);
    }

    const addTask = () => {
        const newTask = {
            id: tasks.length + 1,
            name: inputValue,
            priority: priority
        }
        setTasks([...tasks, newTask]);
        setInputValue('');
        setPriority(false);
    }

    const removeTask = (id) => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
    }

    const doneTask = (id) => {
        const completedTask = tasks.find((task) => task.id === id);
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
        setDoneTasks([...doneTasks, completedTask]);
    }

    const removeDoneTask = (id) => {
        const newDoneTasks = doneTasks.filter((task) => task.id !== id);
        setDoneTasks(newDoneTasks);
    }

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            <h1>Wpisz zadanie</h1>
            <input type="text" placeholder="Wpisz zadanie" style={{
                width: "300px",
                height: "30px",
                marginBottom: "10px",
                borderRadius: "5px",
                color: "white",
            }}
                value={inputValue}
                onChange={handleInput}
            />
            <div style={{ display: "flex", flexDirection: "row", marginBottom: '10px', marginTop: '10px' }}>
                <label htmlFor="mojCheckbox">High Priority</label>
                <input type="checkbox" id="mojCheckbox" name="mojCheckbox" checked={priority} onChange={handlePriority} />
            </div>
            <button onClick={addTask} style={{ marginBottom: '10px' }}>Dodaj zadanie</button>
            <h1>TODO:</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={task.id} style={{ color: task.priority ? "red" : "white", marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: '1' }}>{index + 1}. {task.name}</span>
                        <button style={{ marginLeft: "10px" }} onClick={() => removeTask(task.id)}>Usuń</button>
                        <button style={{ marginLeft: "10px" }} onClick={() => doneTask(task.id)}>Zrobione</button>
                    </li>
                ))}
            </ul>
            <h1>DONE:</h1>
            <ul>
                {doneTasks.map((task, index) => (
                    <li key={task.id} style={{ color: "green", marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                        <span style={{ flex: '1' }}>{index + 1}. {task.name}</span>
                        <button style={{ marginLeft: "10px" }} onClick={() => removeDoneTask(task.id)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
