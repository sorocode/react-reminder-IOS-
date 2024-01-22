export default function TodoContainer() {
  return (
    <div className="flex mx-10 my-3">
      <div>
        <button>
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
        </button>
      </div>
      <div className="flex flex-col mx-3">
        <div className="font-bold">수강신청하기</div>
        <div>모레 오전 9:00</div>
        <hr />
      </div>
    </div>
  );
}
