import {Text, TouchableOpacity, View} from "react-native";
import {useEffect, useState} from "react";

export default function Index() {
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        fetch('http://192.168.0.124:8080/isopen').then(r => {
            console.log(r.json().then(json => setIsOpen(json)));
        })
    }, [])

    const handlePress = async () => {
        await fetch('http://192.168.0.124:8080/changeisopen')
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <TouchableOpacity 
                style={{
                    width: '100%',
                    height: '100%',
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
                onPress={handlePress}>
                {isOpen ? (<Text>OPEN</Text>) : (<Text>CLOSED</Text>)}
            </TouchableOpacity>
        </View>

    );
}



