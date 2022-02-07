import * as React from "react";
import { View, Text,TouchableOpacity,StyleSheet } from "react-native";
import Task from './Task'
export default function App() {
  return (
    <View style={styles.container}>
    	<View style={styles.taskw}>
    		<Text style={styles.sectt}>Today's Task</Text>
    		<View style={styles.tasks}>
    			<Task text='Task 1' />
    			<Task text='Task 2' />
    		</View>

    	</View>
    </View>
  );
}

const styles=StyleSheet.create({
	container: {
		flex:1,
		backgroundColor:'#e8eaed',
		
	},
	taskw: {
		
		paddingTop:80,
		paddingHorizontal:20,
			
	},
	sectt:{
		fontSize:24,
	},
	tasks:{
		marginTop:30,
	},
});
