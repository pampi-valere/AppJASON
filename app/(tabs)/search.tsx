import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, MapPin, Navigation } from 'lucide-react-native';

export default function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  const recentSearches = [
    'Interstate 80 - California',
    'Route 66 - Arizona',
    'Highway 101 - Oregon',
    'I-95 - Florida',
  ];

  const quickFilters = [
    'Oversized Load',
    'Heavy Haul',
    'Wide Load',
    'Height Restricted',
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Search Routes</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} color="#666666" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search by location, route name..."
            placeholderTextColor="#666666"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Filter size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Quick Filters */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Filters</Text>
          <View style={styles.filtersContainer}>
            {quickFilters.map((filter, index) => (
              <TouchableOpacity key={index} style={styles.filterChip}>
                <Text style={styles.filterChipText}>{filter}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Recent Searches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Searches</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} style={styles.recentItem}>
              <View style={styles.recentItemLeft}>
                <Clock size={18} color="#666666" />
                <Text style={styles.recentText}>{search}</Text>
              </View>
              <Navigation size={16} color="#666666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Destinations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <View style={styles.destinationsGrid}>
            <TouchableOpacity style={styles.destinationCard}>
              <MapPin size={24} color="#00C851" />
              <Text style={styles.destinationName}>California</Text>
              <Text style={styles.destinationCount}>1,234 routes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.destinationCard}>
              <MapPin size={24} color="#00C851" />
              <Text style={styles.destinationName}>Texas</Text>
              <Text style={styles.destinationCount}>987 routes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.destinationCard}>
              <MapPin size={24} color="#00C851" />
              <Text style={styles.destinationName}>Florida</Text>
              <Text style={styles.destinationCount}>756 routes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.destinationCard}>
              <MapPin size={24} color="#00C851" />
              <Text style={styles.destinationName}>New York</Text>
              <Text style={styles.destinationCount}>623 routes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 24,
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
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  filterChip: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  filterChipText: {
    color: '#CCCCCC',
    fontSize: 14,
    fontWeight: '500',
  },
  recentItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#2A2A2A',
  },
  recentItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  recentText: {
    fontSize: 16,
    color: '#CCCCCC',
  },
  destinationsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  destinationCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '47%',
  },
  destinationName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
    marginTop: 8,
  },
  destinationCount: {
    fontSize: 12,
    color: '#888888',
    marginTop: 4,
  },
});