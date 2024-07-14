import {useParams} from "react-router-dom";
import {adidasArr} from "../../dataSneakers/adidas/AdidasDataSneakers";

export const AdidasModel = () => {
    const {id} = useParams<{ id: string }>()
    const foundItem = adidasArr.find(el => el.id === Number(id));
    console.log(foundItem)
    return (
        <>
            <>
                {/*{adidasArr.filter(el => el.id === Number(id)).map(el => {*/}
                {/*    return <div key={el.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>*/}
                {/*        <p>{el.model}</p>*/}
                {/*        <img src={el.picture} alt={el.model} style={{width: "700px", height: "700px"}}/>*/}
                {/*        <p>{el.collection}</p>*/}
                {/*        <p>{el.price}</p>*/}
                {/*    </div>*/}
                {/*})}*/}
            </>

            {foundItem ? (
                <div key={foundItem.id} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                    <p style={{fontSize: "40px"}}>{foundItem.model}</p>
                    <p>{foundItem.collection}</p>
                    <p>{foundItem.price}</p>
                    <img src={foundItem.picture} alt={foundItem.model} style={{width: "700px", height: "700px"}}/>
                </div>
            ) : (
                <p>Модель отсутствует</p>
            )}

        </>
    )
}
