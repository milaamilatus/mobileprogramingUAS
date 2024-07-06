import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { id: '1', nik: '3528085407060001', name: 'FAIZATUR RIZA FIANITA', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '2', nik: '3528080107810115', name: 'IMAM ROFII', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '3', nik: '3528086008890006', name: 'KUTSIYAH', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
];

const Pemutakhiran = () => {
  const handleUpdateClick = () => {
    // Tindakan yang ingin dilakukan saat tombol ditekan
    Alert.alert("Data berhasil diperbarui!");
    // Anda bisa menambahkan logika lain di sini
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemId}>{item.id}. {item.nik}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Text style={styles.itemStatus}>{item.status}</Text>
      <View style={styles.itemButtons}>
        {item.synced && <View style={styles.syncedButton}><Text style={styles.buttonText}>Berhasil Sync Data</Text></View>}
        {item.coklit && <View style={styles.coklitButton}><Text style={styles.buttonText}>Sudah coklit</Text></View>}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Coklit KPU - Pemutakhiran Data</Text>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateClick}>
        <Text style={styles.updateButtonText}>Klik untuk perbarui data hasil coklit</Text>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <Text style={styles.dataCount}>Jumlah data: 511</Text>
        <MaterialCommunityIcons name="filter" color="white" size={24} />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
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
  updateButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 16,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  dataCount: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  itemId: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemName: {
    color: 'white',
    fontSize: 16,
  },
  itemStatus: {
    color: 'white',
    fontSize: 14,
    marginBottom: 8,
  },
  itemButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  syncedButton: {
    backgroundColor: '#FF5722',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  coklitButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginLeft: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Pemutakhiran;
