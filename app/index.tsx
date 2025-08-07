import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function IndexScreen() {
  const router = useRouter();

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      // Simulate async auth check, replace with actual logic
      const isAuthenticated = false;

      if (isAuthenticated) {
        router.replace('/(tabs)');
      } else {
        router.replace('/auth/welcome');
      }
    };

    checkAuthAndRedirect();
  }, []);

  // Optional: Show a loader while redirecting
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
