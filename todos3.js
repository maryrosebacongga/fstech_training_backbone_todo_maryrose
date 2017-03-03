// JavaScript Document¥
//exercise 3


(function ($){
	
	var Item = Backbone.Model.extend({
		defaults:{
			part1:'Rose',
			part2:'Mary'
		}
	});
	
	var List = Backbone.Collection.extend({
		model: Item
	});
	
	var ListView = Backbone.View.extend({
		el: $('body'),
		events:{
			'click button#add' : 'addItem'
		},
		
		
	initialize: function(){
		_.bindAll(this, 'render', 'addItem', 'appendItem');
		
		this.collection = new List();
		this.collection.bind('add', this.appendItem);
		
		this.counter = 0;
		this.render();
		
	},
	
	render:function(){
		$(this.el).append("<button id='add'>Read More</button>");
		$(this.el).append("<ul></ul>");
		_(this.collection.models).each(function(item){
			appendItem(item);
		},this);	
	},
		
	addItem: function(){
		this.counter++;
		var item= new Item();
		item.set({
			part2:item.get('part2')+ this.counter
		});
		this.collection.add(item);
		
	},	
		
	appendItem: function(item){
		$('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
	}		
	});
	
		var listView= new ListView();
})(jQuery);
