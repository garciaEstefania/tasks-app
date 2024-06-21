import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Image, Text, View} from 'react-native';

import styles from './styles';

import {useGetListQuery} from '~redux/services/listApi';
import {Contact} from '~redux/services/types';

export const ListScreen = () => {
  const {isLoading, data} = useGetListQuery(undefined);
  const [isImgError, setIsImgError] = useState(false);

  useEffect(() => {
    return () => {
      setIsImgError(false);
    };
  }, []);

  const handleImgError = () => {
    setIsImgError(true);
  };
  const renderList = (item: Contact) => {
    const labelName = item.name.split(' ');
    return (
      <View style={styles.listItem}>
        {!isImgError ? (
          <Image
            source={{
              uri: item.avatar,
            }}
            style={styles.avatar}
            resizeMode="cover"
            onError={handleImgError}
          />
        ) : (
          <View style={styles.fallBack}>
            <Text
              style={
                styles.fallBackLabel
              }>{`${labelName[0][0]}${labelName[1][0]}`}</Text>
          </View>
        )}
        <Text style={styles.name}>{item.name}</Text>
      </View>
    );
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.emptyListContainer}>
        <Text style={{color: '#000'}}>No items available</Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} color={'#2177BF'} />
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => renderList(item)}
          ListEmptyComponent={() => renderEmptyList()}
        />
      )}
    </View>
  );
};
