import { Platform } from 'react-native';
import * as NativeIcons from 'phosphor-react-native';
import * as WebIcons from '@phosphor-icons/react';

type IconProps = {
  name: keyof typeof NativeIcons;
  color?: string;
  size?: number;
  weight?: any;
};

export default function PhosphorIcon({ name, color = 'black', size = 24, weight = 'regular' }: IconProps) {
  const IconComponent = Platform.OS === 'web'
    ? (WebIcons as any)[name]
    : (NativeIcons as any)[name];

  return <IconComponent color={color} size={size} weight={weight} />;
}
