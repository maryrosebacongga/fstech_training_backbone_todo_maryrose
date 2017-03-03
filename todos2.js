// JavaScript Document¥
//exercise 2

(function($){
	var ListView = Backbone.View.extend({
	el: $('body'),
		
		events:{
			'click button#add': 'addItem'
		},
		
	initialize: function(){
		_.bindAll(this, 'render', 'addItem');
		
		this.counter = 0;
		this.render();
	},
		
	render: function(){
		$(this.el).append("<button id='add'>Click Here!</button>");
		$(this.el).append("<ul></ul>");
		
	},
	
		addItem: function(){
			this.counter++;
			$('ul', this.el).append("<li>University of San Carlos"+this.counter+"</li>");
			
		}	
		
	});
	
	var listView = new ListView();
})(jQuery);