import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		var s = this.store.find('product');
		return s;
	}
});
