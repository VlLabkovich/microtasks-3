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
            {adidasArr.map(el => {

                return (
                    <>
                        <Link key={el.id} to={`/adidas/${el.id}`}>
                            <img
                                src={el.picture}
                                alt={el.model}
                                style={{width: 300, height: "auto"}}
                            />
                        </Link>
                    </>
                )
            })}
        </div>

    )
}

