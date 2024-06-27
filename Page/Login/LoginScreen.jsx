// import * as React from 'react';
// import {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {Text, View, KeyboardAvoidingView, Button} from 'react-native';
// import MainButton from '../Component/Button/MainButton';
// import Input from '../Component/Input/Input';
// import {styles, onPressLoginButton, SignUpButton} from './Login';

// export function LoginScreen({navigation}) {
//   const [userId, setUserId] = useState(null);
//   const [password, setPassword] = useState(null);

//   useEffect(() => {
//     AsyncStorage.getItem('userState', async (err, result) => {
//       const resultData = JSON.parse(result);
//       if (resultData.isLoggedIn) {
//         if (resultData.isParent) {
//           navigation.navigate('OwnerMain');
//         } else {
//           navigation.navigate('VetMain');
//         }
//       }
//     });
//   }, []);

//   return (
//     <View style={styles.container}>
//       <KeyboardAvoidingView style={styles.keyboardView} behavior={'padding'}>
//         <Text style={styles.title}>PetFinity</Text>
//         <Text style={styles.subTitle}>반려동물을 위한 끝없는 연결</Text>
//         <Input
//           placeholder="아이디를 입력하세요"
//           value={userId}
//           onChange={setUserId}
//           security={false}
//         />
//         <Input
//           placeholder="비밀번호를 입력하세요"
//           value={password}
//           onChange={setPassword}
//           security={true}
//         />
//         <View style={styles.buttonDiv}>
//           <MainButton
//             title="Login"
//             onPress={() =>
//               onPressLoginButton({
//                 navigation,
//                 userId,
//                 password,
//                 setUserId,
//                 setPassword,
//               })
//             }
//           />
//         </View>

//         <SignUpButton
//           title="회원이 아니신가요?"
//           onPress={() => navigation.navigate('SignUp')}
//         />
//         <Button title="main" onPress={() => navigation.navigate('Main')} />
//       </KeyboardAvoidingView>
//     </View>
//   );
// }
