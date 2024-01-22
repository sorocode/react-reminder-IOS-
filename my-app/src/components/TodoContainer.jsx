import { useEffect, useState } from "react";
import { supabase } from "../App";

export default function TodoContainer({ todoContent, todoDate }) {
  const [content, setContent] = useState(todoContent);
  function handleInputChange(e) {
    setContent(e.target.value);
  }
  async function handleKeyPress(event) {
    if (event.keyCode === 13) {
      const { data, error } = await supabase
        .from("page2")
        .update({ todo: event.target.value })
        .select();
    }
  }

  //   async function updateTodoContent(newValue) {}

  function formatDate(inputDate) {
    // 입력된 문자열을 Date 객체로 변환
    const date = new Date(inputDate);

    // 연, 월, 일, 시간, 분 추출
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // getMonth는 0부터 시작하므로 1을 더함
    const day = date.getDate();
    const hours = date.getHours() - 9;
    // const minutes = date.getMinutes();

    // 오전 또는 오후 설정
    const ampm = hours >= 12 ? "오후" : "오전";

    // 12시간제로 변경
    const formattedHours = hours % 12 === 0 ? 12 : hours % 12;

    // 결과 문자열 생성
    const result = `${year}년 ${month}월 ${day}일 ${ampm} ${formattedHours}시`;

    return result;
  }

  const [isOver, setIsOver] = useState(false);
  function handleClick() {
    setIsOver((over) => !over);
  }
  let textDeco = "font-bold";

  return (
    <div className="flex mx-10 my-3">
      <div>
        <button
          onClick={handleClick}
          className="text-gray-600 hover:text-gray-700"
        >
          {isOver ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 5C7.24 5 5 7.24 5 10C5 12.76 7.24 15 10 15C12.76 15 15 12.76 15 10C15 7.24 12.76 5 10 5ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                fill="#F19A37"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                fill="black"
              />
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-col mx-3">
        <div className={isOver ? "line-through" : textDeco}>
          <input
            type="text"
            onChange={handleInputChange}
            value={content}
            onKeyDown={(e) => handleKeyPress(e)}
          />
        </div>
        <div>{formatDate(todoDate)}</div>
        <hr />
      </div>
    </div>
  );
}
