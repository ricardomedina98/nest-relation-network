export class AddressDto {
    country: {
        id: number;
        name: string;
        iso2: string;
    };

    state: {
        id: number;
        name: string;
        iso2: string;
    }

    city: {
        id: number;
        name: string;
        stateCode: string;
    }

    postalCode: number;
}