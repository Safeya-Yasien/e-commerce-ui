const Filter = () => {
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <span>Sort by: </span>
      <select className="capitalize ring-1 ring-gray-200 shadow-md p-1 rounded-sm">
        <option>Newest</option>
        <option>Oldest</option>
        <option>price low to high</option>
        <option>price high to low</option>
      </select>
    </div>
  );
};
export default Filter;
