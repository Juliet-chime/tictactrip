import { searchResultType } from "../searchComponent/typeProps";

export type topCitiesTypes = {
    label?: string;
    topCities?: searchResultType[];
    showBtn?: boolean;
    loading?: boolean;
}