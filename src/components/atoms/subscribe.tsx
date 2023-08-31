export default function Subscribe() {
  return (
    <form className="font-secondary flex flex-shrink w-full px-2 max-w-lg mx-auto justify-center">
    <input
      className="px-10 border border-r-0 border-gray-300 rounded-l-lg w-2/3 FF6452
            focus:outline-none focus:ring-1 focus:ring-red-500"
      // type="number"
      required
      placeholder="Enter your postcode"
    />
    <button
      type="submit"
      className={`py-3 px-4 bg-red-500 hover:bg-red-700 text-white text-sm sm:text-base font-semibold rounded-r-lg border border-transparent 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500`}
    >
      Go
    </button>
  </form>
  );
}
