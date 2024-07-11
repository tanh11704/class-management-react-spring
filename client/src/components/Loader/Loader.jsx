import React from 'react';

const Loader = () => {
    return (
        <div
            className="fixed top-0 left-0 bottom-0 right-0"
            style={{
                backgroundImage: "url(./images/loader.gif",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
        }}
        ></div>
    );
};

export default Loader;
