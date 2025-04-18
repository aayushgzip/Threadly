"use client"

import {useState} from 'react';
import {Button} from "@/components/ui/button";
import {ThumbsUp, ThumbsDown} from "lucide-react";

export const VoteButtons = ({announcementId, upvotes: initialUpvotes, downvotes: initialDownvotes}: {
  announcementId: string,
  upvotes: number,
  downvotes: number
}) => {
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [downvotes, setDownvotes] = useState(initialDownvotes);

  const handleUpvote = () => {
    setUpvotes(upvotes + 1);
  };

  const handleDownvote = () => {
    setDownvotes(downvotes + 1);
  };

  return (
    <div className="flex items-center space-x-2">
      <Button variant="outline" size="sm" onClick={handleUpvote}>
        <ThumbsUp className="mr-2 h-4 w-4" />
        {upvotes}
      </Button>
      <Button variant="outline" size="sm" onClick={handleDownvote}>
        <ThumbsDown className="mr-2 h-4 w-4" />
        {downvotes}
      </Button>
    </div>
  );
};
