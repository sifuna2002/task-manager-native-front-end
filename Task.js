import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
const Task=(props) =>{

	return (
		<View style={styles.item}>
			<View style={styles.iteml}>
				<View style={styles.sq}></View>
				<Text style={styles.t}>{props.text}</Text>
			</View>
			<View style={styles.circle}>
    			</View>
		</View>
	)
}
const styles=StyleSheet.create({
	item:{
		backgroundColor:'#fff',
		padding:15,
		borderRadius:10,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
		marginBottom:20,
	},
	iteml:{
		flexDirection:'row',
		alignItems:'center',
		flexWrap:'wrap',
	},
	sq:{
		width:24,
		height:24,
		backgroundColor:'#55bcf6',
		opacity:0.4,
		borderRadius:5,
		marginRight:15,
	},
	t:{
		maxWidth:'80%',
	},
	circle:{
		width:12,
		height:12,
		borderColor:'#55bcf6',
		borderWidth:2,
		borderRadius:5,
	},
	
})
export default Task
