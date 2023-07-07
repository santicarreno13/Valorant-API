import React from "react";

const Weapons = ({ weapons = [] }) => {
    return (
        <div className="my-5 p-5">
            <div className="row">
                {
                    weapons.map((item, index) => (
                        <div key={index} className="col-md-4 mb-5">
                            <div className="card md-150px text-white bg-dark" style={{ minWidth: '150px' }}>
                                <img src={item.displayIcon} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.displayName}</h5>
                                    <hr/>
                                    {item.chromas.map((chroma, chromaIndex) => (
                                        <p key={chromaIndex}>Chromas: {chroma.displayName}</p>
                                    ))}
                                    {item.levels.map((level, levelIndex) => (
                                        <p key={levelIndex}>Levels: {level.displayName}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Weapons;