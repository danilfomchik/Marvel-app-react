import "./skeleton.scss";

// TODO: on mobile screen hide while character is not selected
// TODO: add cross to clear char info
// TODO: clear suggestion when input is empty
const Skeleton = () => {
    return (
        <>
            <p className="char__select">
                Please select a character to see information
            </p>
            <div className="skeleton">
                <div className="pulse skeleton__header">
                    <div className="pulse skeleton__circle"></div>
                    <div className="pulse skeleton__mini"></div>
                </div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
                <div className="pulse skeleton__block"></div>
            </div>
        </>
    );
};

export default Skeleton;
