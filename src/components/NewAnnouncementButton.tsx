import {Button} from '@/components/ui/button';
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog';
import AnnouncementForm from '@/components/AnnouncementForm';

const NewAnnouncementButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Make New Announcement</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Announcement</DialogTitle>
          <DialogDescription>
            Make a new announcement to share with the community.
          </DialogDescription>
        </DialogHeader>
        <AnnouncementForm />
      </DialogContent>
    </Dialog>
  );
};

export default NewAnnouncementButton;
