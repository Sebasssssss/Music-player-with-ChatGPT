import { Search } from 'iconoir-react'
export default function Page() {
  return (
    <div className="w-[220px] relative input-container ml-[50vh] mt-10">
      <input
        type="text"
        name="text"
        className="input w-full h-10 p-[10px] trnasition duration-200 ease-linear border-[2.5px] border-black font-[14px] placeholder:uppercase placeholder:tracking-[2px] focus:outline-none focus:border-[0.5px] input"
        placeholder="search..."
      />
      <span className="absolute right-[10px] top-2">
        <Search />
      </span>
    </div>
  )
}
