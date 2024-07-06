import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Coklit KPU - Profil</Text>
      
      <View style={styles.profileContainer}>
        <MaterialCommunityIcons name="account-circle" color="white" size={64} />
        <Text style={styles.profileName}>AMILATUS SHOLEHAH</Text>
        <Text style={styles.profileEmail}>amilatussholehah6@gmail.com</Text>
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Daerah Pemilihan</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Provinsi</Text>
          <Text style={styles.value}>JAWA TIMUR</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kab / Kota</Text>
          <Text style={styles.value}>PAMEKASAN</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Kecamatan</Text>
          <Text style={styles.value}>LARANGAN</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Desa / Kelurahan</Text>
          <Text style={styles.value}>PANAGUAN</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>TPS</Text>
          <Text style={styles.value}>TPS 001</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Potensi Alamat</Text>
      </TouchableOpacity>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Download Dokumen</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <MaterialCommunityIcons name="file-download" color="white" size={20} />
          <Text style={styles.downloadButtonText}>Dokumen per Pantarlik</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.downloadButton}>
          <MaterialCommunityIcons name="file-download" color="white" size={20} />
          <Text style={styles.downloadButtonText}>Dokumen Gabungan</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Video Tutorial</Text>
        <TouchableOpacity style={styles.downloadButton}>
          <MaterialCommunityIcons name="link" color="white" size={20} />
          <Text style={styles.downloadButtonText}>Dokumen Pendukung</Text>
        </TouchableOpacity>
      </View>
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
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 8,
  },
  profileEmail: {
    color: 'white',
    fontSize: 14,
    marginTop: 4,
  },
  sectionContainer: {
    marginBottom: 16,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    color: 'white',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 5,
    marginBottom: 8,
  },
  downloadButtonText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default Profil;
