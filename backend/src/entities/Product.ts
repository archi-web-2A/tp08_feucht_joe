export class Product {
    constructor(
        public readonly name: string,
        public readonly description: string,
        public readonly brand: string,
        public readonly buildProductionYear: number,
        public readonly kilometers: number,
        public readonly licenceType: string,
        public readonly cubicCentimetre: number,
        public readonly color: string,
        public readonly motorbikeType: string,
        public readonly price: number,
        public readonly images: string[],
    ) {}
}