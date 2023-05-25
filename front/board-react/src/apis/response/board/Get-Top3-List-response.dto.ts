interface GetTop3ListResponseDto {
    boardNumber : number;
    boardContent : string | null;
    boardImgUrl : string;
    boardWriteDateTime : string;
    writerNickname : string;
    writerProfileUrl : string;
    viewCount : number;
    commentCount : number;
    likeCount : number;
}

export default GetTop3ListResponseDto;