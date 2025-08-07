import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Shield, MapPin, Truck, CircleHelp as HelpCircle, ChevronRight } from 'lucide-react-native';

export default function SettingsScreen() {
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(true);
  const [locationEnabled, setLocationEnabled] = React.useState(true);

  const settingsGroups = [
    {
      title: 'Preferences',
      items: [
        {
          icon: Bell,
          title: 'Notifications',
          subtitle: 'Route updates and alerts',
          hasSwitch: true,
          value: notificationsEnabled,
          onToggle: setNotificationsEnabled,
        },
        {
          icon: MapPin,
          title: 'Location Services',
          subtitle: 'GPS tracking and navigation',
          hasSwitch: true,
          value: locationEnabled,
          onToggle: setLocationEnabled,
        },
      ],
    },
    {
      title: 'Vehicle & Load',
      items: [
        {
          icon: Truck,
          title: 'Vehicle Configuration',
          subtitle: 'Set up your truck specifications',
        },
        {
          icon: Shield,
          title: 'Load Parameters',
          subtitle: 'Configure oversized load settings',
        },
      ],
    },
    {
      title: 'Support',
      items: [
        {
          icon: HelpCircle,
          title: 'Help Center',
          subtitle: 'FAQs and troubleshooting',
        },
        {
          icon: HelpCircle,
          title: 'Contact Support',
          subtitle: 'Get help from our team',
        },
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {settingsGroups.map((group, groupIndex) => (
          <View key={groupIndex} style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>{group.title}</Text>
            {group.items.map((item, itemIndex) => (
              <TouchableOpacity key={itemIndex} style={styles.settingItem}>
                <View style={styles.settingItemLeft}>
                  <View style={styles.iconContainer}>
                    <item.icon size={20} color="#00C851" />
                  </View>
                  <View style={styles.settingContent}>
                    <Text style={styles.settingTitle}>{item.title}</Text>
                    <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.settingRight}>
                  {item.hasSwitch ? (
                    <Switch
                      value={item.value}
                      onValueChange={item.onToggle}
                      trackColor={{ false: '#2A2A2A', true: '#00C851' }}
                      thumbColor="#FFFFFF"
                    />
                  ) : (
                    <ChevronRight size={20} color="#666666" />
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        ))}

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appName}>James Getting Route Mapping</Text>
          <Text style={styles.appVersion}>Version 1.0.0</Text>
          <Text style={styles.copyright}>© 2025 James Getting Solutions</Text>
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
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  settingsGroup: {
    marginBottom: 32,
  },
  groupTitle: {
    fontSize: 16,
    color: '#888888',
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  settingItem: {
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
  settingItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#2A2A2A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#888888',
    marginTop: 2,
  },
  settingRight: {
    marginLeft: 16,
  },
  appInfo: {
    alignItems: 'center',
    paddingVertical: 32,
    borderTopWidth: 1,
    borderTopColor: '#2A2A2A',
  },
  appName: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  appVersion: {
    fontSize: 14,
    color: '#888888',
    marginTop: 4,
  },
  copyright: {
    fontSize: 12,
    color: '#666666',
    marginTop: 8,
  },
});