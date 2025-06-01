// import { useState, useEffect } from 'react';
// import { Pressable, Text, Alert } from 'react-native';
// import ReactNativeAN from 'react-native-alarm-notification';
// import { NativeEventEmitter, NativeModules } from 'react-native';
//
// const { RNAlarmNotification } = NativeModules;
// const RNAlarmEmitter = new NativeEventEmitter(RNAlarmNotification);
// console.log("ReactNativeAN:", ReactNativeAN);
//
// const setAlarm = async () => {
//     try {
//         // Create the date object
//         const date = new Date();
//         date.setHours(20);  // Set to 8 PM
//         date.setMinutes(20); // Set to 20 minutes
//         date.setSeconds(0);
//         date.setMilliseconds(0);
//
//         if (date.getTime() <= Date.now()) {
//             date.setDate(date.getDate() + 1);
//         }
//
//         const fireDate = '01-01-2060 00:00:00'; // hardcoded for test
//
//         const alarmNotifData = {
//             id: Date.now().toString(),
//             title: 'Wake up!',
//             message: 'Time to start your day!',
//             channel: 'alarm-channel',
//             ticker: 'Alarm Notification',
//             auto_cancel: true,
//             vibrate: true,
//             vibration: 100,
//             play_sound: true,
//             sound_name: 'default',
//             schedule_type: 'once' as const,
//             color: 'red',
//             tag: 'alarm_tag',
//             small_icon: 'ic_launcher',
//             large_icon: 'ic_launcher',
//             fire_date: fireDate,
//         };
//
//         console.log('Attempting to schedule alarm with data:', alarmNotifData);
//
//         const result = await ReactNativeAN.scheduleAlarm(alarmNotifData);
//         console.log('Alarm scheduled:', result);
//         Alert.alert('Success', 'Alarm has been set successfully!');
//     } catch (error) {
//         console.error("Failed to set alarm:", error);
//         Alert.alert('Error', 'Failed to set alarm. Please try again.');
//     }
// };
//
// export default function AddAlarmButton() {
//     useEffect(() => {
//         const dismissSubscription = RNAlarmEmitter.addListener(
//             'OnNotificationDismissed',
//             (data) => console.log('Notification dismissed:', data)
//         );
//
//         const openedSubscription = RNAlarmEmitter.addListener(
//             'OnNotificationOpened',
//             (data) => console.log('Notification opened:', data)
//         );
//
//         return () => {
//             dismissSubscription.remove();
//             openedSubscription.remove();
//         };
//     }, []);
//
//     return (
//         <Pressable
//             className="bg-gray-600 rounded-3xl items-center p-4"
//             onPress={() => setAlarm()}
//         >
//             <Text className="text-gray-100 font-bold text-sm">Save</Text>
//         </Pressable>
//     );
// }
