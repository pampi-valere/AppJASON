import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, ChevronRight, MapPin, Route, Award, Clock } from 'lucide-react-native';

export default function ProfileScreen() {
  const stats = [
    { label: 'Routes Completed', value: '24', icon: Route },
    { label: 'Total Distance', value: '2,340 km', icon: MapPin },
    { label: 'Hours Driven', value: '156h', icon: Clock },
    { label: 'Achievements', value: '8', icon: Award },
  ];

  const menuItems = [
    { title: 'My Routes', subtitle: 'View saved and completed routes' },
    { title: 'Permits', subtitle: 'Manage your permits and documents' },
    { title: 'Vehicle Settings', subtitle: 'Configure load specifications' },
    { title: 'Notifications', subtitle: 'Manage alerts and updates' },
    { title: 'Support', subtitle: 'Get help and contact support' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileInfo}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JG</Text>
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.userName}>James Getting</Text>
              <Text style={styles.userType}>Professional Driver</Text>
              <Text style={styles.userLocation}>California, USA</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Stats Grid */}
        <View style={styles.statsGrid}>
          {stats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <stat.icon size={24} color="#00C851" />
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.menuItem}>
              <View style={styles.menuItemContent}>
                <Text style={styles.menuTitle}>{item.title}</Text>
                <Text style={styles.menuSubtitle}>{item.subtitle}</Text>
              </View>
              <ChevronRight size={20} color="#666666" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Account Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.actionButton, styles.logoutButton]}>
            <Text style={[styles.actionButtonText, styles.logoutText]}>Sign Out</Text>
          </TouchableOpacity>
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
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#00C851',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  userType: {
    fontSize: 14,
    color: '#00C851',
    fontWeight: '500',
    marginTop: 2,
  },
  userLocation: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  settingsButton: {
    padding: 8,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 32,
  },
  statCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '47%',
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  statValue: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '700',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
    textAlign: 'center',
    marginTop: 4,
  },
  menuContainer: {
    marginBottom: 32,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: '#2A2A2A',
  },
  menuItemContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  actionsContainer: {
    gap: 12,
    paddingBottom: 32,
  },
  actionButton: {
    backgroundColor: '#00C851',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  logoutButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF4444',
  },
  actionButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  logoutText: {
    color: '#FF4444',
  },
});