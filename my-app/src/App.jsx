// import { useEffect, useState } from "react";
// import { createClient } from "@supabase/supabase-js";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import TodoContainer from "./components/TodoContainer";

// const supabaseUrl = "https://zwxllgrjrwjibqywmpxv.supabase.co";
// const supabaseAconKey = import.meta.env.VITE_SUPABASE_KEY;
// const supabase = createClient(supabaseUrl, supabaseAconKey);

function App() {
  // const [todoContents, setTodoContents] = useState([]);

  // useEffect(() => {
  //   getTodoContents();
  //   console.log(todoContents);
  // }, []);

  // async function getTodoContents() {
  //   let { data: table, error } = await supabase.from("page2").select("*");
  //   setTodoContents(table);
  // }
  // async function refreshHistory() {
  //   let { data: table, error } = await supabase.from("page2").select("*");ㄷ
  //   setTodoContents(t)
  // }
  // async function addTodoContent() {
  //   const { data, error } = await supabase
  //     .from("page2")
  //     .insert([{ todo: prompt("What to do?") }])
  //     .select();
  //   getTodoContents();
  // }
  return (
    <>
      <NavBar />
      <Header />
      <TodoContainer />
      <TodoContainer />
    </>
  );
}

export default App;
