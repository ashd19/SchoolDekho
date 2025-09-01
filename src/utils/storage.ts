import { RecentlyViewed, School, FavoriteSchool, SchoolComparison, UserPreferences, SchoolApplication, Notification } from '@/types';

const RECENTLY_VIEWED_KEY = 'schooldekho_recently_viewed';
const USER_LOCATION_KEY = 'schooldekho_user_location';
const SEARCH_HISTORY_KEY = 'schooldekho_search_history';
const FAVORITES_KEY = 'schooldekho_favorites';
const COMPARISONS_KEY = 'schooldekho_comparisons';
const USER_PREFERENCES_KEY = 'schooldekho_user_preferences';
const APPLICATIONS_KEY = 'schooldekho_applications';
const NOTIFICATIONS_KEY = 'schooldekho_notifications';

// Recently Viewed Schools
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

// User Location
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

// Search History
export const addSearchHistory = (query: string): void => {
  try {
    const history = getSearchHistory();
    const existingIndex = history.findIndex(item => item.query === query);
    
    if (existingIndex !== -1) {
      history.splice(existingIndex, 1);
    }
    
    history.unshift({
      query,
      timestamp: new Date().toISOString(),
      resultsCount: 0 // Will be updated when results are shown
    });
    const limited = history.slice(0, 10);
    
    localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(limited));
  } catch (error) {
    console.error('Error saving search history:', error);
  }
};

export const getSearchHistory = (): Array<{query: string, timestamp: string, resultsCount: number}> => {
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

// Favorites
export const addToFavorites = (schoolId: string, notes?: string): void => {
  try {
    const favorites = getFavorites();
    const existingIndex = favorites.findIndex(item => item.schoolId === schoolId);
    
    if (existingIndex !== -1) {
      // Update existing favorite
      favorites[existingIndex].notes = notes;
      favorites[existingIndex].addedAt = new Date().toISOString();
    } else {
      // Add new favorite
      favorites.push({
        schoolId,
        addedAt: new Date().toISOString(),
        notes
      });
    }
    
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  } catch (error) {
    console.error('Error saving favorite:', error);
  }
};

export const removeFromFavorites = (schoolId: string): void => {
  try {
    const favorites = getFavorites();
    const filtered = favorites.filter(item => item.schoolId !== schoolId);
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error removing favorite:', error);
  }
};

export const getFavorites = (): FavoriteSchool[] => {
  try {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading favorites:', error);
    return [];
  }
};

export const isFavorite = (schoolId: string): boolean => {
  const favorites = getFavorites();
  return favorites.some(item => item.schoolId === schoolId);
};

export const getFavoriteSchools = (schools: School[]): School[] => {
  const favorites = getFavorites();
  const schoolIds = favorites.map(item => item.schoolId);
  
  return schools
    .filter(school => schoolIds.includes(school.id))
    .sort((a, b) => {
      const aIndex = schoolIds.indexOf(a.id);
      const bIndex = schoolIds.indexOf(b.id);
      return aIndex - bIndex;
    });
};

// School Comparisons
export const createComparison = (schoolIds: string[]): string => {
  try {
    const comparisons = getComparisons();
    const newComparison: SchoolComparison = {
      id: `comp_${Date.now()}`,
      schools: schoolIds,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    comparisons.push(newComparison);
    localStorage.setItem(COMPARISONS_KEY, JSON.stringify(comparisons));
    
    return newComparison.id;
  } catch (error) {
    console.error('Error creating comparison:', error);
    return '';
  }
};

export const getComparisons = (): SchoolComparison[] => {
  try {
    const stored = localStorage.getItem(COMPARISONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading comparisons:', error);
    return [];
  }
};

export const getComparison = (id: string): SchoolComparison | null => {
  const comparisons = getComparisons();
  return comparisons.find(comp => comp.id === id) || null;
};

export const updateComparison = (id: string, schoolIds: string[]): void => {
  try {
    const comparisons = getComparisons();
    const index = comparisons.findIndex(comp => comp.id === id);
    
    if (index !== -1) {
      comparisons[index].schools = schoolIds;
      comparisons[index].updatedAt = new Date().toISOString();
      localStorage.setItem(COMPARISONS_KEY, JSON.stringify(comparisons));
    }
  } catch (error) {
    console.error('Error updating comparison:', error);
  }
};

export const deleteComparison = (id: string): void => {
  try {
    const comparisons = getComparisons();
    const filtered = comparisons.filter(comp => comp.id !== id);
    localStorage.setItem(COMPARISONS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting comparison:', error);
  }
};

// User Preferences
export const saveUserPreferences = (preferences: UserPreferences): void => {
  try {
    localStorage.setItem(USER_PREFERENCES_KEY, JSON.stringify(preferences));
  } catch (error) {
    console.error('Error saving user preferences:', error);
  }
};

export const getUserPreferences = (): UserPreferences | null => {
  try {
    const stored = localStorage.getItem(USER_PREFERENCES_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error reading user preferences:', error);
    return null;
  }
};

export const updateUserPreferences = (updates: Partial<UserPreferences>): void => {
  try {
    const current = getUserPreferences() || getDefaultPreferences();
    const updated = { ...current, ...updates };
    saveUserPreferences(updated);
  } catch (error) {
    console.error('Error updating user preferences:', error);
  }
};

export const getDefaultPreferences = (): UserPreferences => {
  return {
    preferredBoards: ['CBSE', 'ICSE'],
    preferredLocations: [],
    budgetRange: { min: 50000, max: 500000 },
    preferredFacilities: [],
    preferredSports: [],
    specialNeeds: false,
    internationalCurriculum: false
  };
};

// School Applications
export const saveApplication = (application: SchoolApplication): void => {
  try {
    const applications = getApplications();
    const index = applications.findIndex(app => app.id === application.id);
    
    if (index !== -1) {
      applications[index] = application;
    } else {
      applications.push(application);
    }
    
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
  } catch (error) {
    console.error('Error saving application:', error);
  }
};

export const getApplications = (): SchoolApplication[] => {
  try {
    const stored = localStorage.getItem(APPLICATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading applications:', error);
    return [];
  }
};

export const getApplication = (id: string): SchoolApplication | null => {
  const applications = getApplications();
  return applications.find(app => app.id === id) || null;
};

export const updateApplicationStatus = (id: string, status: SchoolApplication['status']): void => {
  try {
    const applications = getApplications();
    const index = applications.findIndex(app => app.id === id);
    
    if (index !== -1) {
      applications[index].status = status;
      applications[index].updatedAt = new Date().toISOString();
      localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
    }
  } catch (error) {
    console.error('Error updating application status:', error);
  }
};

// Notifications
export const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>): void => {
  try {
    const notifications = getNotifications();
    const newNotification: Notification = {
      ...notification,
      id: `notif_${Date.now()}`,
      timestamp: new Date().toISOString(),
      read: false
    };
    
    notifications.unshift(newNotification);
    const limited = notifications.slice(0, 50); // Keep only last 50
    
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(limited));
  } catch (error) {
    console.error('Error adding notification:', error);
  }
};

export const getNotifications = (): Notification[] => {
  try {
    const stored = localStorage.getItem(NOTIFICATIONS_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading notifications:', error);
    return [];
  }
};

export const markNotificationAsRead = (id: string): void => {
  try {
    const notifications = getNotifications();
    const index = notifications.findIndex(notif => notif.id === id);
    
    if (index !== -1) {
      notifications[index].read = true;
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
    }
  } catch (error) {
    console.error('Error marking notification as read:', error);
  }
};

export const markAllNotificationsAsRead = (): void => {
  try {
    const notifications = getNotifications();
    notifications.forEach(notif => notif.read = true);
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  } catch (error) {
    console.error('Error marking all notifications as read:', error);
  }
};

export const deleteNotification = (id: string): void => {
  try {
    const notifications = getNotifications();
    const filtered = notifications.filter(notif => notif.id !== id);
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(filtered));
  } catch (error) {
    console.error('Error deleting notification:', error);
  }
};

export const getUnreadNotificationsCount = (): number => {
  const notifications = getNotifications();
  return notifications.filter(notif => !notif.read).length;
};

// Utility functions
export const clearAllData = (): void => {
  try {
    localStorage.removeItem(RECENTLY_VIEWED_KEY);
    localStorage.removeItem(USER_LOCATION_KEY);
    localStorage.removeItem(SEARCH_HISTORY_KEY);
    localStorage.removeItem(FAVORITES_KEY);
    localStorage.removeItem(COMPARISONS_KEY);
    localStorage.removeItem(USER_PREFERENCES_KEY);
    localStorage.removeItem(APPLICATIONS_KEY);
    localStorage.removeItem(NOTIFICATIONS_KEY);
  } catch (error) {
    console.error('Error clearing all data:', error);
  }
};

export const exportUserData = (): string => {
  try {
    const data = {
      recentlyViewed: getRecentlyViewed(),
      userLocation: getUserLocation(),
      searchHistory: getSearchHistory(),
      favorites: getFavorites(),
      comparisons: getComparisons(),
      userPreferences: getUserPreferences(),
      applications: getApplications(),
      notifications: getNotifications(),
      exportDate: new Date().toISOString()
    };
    
    return JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error exporting user data:', error);
    return '';
  }
};
