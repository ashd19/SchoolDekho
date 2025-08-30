import { RecentlyViewed, School } from '@/types';

const RECENTLY_VIEWED_KEY = 'schooldekho_recently_viewed';
const USER_LOCATION_KEY = 'schooldekho_user_location';
const SEARCH_HISTORY_KEY = 'schooldekho_search_history';

export const addRecentlyViewed = (schoolId: string): void => {
  try {
    const recentlyViewed = getRecentlyViewed();
    const existingIndex = recentlyViewed.findIndex(item => item.schoolId === schoolId);
    
    if (existingIndex !== -1) {
      // Remove existing entry
      recentlyViewed.splice(existingIndex, 1);
    }
    
    // Add to beginning
    recentlyViewed.unshift({
      schoolId,
      viewedAt: new Date().toISOString()
    });
    
    // Keep only last 10
    const limited = recentlyViewed.slice(0, 10);
    
    localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(limited));
  } catch (error) {
    console.error('Error saving recently viewed:', error);
  }
};

export const getRecentlyViewed = (): RecentlyViewed[] => {
  try {
    const stored = localStorage.getItem(RECENTLY_VIEWED_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading recently viewed:', error);
    return [];
  }
};

export const getRecentlyViewedSchools = (schools: School[]): School[] => {
  const recentlyViewed = getRecentlyViewed();
  const schoolIds = recentlyViewed.map(item => item.schoolId);
  
  return schools
    .filter(school => schoolIds.includes(school.id))
    .sort((a, b) => {
      const aIndex = schoolIds.indexOf(a.id);
      const bIndex = schoolIds.indexOf(b.id);
      return aIndex - bIndex;
    });
};

export const saveUserLocation = (location: { lat: number; lng: number; address: string }): void => {
  try {
    localStorage.setItem(USER_LOCATION_KEY, JSON.stringify(location));
  } catch (error) {
    console.error('Error saving user location:', error);
  }
};

export const getUserLocation = (): { lat: number; lng: number; address: string } | null => {
  try {
    const stored = localStorage.getItem(USER_LOCATION_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error reading user location:', error);
    return null;
  }
};

export const addSearchHistory = (query: string): void => {
  try {
    const history = getSearchHistory();
    const existingIndex = history.indexOf(query);
    
    if (existingIndex !== -1) {
      history.splice(existingIndex, 1);
    }
    
    history.unshift(query);
    const limited = history.slice(0, 10);
    
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(limited));
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

export const getSearchHistory = (): string[] => {
  try {
    const stored = localStorage.getItem(SEARCH_HISTORY_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading search history:', error);
    return [];
  }
};

export const clearSearchHistory = (): void => {
  try {
    localStorage.removeItem(SEARCH_HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing search history:', error);
  }
};
