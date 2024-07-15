
import nikeModel1
    from "../../../../assets/nike/nike-red-air-max-2017-id-womens-running-shoe.webp"
import nikeModel2
    from "../../../../assets/nike/88b3cfa3298343cd88bd1fe84739baeb.jpg"
import nikeModel3
    from "../../../../assets/nike/snimok_ekrana_2019-06-09_v_19_28_56-1000x1000.png"


export type NikeItem = {
    id: number,
    brand: string;
    modelName: string;
    collection: string;
    price: string;
    picture: string;
}

export const nikeArr: NikeItem[] = [
    {
        id: 1,
        brand: 'nike',
        modelName: 'NIKE TRXN',
        collection: 'new collection1',
        price: '300200$',
        picture: nikeModel1,

    },
    {
        id: 2,
        brand: 'nike',
        modelName: 'NIKE SUPER',
        collection: 'new collection22',
        price: '100300$',
        picture: nikeModel2
    },
    {
        id: 3,
        brand: 'nike',
        modelName: 'NIKE SUPERSKI',
        collection: 'new collection333',
        price: '100400$',
        picture: nikeModel3
    }
]