export default {
	myVar1: [],
	myVar2: {},
	next_service: () => {
				if(!DeliveredDate_input.formattedDate) {return ''}
		     var dt = new Date(DeliveredDate_input.formattedDate)
         dt.setMonth( dt.getMonth() + interval.text );	
		     return dt 
	}
}