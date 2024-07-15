import {useParams} from "react-router-dom";
import {adidasArr, AdidasItem} from "../dataSneakers/adidas/AdidasDataSneakers";
import {pumaArr, PumaItem} from "../dataSneakers/puma/PumaDataSneakers";
import {nikeArr, NikeItem} from "../dataSneakers/nike/NikeDataSneakers";


interface SneakersModels {
    [key: string]: (AdidasItem[] | PumaItem[] | NikeItem[]);
}

const sneakersModels:(SneakersModels)= {
    "adidas" : adidasArr,
    "puma" : pumaArr,
    "nike" : nikeArr
};

export const Model = () => {

    const {brand, id} = useParams()

    // const params = useParams()
    // const id = params.id
    // const model = params.model

    console.log(id)
    console.log(brand)

    // const foundItem = sneakersModels[`${model}`].find(el => el.id === Number(id))
    // or
    const foundItem = brand ? sneakersModels[brand].find(el => el.id === Number(id)) : null

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
                    <p style={{fontSize: "40px"}}>{foundItem.modelName}</p>
                    <p>{foundItem.collection}</p>
                    <p>{foundItem.price}</p>
                    <img src={foundItem.picture} alt={foundItem.brand}
                         style={{width: "700px", height: "700px"}}/>
                </div>
                )
                : <p style={{fontSize: "40px"}}>Модель отсутствует</p>
            }
        </>

    )
}
