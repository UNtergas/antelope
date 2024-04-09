export interface DataType {
    name: string;
    continent: string;
    weight: number;
    height: number;
    horns: string;
    picture: string;
}


export interface DataList {
    data: DataType[];
}