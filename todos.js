// JavaScript Document
//exercise 1
(function($){
	
	var ListView = Backbone.View.extend({
	 el: $('body'),
		
		initialize: function(){
		_.bindAll(this, 'render');
			
			this.render();
			
			
		},
		
		render: function(){
			$(this.el).append("<ul><li>Mary Rose</li></ul>");
		}
		
	});
	
	var listView = new ListView();
})(jQuery);







		
		
		
		
		
		
	







