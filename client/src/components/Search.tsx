import { SearchOutlined } from "@mui/icons-material"

type PropsType = {
  onSearch?: () => void | undefined
}

const Search = ({ onSearch }: PropsType) => {
  return (
    <div
      className="h-3/4 sm:h-2/3 w-80 flex items-center rounded-full overflow-hidden border-[1px] border-slate-200 bg-slate-100"
    >
      {/* Input */}
      <input type="text" className="h-full bg-transparent outline-none w-9/12 mx-auto" placeholder="Search for a blog..."
      />

      {/* Search */}
      <span className="h-full aspect-square flex items-center justify-center text-[#AAAAAA] rounded-full hover:bg-slate-300" onClick={onSearch}>
        <SearchOutlined />
      </span>
    </div>
  )
}
export default Search