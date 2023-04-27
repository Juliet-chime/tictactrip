
export interface searchResultType {
    local_name: string;
    unique_name: string;
}

export type searchResutlProps = {
    item: searchResultType
}

export type searchProps = {
    onFocus?: (e: any) => void;
    isFocused?: boolean;
    id?: string;
    onSearchwrapperClick?: any;
    onHandleChange?: (e: any) => void;
    loading?: boolean;
    searchResult?: searchResultType[] | undefined;
}