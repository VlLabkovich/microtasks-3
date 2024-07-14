import {useParams} from "react-router-dom";
import {adidasArr} from "../../dataSneakers/adidas/AdidasDataSneakers";

export const AdidasModel = () => {
    const {id} = useParams<{id: string}>()
    // or
    // const params = useParams<{ id: string }>()
    // const id = params.id


    const foundItem = adidasArr.find(el => el.id === Number(id));

    // Variation 1
    //
    // return (
    //
    //     <div style={{textAlign:"center"}}>
    //         <h2>{adidasArr[Number(params.id)].model}</h2>
    //         <h3>{adidasArr[Number(params.id)].collection}</h3>
    //         <h4>{adidasArr[Number(params.id)].price}</h4>
    //         <img src={adidasArr[Number(params.id)].picture}/>
    //
    //     </div>
    // )

    // Variation 2
    //
    // return (
    // <div style={{textAlign: 'center', fontSize: "30px"}}>
    // <>
    // {/*{adidasArr.filter(el => el.id === Number(id)).map(el => {*/}
    // {/*    return <div key={el.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>*/}
    // {/*        <p>{el.model}</p>*/}
    // {/*        <img src={el.picture} alt={el.model} style={{width: "700px", height: "700px"}}/>*/}
    // {/*        <p>{el.collection}</p>*/}
    // {/*        <p>{el.price}</p>*/}
    // {/*    </div>*/}
    // {/*})}*/}
    // </>

    return (
        <>
            {foundItem ? (
                <div key={foundItem.id}
                     style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p style={{fontSize: "40px"}}>{foundItem.model}</p>
                    <p>{foundItem.collection}</p>
                    <p>{foundItem.price}</p>
                    <img src={foundItem.picture} alt={foundItem.model}
                         style={{width: "700px", height: "700px"}}/>
                </div>
                )
                : <p style={{fontSize: "40px"}}>Модель отсутствует</p>
            }
        </>

    )
}
