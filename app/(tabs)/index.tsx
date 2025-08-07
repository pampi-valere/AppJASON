import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, MapPin, Clock, Users } from 'lucide-react-native';

export default function DiscoverScreen() {
  const [searchText, setSearchText] = useState('');

  const featuredRoutes = [
    {
      id: 1,
      name: 'Mountain Ridge',
      location: 'Colorado, USA',
      distance: '145 km',
      duration: '3h 45m',
      difficulty: 'Moderate',
      image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=400',
      saves: 234,
      comments: 45,
    },
    {
      id: 2,
      name: 'Coastal Highway',
      location: 'California, USA',
      distance: '89 km',
      duration: '2h 15m',
      difficulty: 'Easy',
      image: 'https://images.pexels.com/photos/1534604/pexels-photo-1534604.jpeg?auto=compress&cs=tinysrgb&w=400',
      saves: 567,
      comments: 123,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning!</Text>
            <Text style={styles.subtitle}>Ready to find a route that's perfect for you?</Text>
          </View>
          <TouchableOpacity style={styles.profileButton}>
            <Text style={styles.profileInitial}>JG</Text>
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#666666" />
            <TextInput
              style={styles.searchInput}
              placeholder="Search routes"
              placeholderTextColor="#666666"
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        {/* Category Pills */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          <TouchableOpacity style={[styles.categoryPill, styles.activePill]}>
            <Text style={[styles.categoryText, styles.activeCategoryText]}>Road biking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryPill}>
            <Text style={styles.categoryText}>Mountain biking</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryPill}>
            <Text style={styles.categoryText}>Hiking</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Discover</Text>
          <Text style={styles.statsSubtitle}>100,000+ routes</Text>
          <Text style={styles.statsDescription}>around the world</Text>
        </View>

        {/* Featured Routes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Routes</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        {featuredRoutes.map((route) => (
          <TouchableOpacity key={route.id} style={styles.routeCard}>
            <Image source={{ uri: route.image }} style={styles.routeImage} />
            <View style={styles.routeInfo}>
              <View style={styles.routeHeader}>
                <Text style={styles.routeName}>{route.name}</Text>
                <TouchableOpacity style={styles.followButton}>
                  <Text style={styles.followButtonText}>Follow</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.routeDetails}>
                <MapPin size={14} color="#666666" />
                <Text style={styles.routeLocation}>{route.location}</Text>
              </View>
              <View style={styles.routeStats}>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{route.distance}</Text>
                  <Text style={styles.statLabel}>Distance</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{route.duration}</Text>
                  <Text style={styles.statLabel}>Duration</Text>
                </View>
                <View style={styles.statItem}>
                  <Text style={styles.statValue}>{route.difficulty}</Text>
                  <Text style={styles.statLabel}>Difficulty</Text>
                </View>
              </View>
              <View style={styles.routeActions}>
                <View style={styles.actionItem}>
                  <Text style={styles.actionCount}>{route.saves}</Text>
                  <Text style={styles.actionLabel}>Saves</Text>
                </View>
                <View style={styles.actionItem}>
                  <Text style={styles.actionCount}>{route.comments}</Text>
                  <Text style={styles.actionLabel}>Comments</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontSize: 16,
    color: '#CCCCCC',
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 4,
    lineHeight: 26,
    maxWidth: 250,
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#00C851',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2A2A2A',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  filterButton: {
    backgroundColor: '#00C851',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
  filterText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  categoryContainer: {
    marginBottom: 30,
  },
  categoryPill: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  activePill: {
    backgroundColor: '#00C851',
  },
  categoryText: {
    color: '#CCCCCC',
    fontSize: 14,
    fontWeight: '500',
  },
  activeCategoryText: {
    color: '#FFFFFF',
  },
  statsContainer: {
    marginBottom: 30,
  },
  statsTitle: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  statsSubtitle: {
    fontSize: 32,
    color: '#00C851',
    fontWeight: '700',
    marginTop: -4,
  },
  statsDescription: {
    fontSize: 20,
    color: '#CCCCCC',
    fontWeight: '400',
    marginTop: -4,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  seeAllText: {
    fontSize: 14,
    color: '#00C851',
    fontWeight: '500',
  },
  routeCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
  },
  routeImage: {
    width: '100%',
    height: 200,
  },
  routeInfo: {
    padding: 16,
  },
  routeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  routeName: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  followButton: {
    backgroundColor: '#00C851',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
  },
  followButtonText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  routeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 6,
  },
  routeLocation: {
    fontSize: 14,
    color: '#CCCCCC',
  },
  routeStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    marginTop: 2,
  },
  routeActions: {
    flexDirection: 'row',
    gap: 20,
  },
  actionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  actionCount: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  actionLabel: {
    fontSize: 12,
    color: '#888888',
  },
});