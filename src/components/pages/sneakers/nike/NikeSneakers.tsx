import React from "react";
import {Link} from "react-router-dom";
import {NikeItem} from "../../dataSneakers/nike/NikeDataSneakers";

type NikeProps = {
    nikeArr: NikeItem[]
}

export const NikeSneakers = ({nikeArr}: NikeProps) => {

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "30px"
        }}>
            {nikeArr.map(nike => {

                return (
                    <>
                        <Link key={nike.id} to={`/nike/${nike.id}/${nike.brand}`}>
                            <img
                                src={nike.picture}
                                alt={nike.brand}
                                style={{width: 300, height: "auto"}}
                            />
                        </Link>
                    </>
                )
            })}
        </div>

    )
}

