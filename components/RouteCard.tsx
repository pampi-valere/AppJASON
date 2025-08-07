import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin, Clock, Route, Bookmark } from 'lucide-react-native';

interface RouteCardProps {
  route: {
    id: number;
    name: string;
    location: string;
    distance: string;
    duration: string;
    difficulty: string;
    image: string;
    saves: number;
    comments: number;
  };
  onPress?: () => void;
}

export default function RouteCard({ route, onPress }: RouteCardProps) {
  const [isSaved, setIsSaved] = React.useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#00C851';
      case 'moderate': return '#FFA500';
      case 'hard': return '#FF4444';
      default: return '#CCCCCC';
    }
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: route.image }} style={styles.image} />
        <TouchableOpacity
          style={styles.bookmarkButton}
          onPress={() => setIsSaved(!isSaved)}
        >
          <Bookmark
            size={20}
            color={isSaved ? '#00C851' : '#FFFFFF'}
            fill={isSaved ? '#00C851' : 'transparent'}
          />
        </TouchableOpacity>
        <View style={[styles.difficultyBadge, { backgroundColor: getDifficultyColor(route.difficulty) }]}>
          <Text style={styles.difficultyText}>{route.difficulty}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.routeName}>{route.name}</Text>
        
        <View style={styles.locationRow}>
          <MapPin size={14} color="#666666" />
          <Text style={styles.locationText}>{route.location}</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Route size={14} color="#666666" />
            <Text style={styles.statText}>{route.distance}</Text>
          </View>
          <View style={styles.statItem}>
            <Clock size={14} color="#666666" />
            <Text style={styles.statText}>{route.duration}</Text>
          </View>
        </View>

        <View style={styles.actionsRow}>
          <Text style={styles.saveCount}>{route.saves} saves</Text>
          <Text style={styles.commentCount}>{route.comments} comments</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
  },
  bookmarkButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  difficultyBadge: {
    position: 'absolute',
    bottom: 12,
    left: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  difficultyText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  content: {
    padding: 16,
    gap: 8,
  },
  routeName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  locationText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginTop: 4,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  statText: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  saveCount: {
    fontSize: 12,
    color: '#888888',
  },
  commentCount: {
    fontSize: 12,
    color: '#888888',
  },
});