import React from 'react';
import { Card, Button } from 'react-bootstrap';
import moment from 'moment';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { REMOVE_POST } from '../utils/mutations';

function FeedCard({ post, refetch }) {
   const { _id } = Auth.getProfile();

   const datePosted = moment(post.date).format('h:mm a');

   const [removePost] = useMutation(REMOVE_POST);
   const handlePostDelete = async ({ target }) => {
      const res = await removePost({ variables: { postId: target.value } });
      if (res) refetch();
   };

   return (
      <>
         <Card className="my-2">
            <Card.Header>
               {post.postedBy.name} - ({post.username})
            </Card.Header>
            <Card.Body>
               <Card.Title>{post.content}</Card.Title>
            </Card.Body>
            <Card.Footer>
               Posted at {datePosted}
               {_id === post.postedBy._id ? (
                  <Button variant="danger" className="mx-3" size="sm" onClick={handlePostDelete} value={post._id}>
                     Delete
                  </Button>
               ) : (
                  <p></p>
               )}
            </Card.Footer>
         </Card>
      </>
   );
}
export default FeedCard;
