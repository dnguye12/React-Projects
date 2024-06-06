/* eslint-disable react/prop-types */
const Adder = ({newItem, setNewItem, addItem}) => {
    const onChange = (event) => {
        setNewItem(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        addItem(newItem)
        setNewItem("")
    }

    return (
        <form className="flex justify-between items-center my-6"  onSubmit={onSubmit}>
            <input type="text" value={newItem} onChange={onChange} placeholder="Add new todo item" className="input input-bordered w-full bg-white mr-4 shadow-sm"></input>
            <button type="submit" className="btn bg-gray-700 text-white shadow">Add item</button>
        </form>
    )
}

export default Adder