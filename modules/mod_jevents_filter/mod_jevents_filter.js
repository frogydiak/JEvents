var JeventsFilters = {
	filters: new Array(),
	reset:function (form){
		JeventsFilters.filters.each(function (item,i) {
			if (item.action){
				eval(item.action);
			}
			else {
				var elem = $(item.id);
				if (elem) {
					try {
						var tag = elem.get('tag');
					}
					catch (e) {
						var tag = elem.getTag();
					}
					if (tag =='select'){
						$ES('option',elem).each(
							function(selitem){
								selitem.selected=(selitem.value==item.value)?true:false;
							}
						);
					}
					else {
						elem.value = item.value;
					}
				}

			}
		});
		form.submit();
	}
}