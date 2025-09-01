import { UserLocation } from '@/types';

export const getUserLocation = (): Promise<UserLocation> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by this browser.'));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          const address = await reverseGeocode(latitude, longitude);
          resolve({
            lat: latitude,
            lng: longitude,
            address
          });
        } catch (error) {
          // Fallback to coordinates if reverse geocoding fails
          resolve({
            lat: latitude,
            lng: longitude,
            address: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          });
        }
      },
      (_error) => {
        reject(new Error('Unable to retrieve your location.'));
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000 // 5 minutes
      }
    );
  });
};

export const reverseGeocode = async (lat: number, lng: number): Promise<string> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=10`
    );
    const data = await response.json();
    
    if (data.display_name) {
      return data.display_name;
    }
    
    return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  } catch (_error) {
    return `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  }
};

export const searchLocation = async (query: string): Promise<Array<{display_name: string, lat: string, lon: string}>> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=in&limit=5`
    );
    const data = await response.json();
    return data;
  } catch (_error) {
    return [];
  }
};

export const formatDistance = (distance: number): string => {
  if (distance < 1) {
    return `${Math.round(distance * 1000)}m`;
  }
  return `${distance.toFixed(1)}km`;
};

export const formatAddress = (address: string): string => {
  const parts = address.split(', ');
  if (parts.length > 3) {
    return parts.slice(0, 3).join(', ') + '...';
  }
  return address;
};
