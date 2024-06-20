import {Text,Image,View,ScrollView,Button,Alert} from 'react-native';
export default function HomeScreen(){
    return(
        <View
        style={{
            flex:1,
            alignItems:'center'
            }}>
        <Text style={{
            fontSize:20,
            fontWeight:'bold',
            textAlign:"center",
        }}>Tokoh Bungga Hias</Text>
        <Text style={{
            fontSize:15,
            fontWeight:'bold',
        }}>produk</Text>
        <ScrollView>
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf3AzJJ6_cgGJm-tEuUQQF1273ewJVVKoGhA&s")
        }}style={{width:200,height:200,margin:5}}/>
        <Text style={{
            textAlign:'center'
        }}>harga:50.000</Text>
        <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk9xELUxyhZDkbiYm-K1iMR9RAfz2RtBTuhg&s")
        }}style={{width:200,height:200,margin:5}}/>
         <Text style={{
            textAlign:'center'
         }}>harga:40.000</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
        <Image source={{
            uri:("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzKWo9_AISodzKcI0eyDpme9LWrv-28H5mw&s")
        }}style={{width:200,height:200,margin:5}}/>
         <Text  style={{
            textAlign:'center'
         }}>harga:30.000</Text>
         <Button title="troli" onPress={() => Alert.alert ('Ditambahkan')} />
       </ScrollView>
        
        </View>
    )
}
