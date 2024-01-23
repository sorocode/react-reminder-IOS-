import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodoContainer from "./components/TodoContainer";
import { supabase } from "./utils/supabase";

function App() {
  const [todoContents, setTodoContents] = useState([]);

  useEffect(() => {
    getTodoContents();
    console.log(todoContents);
  }, []);

  async function getTodoContents() {
    let { data: table, error } = await supabase
      .from("page2")
      .select("*")
      .order("id");
    setTodoContents(table);
  }

  async function addTodoContent() {
    const { data, error } = await supabase
      .from("page2")
      .insert([{ todo: prompt("해야할 일"), todoDate: prompt("날짜 및 시간") }])
      .select();
    getTodoContents();
  }

  return (
    <div className="grid place-content-center my-20">
      <NavBar />
      <Header />
      {todoContents.map((content) => (
        <TodoContainer
          key={content.id}
          todoContent={content.todo}
          todoDate={content.todoDate}
          todoId={content.id}
        />
      ))}
      <div>
        <Footer onClick={addTodoContent} />
      </div>
    </div>
  );
}

export default App;
