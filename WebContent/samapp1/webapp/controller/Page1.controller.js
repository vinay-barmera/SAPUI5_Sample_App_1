sap.ui.define([
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("samapp1.webapp.controller.Page1", {

		onInit : function () {
			var oJSONModel = this.initSampleDataModel();
			this.getView().setModel(oJSONModel);
			console.log(oJSONModel); 
		},
		
			initSampleDataModel : function() {
			var oModel = new JSONModel();

			//var oDateFormat = DateFormat.getDateInstance({source: {pattern: "timestamp"}, pattern: "dd/MM/yyyy"});

			jQuery.ajax("https://restapi.cert.cfapps.eu10.hana.ondemand.com/pData", {
				dataType: "json",
				success: function(oData) {
					oModel.setData(oData);
				},
				error: function() {
					Log.error("failed to load json");
				}
			});

			return oModel;
		},
		
		onPress : function () {
			alert("Button Press Working");	
					
		},

		add : function (oEvent) {
			
			jQuery.ajax("https://restapi.cert.cfapps.eu10.hana.ondemand.com/add", {
				dataType: "json",
				success: function(oData) {
					oModel.setData(oData);
				},
				error: function() {
					Log.error("failed to load json");
				}
			});
			alert("Record Added Successfully");
			var oJSONModel = this.initSampleDataModel();
			this.getView().setModel(oJSONModel);
		},

		delete : function (oEvent) {
			
			jQuery.ajax("https://restapi.cert.cfapps.eu10.hana.ondemand.com/remove", {
				dataType: "json",
				success: function(oData) {
					oModel.setData(oData);
				},
				error: function() {
					Log.error("failed to load json");
				}
			});
			
			//MessageToast.show("Record Deleted Successfully");
			
			
			alert("Record Deleted Successfully");
			var oJSONModel = this.initSampleDataModel();
			this.getView().setModel(oJSONModel);
			
		},

		handleTileDelete : function (oEvent) {
			var oTile = oEvent.getParameter("tile");
			oEvent.getSource().removeTile(oTile);
		}
	});

});