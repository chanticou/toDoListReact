import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const ToDo = () => {
  const [input, setInput] = useState("");
  const [alltasks, setAllTasks] = useState([]);
  // const [taskDone, setTaskDone] = useState(false);
  const [err, setError] = useState("");

  // Guardar tarea. OnChange
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  //OnSubmit  => Guardar tareas en array / agregarlas a la lista
  const hanldeSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setError("Por favor ingrese una tarea");
    } else {
      setAllTasks([...alltasks, { input: input, id: Date.now(), done: false }]);
      setInput("");
    }
  };

  // TAREA HECHA
  const handleDone = (e, id) => {
    e.preventDefault();
    let findtask = alltasks.map((el) =>
      el.id == id ? { ...el, done: !el.done } : el
    );
    setAllTasks(findtask);
  };

  const handleDelete = (e, id) => {
    const deleteTask = alltasks.filter((el) => el.id !== id);
    setAllTasks(deleteTask);
  };

  //Eliminar tarea
  return (
    <>
      <Form>
        <Container className="d-flex flex-row justify-content-center">
          <Row className="">
            <Form.Group className="" controlId="formBasicEmail ">
              <input
                onChange={(e) => handleChange(e)}
                type="text"
                placeholder="Add task!"
                value={input}
                className="mr-5 p-1"
              ></input>
            </Form.Group>
          </Row>
          <Button variant="light" onClick={(e) => hanldeSubmit(e)}>
            Add
          </Button>
        </Container>

        {alltasks.map((el) => {
          return (
            <Container className="d-flex flex-row bg-secondary  mt-2 rounded-1">
              <Row className="row bg-light m-3 w-50 m-auto mb-3 my-3 rounded-1">
                <ul
                  className="m-auto p-1 d-flex flex-row align-items-center justify-content-between  pt-3 pb-3 pr-10 pl-10"
                  key={el.id}
                >
                  <span
                    className="text-dark text-sm-ri  "
                    style={{ listStyleType: "none" }}
                  >
                    {el.done ? <strike>{el.input}</strike> : el.input}
                  </span>
                </ul>
              </Row>
              <Button
                className="mr-2"
                variant="primary"
                onClick={(e) => handleDone(e, el.id)}
              >
                Done
              </Button>
              <Button
                className="ml-2"
                variant="danger"
                onClick={(e) => handleDelete(e, el.id)}
              >
                Delete
              </Button>
            </Container>
          );
        })}
      </Form>
    </>
  );
};
