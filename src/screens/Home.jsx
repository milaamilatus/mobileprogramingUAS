import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const Beranda = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>E-Coklit KPU - Beranda</Text>
        
        <Text style={styles.subtitle}>Progress Coklit</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Sidalih </Text>
          <Text style={styles.sectionValue}>30</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Tersinkronisasi </Text>
          <Text style={styles.sectionValue}>30</Text>
        </View>
        
        <Text style={styles.subtitle}>Kategori Pemilih</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Sesuai  </Text>
          <Text style={styles.sectionValue}>27</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Baru </Text>
          <Text style={styles.sectionValue}>0</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Ubah </Text>
          <Text style={styles.sectionValue}>2</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pemilih Tersaring  </Text>
          <Text style={styles.sectionValue}>2</Text>
        </View>
        
        <Text style={styles.subtitle}>Pemilih Difabel</Text>
        {[
          'Disabilitas Fisik  ',
          'Disabilitas Intelektual  ',
          'Disabilitas Mental ',
          'Disabilitas Sensorik Wicara  ',
          'Disabilitas Sensorik Rungu  ',
          'Disabilitas Sensorik Netra  ',
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
          'Meninggal ',
          'Ganda ',
          'Dibawah umur',
          'Pindah domisili',
          'WNA ',
          'TNI ',
          'Polri ',
          'TPS Tidak Sesuai  ',
        ].map((item, index) => (
          <View key={index} style={styles.section}>
            <Text style={styles.sectionTitle}>{index + 1}. {item}</Text>
            <Text style={styles.sectionValue}>
              {index === 0 ? '9' : index === 3 ? '1' : '0'}
            </Text>
          </View>
        ))}
        
        <Text style={styles.subtitle}>Pemilih Berdasarkan Jenis Kelamin</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Laki-laki  </Text>
          <Text style={styles.sectionValue}>15</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perempuan </Text>
          <Text style={styles.sectionValue}>15</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Total Data </Text>
          <Text style={styles.sectionValue}>30</Text>
        </View>
        
        <Text style={styles.subtitle}>Pemilih Berdasarkan Status Coklit</Text>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sudah Coklit </Text>
          <Text style={styles.sectionValue}>30</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Belum Coklit </Text>
          <Text style={styles.sectionValue}>0</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Total Data </Text>
          <Text style={styles.sectionValue}>30</Text>
        </View>
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  content: {
    flex: 1,
    marginTop: 20,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  sectionTitle: {
    color: 'grey',
    fontSize: 19,
  },
  sectionDescription: {
    color: 'grey',
    fontSize: 20,
  },
  sectionValue: {
    color: 'white',
    fontSize: 14,
  },
});

export default Beranda;
