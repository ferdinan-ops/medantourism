import { Text, View, StatusBar, Image, TouchableOpacity, Platform, SafeAreaView } from 'react-native'
import { launchImageLibrary } from 'react-native-image-picker'
import { useSelector } from 'react-redux'
import Modal from 'react-native-modal'
import { useState } from 'react'

import { useGetUserQuery, useRemovePhotoMutation, useUploadPhotoMutation } from '../../api/user.api'
import ProfileMenuBtn from '../../components/ProfileMenuBtn'
import Loading from '../../components/molecules/Loading'
import Styles from '../../styles/ProfilePageStyles'
import ICONS from '../../assets/icons/icons'
import COLORS from '../../theme/colors'

const ProfilePage = ({ navigation }) => {
  const [showEdit, setShowEdit] = useState(false)
  const token = useSelector((state) => state.auth.token)
  const { data: user, isLoading } = useGetUserQuery(undefined, { refetchOnMountOrArgChange: true, skip: !token })
  const [uploadPhoto, { isLoading: isLoadingUpload }] = useUploadPhotoMutation()
  const [deletePhoto, { isLoading: isLoadingRemove }] = useRemovePhotoMutation()

  if (isLoading) {
    return <Loading size={80} isAbsolute backgroundColor={COLORS.white} />
  }

  const createFormData = (photo) => {
    const data = new FormData()

    data.append('profile_picture', {
      name: photo.fileName,
      type: photo.type,
      uri: Platform.OS === 'ios' ? photo.uri.replace('file://', '') : photo.uri
    })

    return data
  }

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, async (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
        return
      }

      if (response.errorCode) {
        console.log('ImagePicker Error: ', response.errorMessage)
        return
      }

      const formData = createFormData(response.assets[0])
      await uploadPhoto(formData)
      setShowEdit(false)
    })
  }

  const handleRemovePhoto = async () => {
    await deletePhoto()
    setShowEdit(false)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
      {token ? (
        <>
          <View style={{ flex: 1 }}>
            <View style={Styles.wrapper}>
              <View style={Styles.info}>
                <View>
                  <Image source={{ uri: user.data.image_url }} style={[Styles.profilePic, { borderRadius: 900 }]} />
                  <TouchableOpacity onPress={() => setShowEdit(!showEdit)} style={Styles.editBtn} activeOpacity={0.7}>
                    <Image source={require('../../assets/img/editBtn.png')} style={{ height: 50, width: 50 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ gap: 4 }}>
                  <Text style={Styles.username}>{user.data.username}</Text>
                  <Text style={Styles.email}>{user.data.email ?? `+${user.data.phone}`}</Text>
                </View>
              </View>
              <View style={Styles.menuWrapper}>
                <ProfileMenuBtn
                  icon={ICONS.notifikasi}
                  text="Notifikasi"
                  action={() =>
                    navigation.navigate('HomeNavStackScreen', {
                      screen: 'NotifikasiPage'
                    })
                  }
                />
                <ProfileMenuBtn
                  icon={ICONS.perjalananCircle}
                  text="Aktivitas"
                  action={() => navigation.navigate('AktifitasPage')}
                />
                <ProfileMenuBtn
                  icon={ICONS.aturAkun}
                  text="Atur Akun"
                  action={() =>
                    navigation.navigate('HomeNavStackScreen', {
                      screen: 'AturAkunPage',
                      params: { email: user.data.email, phone: user.data.phone }
                    })
                  }
                />
              </View>
            </View>
          </View>
          <Modal
            isVisible={showEdit}
            style={{ margin: 0 }}
            onBackdropPress={() => setShowEdit(false)}
            backdropOpacity={0.5}
            statusBarTranslucent
          >
            <View style={Styles.popUpContainer}>
              <Text style={Styles.popUpTitle}>Ganti foto profil</Text>
              <View style={Styles.popUpButtonContainer}>
                <TouchableOpacity style={[Styles.popUpButton, { overflow: 'hidden' }]} onPress={handleChoosePhoto}>
                  {isLoadingUpload && (
                    <Loading isAbsolute size="small" backgroundColor={COLORS.white} color={COLORS.black1} />
                  )}
                  <View style={Styles.buttonLeft}>
                    <Image style={Styles.buttonIcon} source={ICONS.photoIcon} />
                    <Text style={Styles.buttonText}>Pilih dari galeri</Text>
                  </View>
                  <Image style={Styles.rightArrow} source={ICONS.rightArrow} />
                </TouchableOpacity>
                <TouchableOpacity style={[Styles.popUpButton, { overflow: 'hidden' }]} onPress={handleRemovePhoto}>
                  {isLoadingRemove && (
                    <Loading isAbsolute size="small" backgroundColor={COLORS.white} color={COLORS.black1} />
                  )}
                  <View style={Styles.buttonLeft}>
                    <Image style={Styles.buttonIcon} source={ICONS.trashCan} />
                    <Text style={Styles.buttonText}>Hapus foto yang Ini</Text>
                  </View>
                  <Image style={Styles.rightArrow} source={ICONS.rightArrow} />
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </>
      ) : (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View style={{ alignItems: 'center', maxWidth: '80%' }}>
            <Image source={require('../../assets/img/verifikasiPage.png')} />
            <Text
              style={{
                color: COLORS.blue,
                textAlign: 'center',
                lineHeight: 22,
                fontSize: 20,
                fontFamily: 'Poppins-Bold',
                marginTop: 20
              }}
            >
              Halaman ini dilindungi
            </Text>
            <Text
              style={{
                color: COLORS.black1,
                textAlign: 'center',
                lineHeight: 20,
                fontFamily: 'Poppins-Regular',
                fontSize: 13,
                marginTop: 5
              }}
            >
              Untuk bisa mengakses halaman ini, silahkan login atau buat akun Anda terlebih dahulu
            </Text>
            <View style={{ flexDirection: 'row', gap: 12, marginTop: 30 }}>
              <TouchableOpacity
                style={{ backgroundColor: COLORS.white, paddingHorizontal: 18, paddingVertical: 8, borderRadius: 8 }}
                onPress={() => navigation.navigate('AuthStackScreen', { screen: 'DaftarPage' })}
              >
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: COLORS.black1 }}>Daftar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: COLORS.blue, paddingHorizontal: 18, paddingVertical: 8, borderRadius: 8 }}
                onPress={() => navigation.navigate('AuthStackScreen', { screen: 'Login' })}
              >
                <Text style={{ fontFamily: 'Poppins-SemiBold', fontSize: 14, color: COLORS.white }}>Masuk</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  )
}

export default ProfilePage
