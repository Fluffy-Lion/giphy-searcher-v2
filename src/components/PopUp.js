const PopUp = ({ showPopUp, setShowPopUp }) => {
    if(!showPopUp) {
        return null
    }
    return (
        <div>
            <h1>pop up</h1>
            <button onClick={() => setShowPopUp(false)}>close</button>
        </div>
    )
}

export default PopUp