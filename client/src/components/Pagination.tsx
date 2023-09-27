const Pagination = () => {
  return (
    <ul className="flex items-center w-full max-w-[300px] -space-x-px text-base shadow-lg rounded-lg">
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 ">
          <span className="sr-only">Previous</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
          </svg>
        </a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">2</a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" aria-current="page" className="z-10 flex items-center h-full justify-center px-4 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 ">3</a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">5</a>
      </li>
      <li className="w-[14.6%] aspect-square">
        <a href="#" className="flex items-center h-full justify-center px-4 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 ">
          <span className="sr-only">Next</span>
          <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
          </svg>
        </a>
      </li>
    </ul>
  )
}
export default Pagination