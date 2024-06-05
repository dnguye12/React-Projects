import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

/* eslint-disable react/prop-types */
const Choice = ({icon, value, onChoice}) => {
    return (
        <button onClick={() => onChoice(value)}>
            <FontAwesomeIcon icon={icon} /> {value}
        </button>
    )
}

export default Choice;