export default function Footer({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex text-orange-400 hover:text-orange-500 text-xl font-semibold font-['Inter'] ml-5 absolute bottom-10"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30Z"
            fill="#F19A37"
          />
          <path d="M12.1875 5.625H17.8125V24.375H12.1875V5.625Z" fill="white" />
          <path d="M5.625 12.1875H24.375V17.8125H5.625V12.1875Z" fill="white" />
        </svg>
      </div>
      <div className="ml-2">새로운 미리알림</div>
    </button>
  );
}
