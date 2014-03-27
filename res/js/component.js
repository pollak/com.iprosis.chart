// iProsis 17.03.2014 
sap.designstudio.sdk.Component.subclass("com.iprosis.chart.chart", function() {

	var that = this;
	var dataResultSet = null, xlenght = null, ylenght = null;
	var Data = null
		
	this.init = function() {
		// initialization Data (multi-level array) in dataResultSet size -{
		xlenght = dataResultSet.axis_columns.length;
		ylenght = dataResultSet.axis_rows.length;
		this.Data = new Array(xlenght)
		for (i=0 ; i < xlenght ; i++)
			this.Data[i]=new Float64Array(ylenght)
		// }-
		
		this.$().click(function() {
			that.fireEvent("onclick");
		});
	};
	
	this.afterUpdate = function() {
		this.resultsetToArray();
	};
	
	this.resultsetToArray = function(){
	// function for creating Data (multi-level array) contains DataResultSet 
		var index = 0;
		  for(var y=0 ; y < ylenght ; y++){
			  for(var x=0 ; x < xlenght ; x++){
			 	this.Data[x][y]=dataResultSet.data[index];
			 	index++;
			  };
		  };
		  
		  
	};
	
	this.OnClick = function(value) {
		if(value===undefined) {
			return onClick;
		} else {
			onClick = value;
			return this;
		};
	};
	
	this.DataResultSet = function(value) {
		if(value===undefined) {
			return dataResultSet;
		} else {
			dataResultSet = value;
			return this;
		};
	};
});