import { StyleSheet, ScrollView, Dimensions, View, Image } from 'react-native'
import { useEffect, useState } from 'react'

const { width, height } = Dimensions.get('window')
const mapWidth = width * 3.3
const mapHeight = height * 1.05

const Map = (props) => {
  useEffect(() => {
    const image = Image.resolveAssetSource(props.map)
    Image.prefetch(image.uri)
      .then(() => {
        setImageLoaded(true)
      })
      .catch((error) => {
        console.log('Error prefetching image:', error)
      })
  }, [])

  const [, setImageLoaded] = useState(false)
  return (
    <View style={Styles.mapRootContainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ width: mapWidth, height: mapHeight }}>
          <Image
            key={new Date().getTime()}
            source={props.map}
            style={{ width: '100%', height: '100%' }}
            resizeMode={'stretch'}
          />
          {props.children}
        </View>
      </ScrollView>
    </View>
  )
}

const Styles = StyleSheet.create({
  mapRootContainer: {
    flex: 1,
    position: 'relative'
  }
})

export default Map
