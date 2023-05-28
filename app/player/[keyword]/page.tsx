export default function Page() {
  return (
    <div className="w-[220px] relative input-container ml-[50vh] mt-10">
      <input
        type="text"
        name="text"
        className="input w-full h-10 p-[10px] trnasition duration-200 ease-linear border-[2.5px] border-black font-[14px] uppercase tracking-[2px] focus:outline-none focus:border-[0.5px] input"
        placeholder="search..."
      />
      <span className="icon">
        <svg
          width="19px"
          height="19px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {' '}
            <path
              opacity="1"
              d="M14 5H20"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
            <path
              opacity="1"
              d="M14 8H17"
              stroke="#000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
            <path
              d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2"
              stroke="#000"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
            <path
              opacity="1"
              d="M22 22L20 20"
              stroke="#000"
              stroke-width="3.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>{' '}
          </g>
        </svg>
      </span>
    </div>
  )
}
