import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodoContainer from "./components/TodoContainer";

const supabaseUrl = "https://zwxllgrjrwjibqywmpxv.supabase.co";
const supabaseAconKey = import.meta.env.VITE_SUPABSE_KEY;
const supabase = createClient(supabaseUrl, supabaseAconKey);

function App() {
  const [todoContents, setTodoContents] = useState([]);

  useEffect(() => {
    getTodoContents();
    console.log(todoContents);
  }, []);

  async function getTodoContents() {
    let { data: table, error } = await supabase.from("page2").select("*");
    setTodoContents(table);
  }

  async function addTodoContent() {
    const { data, error } = await supabase
      .from("page2")
      .insert([{ todo: prompt("해야할 일"), todoDate: prompt("날짜") }])
      .select();
    getTodoContents();
  }
  return (
    <>
      <NavBar />
      <Header />
      {todoContents.map((content) => (
        <TodoContainer
          key={content.id}
          todoContent={content.todo}
          todoDate={content.todoDate}
        />
      ))}
      <Footer onClick={addTodoContent} />
    </>
  );
}

export default App;
