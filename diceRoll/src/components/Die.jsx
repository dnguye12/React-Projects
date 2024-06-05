/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Die = (props) => {
    return (
        <FontAwesomeIcon
            icon={`fa-solid fa-dice-${props.dot}`}
            {...(props.isRolling && { shake: true })}
        />
    );
}

export default Die;
