const Spinner = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
                margin: 'auto',
                background: 'none',
                display: 'block',
                shapeRendering: 'auto',
            }}
            width="180px"
            height="180px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid">
            <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#e15b64" stroke="none">
                <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="1s"
                    repeatCount="indefinite"
                    keyTimes="0;1"
                    values="0 50 51;360 50 51"></animateTransform>
            </path>
        </svg>
    );
};

export default Spinner;
