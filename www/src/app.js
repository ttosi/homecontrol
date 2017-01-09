var app = {
	load: function (viewModel) {
		return function (callback) {
			require([viewModel], function (vm) {
				callback(vm.load());
			});
		};
	}
};

require.config({
	baseUrl: 'src/',
	paths: {
		jquery: 'lib/jquery',
		lodash: 'lib/lodash',
		knockout: 'lib/knockout',
		mapping: 'lib/knockout.mapping',
		pager: 'lib/pager',
		text: 'lib/require-text''
	},
	deps: [
		'knockout',
		'mapping'
	],
	callback: function (ko, mapping) {
		ko.mapping = mapping;
	}
});

require([
	'lodash',
	'knockout',
	'pager',
	'config',
	'lib/domReady!'],
	function (_, ko, pager, config) {
		'use strict';
		var self = this;

		pager.extendWithPage(HomeViewModel);
		ko.applyBindings(HomeViewModel);

		pager.Href.hash = '#!/';
		pager.start();
	
		document.addEventListener("deviceready", onDeviceReady, false);

	});
