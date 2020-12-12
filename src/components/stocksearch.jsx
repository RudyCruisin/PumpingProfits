const Stocksearch = () => {

    const matchTicker = () => {

    }

    const handleSubmit = () => {

    }

    return (

        <div>
            {/* <img src={'/pump.png'} alt = {"pumping profits logo"}></img> */}
            <input
                type="text"
                name="stockTicker"
                // value=""
                onChange={matchTicker}

            />
            <button onClick={handleSubmit}>Enter</button>
        </div>
    )
}

export default Stocksearch;