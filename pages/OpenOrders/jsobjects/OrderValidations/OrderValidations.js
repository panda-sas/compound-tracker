export default {
	validate : () => {
		if(Open_Orders_Table.selectedRow.IsReceived === true && Open_Orders_Table.selectedRow.Location === '') {
			return false
		}
		return true
	}
}