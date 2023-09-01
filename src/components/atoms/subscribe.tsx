export default function Subscribe() {
  return (
    <form className="relative font-secondary flex flex-shrink w-full max-w-lg mx-auto justify-center items-center">
      <input
        className="relative px-10 py-3 border border-r-0 border-gray-300 rounded-3xl w-2/3 FF6452
            focus:outline-none focus:ring-1 focus:ring-red-500"
        // type="number"
        required
        placeholder="Enter your postcode"
      />
      <button
        type="submit"
        className={`absolute right-24 py-2 px-4 bg-orange-500 hover:bg-red-700 text-white text-sm sm:text-base font-semibold rounded-3xl border border-transparent 
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500`}
      >
        Go
      </button>
    </form>
  );
}
