import React, { Component } from "react";
import TodoList from "./components/TodoList/TodoList";
import "./App.css";
import Form from "./components/Form/Form";

// TodoHeader Component'ı import edildi.
import TodoHeader from "./components/TodoHeader/TodoHeader";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      todos: [],
    };
  }

  // Eğer input alanı boş değilse todos'a ekleye
  addItem = () => {
    // input'ta yazılı olan string değer
    const currentValue = this.state.userInput;

    if (this.state.userInput !== "") {
      const userInput = {
        // Delete yaparken kullanılabilmesi için bir her item için random bir id
        id: Math.random(),
        content: currentValue,
      };

      this.setState(
        {
          // Var olan array'i korumak için spread operatör kullanılıyor
          // spread operatör ile şu anki "todos" array elemanlarını alıyoruz ve yenisini ekliyoruz
          todos: [...this.state.todos, userInput],
        },
        () => {
          // Input'tan alınan değer state'e eklendikten sonra input'u temizliyoruz
          this.setState({
            userInput: "",
          });
        }
      );
    }
  };

  onInputChange = (e) => {
    const newVal = e.target.value;
    this.setState({
      userInput: newVal,
    });
  };



  // Listedeki bir elemana tıklandığında üzerinin çizilmesi

  clickedItem = (itemId) => {    // TodoItem.js içinden clickedITem fonksiyona verilen parametre geldi.
    const newTodos = this.state.todos.map((todoItem) => {
      if (itemId === todoItem.id) {
        let newTodo = { ...todoItem }
        newTodo.checked = !newTodo.checked;

        return newTodo;
      } else {
        return todoItem
      }
    })

    this.setState({ todos: newTodos })
  }

  // Listeden bir item silme işi

  deletedItem = (itemId) => {
    let deletedTodo = this.state.todos.filter(x => x.id !== itemId);
    this.setState({ todos: deletedTodo });
  }


  render() {
    return (
      <div className="App">
        {/*         
            Başlık için TodoHeader isimli component eklendi.
          */}
        <TodoHeader />
        <Form
          userInput={this.state.userInput}
          onInputChange={this.onInputChange}
          addItem={this.addItem}
        />
        {this.state.todos.length > 0 && (
          <div className="list">
            <TodoList todos={this.state.todos} clickedItem={this.clickedItem}
              deletedItem={this.deletedItem} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
