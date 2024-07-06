import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Beranda = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>E-Coklit KPU - Beranda</Text>
        <Text style={styles.subtitle}>Progress Coklit</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Sidalih</Text>
          <Text style={styles.sectionDescription}>Data hasil unduhan</Text>
          <Text style={styles.sectionValue}>511</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Tersinkronisasi</Text>
          <Text style={styles.sectionDescription}>Data sudah disinkron</Text>
          <Text style={styles.sectionValue}>480</Text>
        </View>
        <Text style={styles.subtitle}>Kategori Pemilih</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Sesuai</Text>
          <Text style={styles.sectionValue}>461</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Baru</Text>
          <Text style={styles.sectionValue}>0</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Ubah</Text>
          <Text style={styles.sectionValue}>9</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Tersaring</Text>
          <Text style={styles.sectionValue}>10</Text>
        </View>
        <Text style={styles.subtitle}>Pemilih Difabel</Text>
        {[
          'Disabilitas Fisik',
          'Disabilitas Intelektual',
          'Disabilitas Mental',
          'Disabilitas Sensorik Wicara',
          'Disabilitas Sensorik Rungu',
          'Disabilitas Sensorik Netra',
        ].map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{index + 1}. {item}</Text>
            <Text style={styles.sectionValue}>
              {index === 1 ? '1' : index === 2 ? '3' : index === 5 ? '1' : '0'}
            </Text>
          </View>
        ))}
        <Text style={styles.subtitle}>Pemilih Tersaring</Text>
        {[
          'Meninggal',
          'Ganda',
          'Dibawah umur',
          'Pindah domisili',
          'WNA',
          'TNI',
          'Polri',
          'TPS Tidak Sesuai',
        ].map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{index + 1}. {item}</Text>
            <Text style={styles.sectionValue}>
              {index === 0 ? '9' : index === 3 ? '1' : '0'}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 4,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 14,
  },
  sectionDescription: {
    color: 'gray',
    fontSize: 14,
  },
  sectionValue: {
    color: 'white',
    fontSize: 14,
  },
});

export default Beranda;
