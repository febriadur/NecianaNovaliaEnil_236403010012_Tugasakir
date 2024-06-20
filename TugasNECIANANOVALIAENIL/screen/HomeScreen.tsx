import {Text,View,Button,Alert,Image} from 'react-native';
export default function TroliScreen(){
    return(
        <View
        style ={{
            flex:1,
            backgroundColor:'Green',
             alignItems:'center',
        }}>
        <Text style={{
            textAlign:'center',
            fontSize:35,
            fontWeight:'bold',
            margin:20,
        }}>Berbagai pilihan bungga ada disini</Text>
        <Image source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFq-1NRw65dZMV1nH3rhfe2hXYPtqbTC6cJQ&s'}} style={{width:300,height:400}}/>
        <Text style={{
            textAlign:'center',
            fontSize:25,
            fontWeight:'bold',
            margin:35}}>jangan lupa kembali lagi</Text>
        </View>
    )
}






























