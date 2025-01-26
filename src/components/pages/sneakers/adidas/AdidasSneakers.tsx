import React from "react";
import {AdidasItem} from "../../dataSneakers/adidas/AdidasDataSneakers";
import {Link} from "react-router-dom";

type AdidasProps = {
    adidasArr: AdidasItem[]
}

export const AdidasSneakers = ({adidasArr}: AdidasProps) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px"
        }}>
            {adidasArr.map(adidas => {

                return (
                    <Link key={adidas.id} to={`/adidas/${adidas.id}/${adidas.brand}`}>
                        <img
                            src={adidas.picture}
                            alt={adidas.brand}
                            style={{width: 300, height: "auto"}}
                        />
                    </Link>
                )
            })}
        </div>

    )
}

