import React from 'react';

import {View,Text,Button} from 'react-native'

const Card = () => {
    return ( 
        <View>
            <Text>Test Card Title</Text>
            <View>
                <Text>Body</Text>
            </View>
            <Button
            title="Detail"
            />
        </View>
     );
}
 
export default Card;