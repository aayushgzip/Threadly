"use client"

import {categorizeAnnouncement} from '@/ai/flows/categorize-announcement';
import {Button} from '@/components/ui/button';
import {Calendar} from '@/components/ui/calendar';
import {CalendarIcon} from 'lucide-react';
import {cn} from '@/lib/utils';
import {format} from 'date-fns';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {Textarea} from '@/components/ui/textarea';
import {Input} from '@/components/ui/input';
import {useState} from 'react';

const AnnouncementForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [categories, setCategories] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await categorizeAnnouncement({title, description});
      setCategories(result.categories);
      alert(`Categories: ${result.categories.join(', ')}`);
    } catch (error) {
      console.error('GenAI error:', error);
      alert('Could not categorize announcement. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-2">
        <label htmlFor="title">Title</label>
        <Input id="title" value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div className="grid gap-2">
        <label htmlFor="description">Description</label>
        <Textarea id="description" value={description} onChange={e => setDescription(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2">
          <label htmlFor="date">Date</label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={'outline'}
                className={cn(
                  'w-[240px] justify-start text-left font-normal',
                  !date && 'text-muted-foreground'
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, 'PPP') : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={d => d > new Date()}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="grid gap-2">
          <label htmlFor="time">Time</label>
          <Input id="time" type="time" value={time} onChange={e => setTime(e.target.value)} />
        </div>
      </div>
      <div className="grid gap-2">
        <label htmlFor="location">Location</label>
        <Input id="location" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
      <Button type="submit">Submit Announcement</Button>
    </form>
  );
};

export default AnnouncementForm;
