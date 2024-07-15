
import adidasModel1
    from "../../../../assets/adidas/Superstar_XLG_Shoes_Black_IG9777_01_standard.webp"
import adidasModel2
    from "../../../../assets/adidas/AdiFOM_TRXN_Shoes_Black_IG7453_01_standard.webp"
import adidasModel3
    from "../../../../assets/adidas/PostMove_Mid_Cloudfoam_Super_Lifestyle_Basketball_Mid_Classic_Shoes_Black_GY7163_01_standard.webp"


export type AdidasItem = {
    id: number,
    brand: string;
    modelName: string;
    collection: string;
    price: string;
    picture: string;
}

export const adidasArr: AdidasItem[] = [
    {
        id: 1,
        brand: 'adidas',
        modelName: 'ADIDAS ADIFOM TRXN',
        collection: 'new collection1',
        price: '100200$',
        picture: adidasModel1,

    },
    {
        id: 2,
        brand: 'adidas',
        modelName: 'ADIDAS ADIFOM SUPER',
        collection: 'new collection22',
        price: '200300$',
        picture: adidasModel2
    },
    {
        id: 3,
        brand: 'adidas',
        modelName: 'ADIDAS SUPER SUPERSKI',
        collection: 'new collection333',
        price: '300400$',
        picture: adidasModel3
    }
]