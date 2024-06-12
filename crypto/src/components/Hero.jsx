const Hero = () => {
    return (
        <div id="hero" className="rounded-xl bg-neutral-800 p-10 flex justify-between items-center w-full max-w-6xl mx-auto my-8">
            <div className="flex flex-col justify-center items-center flex-1">
                <h1 className="text-3xl sm:text-4xl text-white font-bold mb-5">Top 100 Cryptos</h1>
                <p className="text-white text-md font-medium">Cryptocurrency Prices by Market Cap</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <img src="https://stocknear.com/_app/immutable/assets/list_logo.D3ZWhH3Q.png" alt="" className="w-32" />
            </div>
        </div>
    )
}

export default Hero