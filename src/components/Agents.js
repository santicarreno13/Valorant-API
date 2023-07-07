import React from "react";

const Agents = ({ agents = [] }) => {
    return (
        <div className="my-5 p-5">
            <div className="row">
                {
                    agents.map((item, index) => (
                        <div key={index} className="col-md-4 mb-5">
                            <div className="card md-150px text-white bg-dark" style={{ minWidth: '150px' }}>
                                <img src={item.displayIcon} alt=""/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.displayName}</h5>
                                    <hr/>
                                        <p>Description: {item.description}</p>
                                        {item.role && (
                                        <p>Role: {item.role.displayName}</p>
                                        )}
                                        
                                    {item.abilities.map((ability, abilityIndex) => (
                                        <p key={abilityIndex}>{ability.slot}: {ability.displayName}</p>
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

export default Agents;