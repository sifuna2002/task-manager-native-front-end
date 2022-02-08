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
    	<TouchableOpacity style={styles.float}>
    		<View style={styles.horizontal}></View>
    		<View style={styles.vertical}></View>
    	</TouchableOpacity>
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
	float:{
		borderWidth:1,
		borderColor:'#55bcf6',
		alignItems:'center',
		justifyContent:'center',
		width:70,
		position:'absolute',
		bottom:10,
		right:10,
		height:70,
		backgroundColor:'#55bcf6',
		borderRadius:100,
	},
	horizontal:{
		position:'absolute',
		backgroundColor:'#ffffff',
		width:'50%',
		height:'12.5%',
		left:'25%',
		top:'43.75%',
	},
	vertical:{
		position:'absolute',
		backgroundColor:'#ffffff',
		width:'12.5%',
		height:'50%',
		left:'43.75%',
		top:'25.5%',
	},
});
