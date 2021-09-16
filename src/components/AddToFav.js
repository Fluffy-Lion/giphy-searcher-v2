const AddToFav = ({ favourites, setFavourites, data, index }) => {

    const addHanlder = () => {
        const newFav = [...favourites]
        newFav.push(data[index])
        setFavourites(newFav)
    }
    return <button onClick={addHanlder}>add to fav</button>
}

export default AddToFav