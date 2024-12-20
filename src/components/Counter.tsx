import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Colors from '@src/styles/Colors';

interface CounterProps {
    quantity: number;
    width?: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

const Counter: React.FC<CounterProps> = ({ quantity, onIncrement, width, onDecrement }) => {
    return (
        <View style={[styles.counterContainer, width && { width }]}>
            <TouchableOpacity onPress={onDecrement} style={styles.counterButton}>
                <Text style={styles.counterText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.counterText}>{quantity}</Text>
            <TouchableOpacity onPress={onIncrement} style={styles.counterButton}>
                <Text style={styles.counterTextRight}>+</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    counterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.gray,
        borderRadius: 8,
        padding: 10,
        borderWidth: 0.5,
        borderColor: Colors.gray,
    },
    counterButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    counterText: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.textBlack,
    },
    counterTextRight: {
        fontSize: 12,
        fontWeight: '700',
        color: Colors.button.buttonGreen,
    },
    addButton: {
        backgroundColor: Colors.white,
        borderRadius: 8,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    addButtonText: {
        fontSize: 12,
        textAlign: 'center',
        color: Colors.textBlack,
    },
});

export default Counter;
