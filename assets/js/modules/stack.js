define(['DB', 'User'],function(DB, User){

	var module = {
		push: function(forWho, motion, expandObj) {
			
			var expandObj = expandObj || null;
			var motionObj = {
				'for': forWho,
				'motion': motion
			};

			if (expandObj) {
				motionObj[expandObj.prop] = [{id:expandObj.id}];
			};

			DB.push('motionQueue',motionObj);

		}
	}

	return module;
})