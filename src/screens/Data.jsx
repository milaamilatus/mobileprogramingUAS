import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert, Modal } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const initialData = [
  { id: '1', nik: '3528085407060001', name: 'RAUDATUL JANNAH', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '2', nik: '3528080107810115', name: 'IMAM ROFII ', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '3', nik: '3528086008890006', name: 'KUTSIYA', status: 'Pemilih Ubah', synced: true, coklit: true },
  { id: '4', nik: '3528080107840077', name: 'PURRAWI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '5', nik: '3528087006120005', name: 'AGUS WIDODO ', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '6', nik: '3528088803010021', name: 'SITI AMINAH', status: 'Pemilih Tersaring', synced: true, coklit: true },
  { id: '7', nik: '3528083306060018', name: 'ABDUL ROHIM', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '8', nik: '3528085501120030', name: 'YUNI ASTUTI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '9', nik: '3528084605020033', name: 'HENDRIKUS PRAMONO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '10', nik: '3528082907080004', name: 'MARTINUS', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '11', nik: '3528081205110009', name: 'SUGENG RIYANTO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '12', nik: '3528087807060002', name: 'LUKMAN HAKIM', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '13', nik: '3528086504010011', name: 'SRI LESTARI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '14', nik: '3528080404110020', name: 'ARIFIN', status: 'Pemilih Tersaring', synced: true, coklit: true },
  { id: '15', nik: '3528089008090001', name: 'NURHAYATI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '16', nik: '3528087302100019', name: 'ADI SETIAWAN', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '17', nik: '3528086507100012', name: 'WIDODO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '18', nik: '3528081006120017', name: 'SUSILOWATI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '19', nik: '3528088603010010', name: 'YANTO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '20', nik: '3528081507080003', name: 'SUPRIYADI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '21', nik: '3528081104110021', name: 'HANDOKO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '22', nik: '3528089408090000', name: 'ENDAH PURWATI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '23', nik: '3528085202100008', name: 'RINI WIDYASTUTI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '24', nik: '3528086008890005', name: 'RUDI HARTONO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '25', nik: '3528089006120004', name: 'ANISA FITRIANI', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '26', nik: '3528085601120029', name: 'DARSONO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '27', nik: '3528087803010020', name: 'SUTRISNO', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '28', nik: '3528081207080008', name: 'SITI MUNAROH', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '29', nik: '3528086002100016', name: 'KHOIRUNNISA', status: 'Pemilih Sesuai', synced: true, coklit: true },
  { id: '30', nik: '3528080107810114', name: 'ARIF BUDIYANTO', status: 'Pemilih Sesuai', synced: true, coklit: true },
];

const Data = () => {
  const [data, setData] = useState(initialData);
  const [filterVisible, setFilterVisible] = useState(false);

  const handleUpdateClick = () => {
    Alert.alert("Data berhasil diperbarui!");
  };

  const toggleSynced = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, synced: !item.synced };
      }
      return item;
    });
    setData(newData);
  };

  const toggleCoklit = (id) => {
    const newData = data.map(item => {
      if (item.id === id) {
        return { ...item, coklit: !item.coklit };
      }
      return item;
    });
    setData(newData);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <View style={styles.itemHeader}>
        <Text style={styles.itemId}>{item.id}. {item.nik}</Text>
        <Text style={styles.itemName}>{item.name}</Text>
      </View>
      <Text style={styles.itemStatus}>{item.status}</Text>
      <View style={styles.itemButtons}>
        <TouchableOpacity onPress={() => toggleSynced(item.id)} style={[styles.syncedButton, !item.synced && styles.inactiveButton]}>
          <Text style={styles.buttonText}>Berhasil Sync Data </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleCoklit(item.id)} style={[styles.coklitButton, !item.coklit && styles.inactiveButton]}>
          <Text style={styles.buttonText}>Sudah coklit </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const toggleFilterModal = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>E-Coklit KPU - Pemutakhiran Data</Text>
      <TouchableOpacity style={styles.updateButton} onPress={handleUpdateClick}>
        <Text style={styles.updateButtonText}>Klik untuk perbarui data hasil coklit  </Text>
      </TouchableOpacity>
      <View style={styles.filterContainer}>
        <Text style={styles.dataCount}>Jumlah data:  {data.length}</Text>
        <TouchableOpacity onPress={toggleFilterModal}>
          <MaterialCommunityIcons name="filter" color="white" size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />

      <Modal
        visible={filterVisible}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Filter Options</Text>
            {/* Add filter options here */}
            <TouchableOpacity onPress={toggleFilterModal} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseButtonText}>Sinkron</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginVertical: 19,
  },
  updateButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  updateButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  dataCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#333333',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  itemStatus: {
    fontSize: 20,
    color: 'white',
  },
  itemButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 35,
  },
  syncedButton: {
    flex: 1,
    backgroundColor: 'green',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  coklitButton: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 5,
    borderRadius: 5,
    marginLeft: 5,
  },
  inactiveButton: {
    backgroundColor: 'grey',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'black',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalCloseButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  modalCloseButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Data;
