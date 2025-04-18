import NewAnnouncementButton from '@/components/NewAnnouncementButton';
import AnnouncementFeed from '@/components/AnnouncementFeed';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <NewAnnouncementButton />
      <AnnouncementFeed />
    </div>
  );
}
