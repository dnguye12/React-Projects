/* eslint-disable react/prop-types */
const Item = ({ id, title, checked, checkedItem, deleteItem }) => {


    return (
        <div className="rounded-lg border border-gray-200 text-white p-4 shadow-sm mb-2 flex justify-between items-center">
            <p className={`text-gray-700 ${checked ? 'line-through' : ''}`}>
                {title}
            </p>
            <div>
                <button className={`btn btn-outline ${checked ? 'btn-disabled' : ''} mr-2 shadow`} onClick={() => checkedItem({id, title, checked})}>Checked</button>
                <button className='btn btn-outline btn-error shadow' onClick={() => deleteItem(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Item