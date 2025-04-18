"use client"

import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";

interface Comment {
  id: string;
  text: string;
  author: string;
  replies: Comment[];
}

export const CommentSection = ({announcementId, comments: initialComments}: {
  announcementId: string,
  comments: Comment[]
}) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const comment = {
        id: Date.now().toString(),
        text: newComment,
        author: 'User',
        replies: [],
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Comments</h3>
      {comments.map(comment => (
        <div key={comment.id} className="mb-2 p-2 border rounded-md">
          <p className="text-sm">{comment.text}</p>
          <p className="text-xs text-muted-foreground">By {comment.author}</p>
        </div>
      ))}
      <Textarea
        placeholder="Add a comment..."
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
        className="w-full mb-2"
      />
      <Button onClick={handleAddComment} size="sm">Add Comment</Button>
    </div>
  );
};
