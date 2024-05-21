import {FC} from 'react';
import {IComment} from "./types.ts";

interface ICommentCardProps {
  comment: IComment,
}

export const CommentCard: FC<ICommentCardProps> = ({comment: {name, email, body, postId, id}}) => {
  return <>
    <div>
      <h1>
        {name}
      </h1>
      <p>
        <i>
          {email}
        </i>
      </p>
      <p>
        {body}
      </p>
      <p>
        postId: {postId}, id: {id}
      </p>
    </div>
  </>
}