export interface IInput {
    property: any
    label?: string
    rules?: any[]
}

export interface IListSelect {
    value: any
    label: string
}

export interface ISelect {
    collection: string
    field: string
    label: string
    required?: false
    list: IListSelect[]
}