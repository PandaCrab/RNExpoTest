import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';

type Props = {
    color?: string;
    bgColor?: string;
    onPress: () => void;
    disabled?: boolean | null | undefined;
    title: string;
};

const CustomButton: React.FC<Props> = ({ 
    color,
    bgColor,
    onPress,
    disabled,
    title
}) => {
    return (
        <Pressable
            style={({pressed}) => [
                {
                    backgroundColor: disabled 
                    ? "ccc" : pressed
                    ? '#aa0000' : bgColor || "darkblue"
                },
                styles.container
            ]}
            disabled={disabled}
            onPress={onPress}
        >
            <Text style={{ color: color ?? 'white' }}>{title || "Press me!"}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 5,
        width: '40%',
        alignItems: 'center',
        borderRadius: 6
    }
});

export default CustomButton;
