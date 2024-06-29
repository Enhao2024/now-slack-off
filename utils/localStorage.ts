// localStorageUtil.ts

type TimeUnit = 'hours' | 'minutes' | 'seconds';

// Helper function to validate time values
function validateTimeValue(value: number, unit: TimeUnit): boolean {
  switch (unit) {
    case 'hours':
      return value >= 0 && value < 24;
    case 'minutes':
    case 'seconds':
      return value >= 0 && value < 60;
    default:
      return false;
  }
}

// Check if localStorage is available
function isLocalStorageAvailable(): boolean {
  let result = false;
  try {
    result = typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  } catch (error) {
    console.error(error);
    result = false;
  }
  return result;
}

// Set hours in localStorage
export function setHours(hours: number): void {
  if (!validateTimeValue(hours, 'hours')) {
    throw new Error('Invalid value for hours. It should be between 0 and 23.');
  }
  if (isLocalStorageAvailable()) {
    localStorage.setItem('hours', hours.toString());
  }
}

// Get hours from localStorage
export function getHours(): number {
  if (isLocalStorageAvailable()) {
    const hours = localStorage.getItem('hours');
    return hours !== null ? parseInt(hours, 10) : 0;
  }
  return 0;
}

// Set minutes in localStorage
export function setMinutes(minutes: number): void {
  if (!validateTimeValue(minutes, 'minutes')) {
    throw new Error('Invalid value for minutes. It should be between 0 and 59.');
  }
  if (isLocalStorageAvailable()) {
    localStorage.setItem('minutes', minutes.toString());
  }
}

// Get minutes from localStorage
export function getMinutes(): number {
  if (isLocalStorageAvailable()) {
    const minutes = localStorage.getItem('minutes');
    return minutes !== null ? parseInt(minutes, 10) : 0;
  }
  return 0;
}

// Set seconds in localStorage
export function setSeconds(seconds: number): void {
  if (!validateTimeValue(seconds, 'seconds')) {
    throw new Error('Invalid value for seconds. It should be between 0 and 59.');
  }
  if (isLocalStorageAvailable()) {
    localStorage.setItem('seconds', seconds.toString());
  }
}

// Get seconds from localStorage
export function getSeconds(): number {
  if (isLocalStorageAvailable()) {
    const seconds = localStorage.getItem('seconds');
    return seconds !== null ? parseInt(seconds, 10) : 0;
  }
  return 0;
}

// mark visiting for today
export function setVisitedToday(): void {
  const today = new Date().toLocaleDateString();
  localStorage.setItem('visitedToday', today);
}

// check if user has visited today
export function isVisitedToday(): boolean {
  const today = new Date().toLocaleDateString();
  const visitedToday = localStorage.getItem('visitedToday');
  return visitedToday === today;
}
