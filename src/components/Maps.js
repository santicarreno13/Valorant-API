import React from "react";

const Maps = ({ maps = [] }) => {

  return (
    <div className="my-5 p-5">
      <div className="row">
        {maps.map((item) => (
          <div key={item.uuid} className="col-md-4 mb-5">
            <div
              className="card md-150px text-white bg-dark"
              style={{ minWidth: "150px" }}
            >
              <img src={item.displayIcon} alt="" />
              <div className="card-body">
                <h5 className="card-title">{item.displayName}</h5>
                <hr />
                {item.coordinates && <p>Coordinates: {item.coordinates}</p>}
                {item.callouts ? item.callouts.map((callout, calloutIndex) => (
                  <div key={calloutIndex}>
                    <p>{callout.superRegionName}</p>
                    <p>{callout.regionName}</p>
                  </div>
                )): 'no disponible'}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maps;
