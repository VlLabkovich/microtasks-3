import React from "react";
import {Link} from "react-router-dom";
import {PumaItem} from "../../dataSneakers/puma/PumaDataSneakers";

type PumaProps = {
    pumaArr: PumaItem[]
}

export const PumaSneakers = ({pumaArr}: PumaProps) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px"
        }}>
            {pumaArr.map(puma => {

                return (
                    <Link key={puma.id} to={`/puma/${puma.id}/${puma.brand}`}>
                        <img
                            src={puma.picture}
                            alt={puma.brand}
                            style={{width: 300, height: "auto"}}
                        />
                    </Link>
                )
            })}
        </div>

    )
}

