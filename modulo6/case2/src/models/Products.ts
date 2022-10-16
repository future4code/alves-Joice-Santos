export interface IProductDB {
    id: number,
    name: string,
    tags: string[]
}

export class Product {
    constructor(
        private id: number,
        private name: string,
        private tags: string[],
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getTags = () => {
        return this.tags
    }

    public setId = (newId: number) => {
        this.id = newId
    }

    public setName = (newName: string) => {
        this.name = newName
    }

    public setTags = (newTag: string[]) => {
        this.tags = newTag
    }
}