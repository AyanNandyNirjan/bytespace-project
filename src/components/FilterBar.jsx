export default function FilterBar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap gap-3">
        <button className="outline-btn">⌁&nbsp; Filter</button>
        <button className="outline-btn">▥&nbsp; Level</button>
        <button className="outline-btn">♙&nbsp; Category</button>
      </div>
      <button className="outline-btn">☰&nbsp; Most relevant</button>
    </div>
  )
}
