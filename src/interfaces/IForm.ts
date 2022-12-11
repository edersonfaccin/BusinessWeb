export interface IInput {
    property: any
    label?: string
    rules?: any[]
    required?: boolean
}

export interface ISelect {
    property: string
    label: string
    description: string
    list: any
    rules?: any[]
}