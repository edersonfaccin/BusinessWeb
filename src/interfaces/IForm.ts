export interface IInput {
    label: string
    required?: boolean
    value: any
    onChange: any
    invalid?: boolean
    textError?: string
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