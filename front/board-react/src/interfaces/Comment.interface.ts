interface Comment {
    boardNumber : number;
    commentContent : string;
    commentNumber : number;
    writerDate : string;
    writerEmail : string;
    writerNickname : string;
    writerProfileUrl? : string | null;
}
export default Comment;