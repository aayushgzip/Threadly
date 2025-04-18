"use client"

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {useEffect, useState} from 'react';
import {Announcement} from '@/types';
import {getCoordinates, Location} from '@/services/location';
import {format} from 'date-fns';
import {VoteButtons} from '@/components/VoteButtons';
import {CommentSection} from '@/components/CommentSection';

const mockAnnouncements: Announcement[] = [
  {
    id: '1',
    title: 'Community BBQ',
    description: 'Join us for a community BBQ this Saturday!',
    date: new Date(),
    time: '12:00 PM',
    location: {address: 'Central Park, NY'},
    category: 'Community',
    upvotes: 10,
    downvotes: 2,
    comments: [],
  },
  {
    id: '2',
    title: 'React Meetup',
    description: 'Learn React with us this Sunday.',
    date: new Date(),
    time: '2:00 PM',
    location: {address: 'Online'},
    category: 'Technology',
    upvotes: 15,
    downvotes: 1,
    comments: [],
  },
];

const AnnouncementFeed = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);

  useEffect(() => {
    // Simulate fetching announcements from a database
    setAnnouncements(mockAnnouncements);
  }, []);

  return (
    <div className="w-full max-w-2xl">
      {announcements.map(announcement => (
        <AnnouncementCard key={announcement.id} announcement={announcement} />
      ))}
    </div>
  );
};

const AnnouncementCard = ({announcement}: { announcement: Announcement }) => {
  const [coordinates, setCoordinates] = useState<{ lat: number | null, lng: number | null }>({
    lat: null,
    lng: null,
  });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const coords = await getCoordinates(announcement.location);
        setCoordinates({lat: coords.lat, lng: coords.lng});
      } catch (error) {
        console.error('Failed to get coordinates', error);
        setCoordinates({lat: null, lng: null});
      }
    };

    fetchCoordinates();
  }, [announcement.location]);

  return (
    <Card className="mb-4 bg-white">
      <CardHeader>
        <CardTitle>{announcement.title}</CardTitle>
        <p className="text-sm text-muted-foreground">
          {format(announcement.date, 'PPP')} at {announcement.time}
        </p>
        {coordinates.lat && coordinates.lng && (
          <p className="text-sm text-muted-foreground">
            Location:{' '}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${coordinates.lat},${coordinates.lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {announcement.location.address}
            </a>
          </p>
        )}
      </CardHeader>
      <CardContent>
        <p>{announcement.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <VoteButtons announcementId={announcement.id} upvotes={announcement.upvotes}
                       downvotes={announcement.downvotes} />
        </div>
        <CommentSection announcementId={announcement.id} comments={announcement.comments} />
      </CardContent>
    </Card>
  );
};

export default AnnouncementFeed;

    