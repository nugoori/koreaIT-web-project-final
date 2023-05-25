interface PatchProductDto {
    boardNumber : number;
    productNumber: number;
    productName: string | null;
    productPrice: string | null;
    productUrl: string | null;
    productImgUrl: string | null;
}

export default PatchProductDto;