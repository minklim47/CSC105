import { useState } from "react";
import CardList from "./CardList";
import {Box, Typography, Modal, TextField, Button} from "@mui/material";


function Todo() {
    const [todo, setTodo] = useState([]);

    function handledAdd(){
        setTodo([...todo, "new task"])
    }
    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <div>
                    <h1 style={{ color: "#fefffb", fontSize: "60px"}}>Incoming</h1>
                </div>
                <div
                    style={{
                        padding: "20px 30px",
                        backgroundColor: "#b0a3f5",
                        fontSize: "50px",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "bold",
                    }}
                >
                    {todo.length}
                </div>
            </div>
            <div
                style={{
                    padding: "20px",
                    background: "#fefffe",
                    width: "500px",
                    borderRadius: "10px",
                    margin: "20px 0px",
                    fontSize: "25px",
                    color: "#7b7b7b",
                }}
                onClick={handledAdd}
            >
                + Add New Tasks
            </div>
            {todo.map((item)=>{
                return <CardList task={item}/>
            })}
        </div>
    );
}

const addNewTaskBarStyle = {
    padding: "20px",
    background: "#fefffe",
    width: {xs: "300px", md: "500px"},
    borderRadius: "10px",
    margin: "20px 0px",
    fontSize: "25px",
    color: "#7b7b7b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

const wrapperTodoListStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
};

const wrapperHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const headerTextStyle = {
    color: "#fefffb",
    fontSize: {xs: "50px", md: "60px"},
};

const headerTodoListLengthStyle = {
    padding: "20px 30px",
    backgroundColor: "#b0a3f5",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    fontSize: "50px",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
};

const modalStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50)",
    width: 400,
    bgcolor: "background.paper",
    border: "solid 3px #b0a3f5",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
};

const horizontalStyle = {
    width: "90%",
    backgroundColor: "white",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
};

export default Todo;