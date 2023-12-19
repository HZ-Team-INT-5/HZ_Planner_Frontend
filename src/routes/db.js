import { createClient } from '@supabase/supabase-js';
import { writable } from 'svelte/store';
// import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE	_KEY } from '$env/static/public';

const PUBLIC_SUPABASE_URL = 'https://ebeuycfrffrormwdrcnm.supabase.co';
const PUBLIC_SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViZXV5Y2ZyZmZyb3Jtd2RyY25tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA2NDQwMzgsImV4cCI6MjAxNjIyMDAzOH0.kNbKs9c0aDFFaeDOE2iP2KzI26LmWtB4VGcBD-zEmK8';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY);

const userStore = writable();

export async function fetchCalendarData() {
	try {
	  const { data: calendar, error } = await supabase
		.from('calendar')
		.select('calendarid');
  
	  if (error) {
		throw error;
	  }
  
	  console.log(calendar);
  
	  return calendar;
	} catch (error) {
	  console.error('Error fetching calendar data:', error);
	  throw error;
	}
  }