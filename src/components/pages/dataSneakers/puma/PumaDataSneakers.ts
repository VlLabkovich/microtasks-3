
import pumaModel1
    from "../../../../assets/puma/krossovki-puma-trinity-open-road-393361-02-3-1000x800.jpg"
import pumaModel2
    from "../../../../assets/puma/krossovki-puma-trinity-mid-hybrid-leather-393985-02-3-1000x800.jpg"
import pumaModel3
    from "../../../../assets/puma/kedy-puma-suede-classic-xxi-374915-01-20-1000x800.jpg"


export type PumaItem = {
    id: number,
    brand: string;
    modelName: string;
    collection: string;
    price: string;
    picture: string;
}

export const pumaArr: PumaItem[] = [
    {
        id: 1,
        brand: 'puma',
        modelName: 'PUMA ADIFOM TRXN',
        collection: 'new collection1',
        price: '300200$',
        picture: pumaModel1,

    },
    {
        id: 2,
        brand: 'puma',
        modelName: 'PUMA ADIFOM SUPER',
        collection: 'new collection22',
        price: '100300$',
        picture: pumaModel2
    },
    {
        id: 3,
        brand: 'puma',
        modelName: 'PUMA SUPER SUPERSKI',
        collection: 'new collection333',
        price: '100400$',
        picture: pumaModel3
    }
]