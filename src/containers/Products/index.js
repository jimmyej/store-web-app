import { Delete, Send } from "@mui/icons-material";
import { Box, Button, IconButton, Switch } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputText from "../../components/InputText";
import { getProducts } from "../../core/Products/services";


const Products = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  //const [done, setDone] = useState(false);

  //const [products, setProducts] = useState([])
  useEffect(() => {
    getProducts().then( (response) => {
      console.log("response", response)
      setTasks(response.data);
    })
  }, [])
  


  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(task);
  };

  const handleDelete = (name) => {
    const newTasks = tasks.filter(element => name !== element.name);
    setTasks(newTasks);
  }

  const handleDone = (i, item) => {
    const newTasks = [...tasks]
    newTasks[i] = {name: item.name, done: !item.done}
    setTasks(newTasks);
  }

  const addTask = (name) => {
    if(name){
        const newTasks = [...tasks, {name, done: false}];
        setTasks(newTasks);
        setTask("");
    }
  };

  return (
    <>
      <h2>List of products</h2>
      <form onSubmit={handleSubmit}>
        <Box mb={0}>
          <InputText
            id="task"
            label={"Enter Task"}
            handleChange={(e) => setTask(e.target.value)}
            value={task}
          />
          <Button
            variant="outlined"
            onClick={handleSubmit}
            style={{ verticalAlign: "bottom" }}
          >
            Send
            <Send />
          </Button>
        </Box>
      </form>
      {tasks.map((t, i) => {
        return (
          <div key={i}>
            <h3>{t.name}</h3>
            <IconButton aria-label="delete" size="small" onClick={() => handleDelete(t.name)}>
              <Delete/>
            </IconButton>
            <Switch
              checked={t.done}
              onChange={() => handleDone(i, t)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
        );
      })}
    </>
  );
};

export default Products;
