const Pagination = () => {
  const btnContainer = "w-[14.6%] aspect-square";
  const btn = "flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"

  return (
    <ul className="flex items-center w-full max-w-[300px] -space-x-px text-base shadow-md rounded-lg">
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn} ml-0 rounded-l-lg`}>
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn}`}>1</a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn}`}>2</a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn}`}>3</a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn}`}>4</a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn}`}>5</a>
      </li>
      <li className={`${btnContainer}`}>
        <a href="#" className={`${btn} rounded-r-lg`}>
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  )
}
export default Pagination