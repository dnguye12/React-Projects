// eslint-disable-next-line react/prop-types
const Filter = ({filterCoin, setFilterCoin}) => {
    return (
        <form className="w-full max-w-6xl mx-auto mb-8" >
            <label className="input input-bordered flex items-center gap-2 bg-neutral-900 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                <input className="grow " type="text" placeholder="Search for coins" value={filterCoin} onChange={(event) => setFilterCoin(event.target.value)} />
            </label>
        </form>
    )
}

export default Filter