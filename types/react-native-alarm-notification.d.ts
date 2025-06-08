declare module 'react-native-alarm-notification' {
    interface AlarmNotificationData {
        id: string;
        title: string;
        message: string;
        channel: string;
        ticker: string;
        auto_cancel: boolean;
        vibrate: boolean;
        vibration: number;
        play_sound: boolean;
        sound_name: string | null;
        schedule_type: 'once' | 'repeat';
        color: string;
        tag: string;
        fire_date: number;
        importance?: 'high' | 'low' | 'default';
        priority?: 'high' | 'low' | 'default';
        small_icon?: string;
        large_icon?: string;
    }

    export function scheduleAlarm(data: AlarmNotificationData): Promise<any>;
    export function cancelAlarm(id: string): Promise<void>;
    export function cancelAllAlarms(): Promise<void>;
    export function getScheduledAlarms(): Promise<AlarmNotificationData[]>;
} 