var  _ = require('lodash');

exports.list = function (obj) {
	var combs = [];
	
	for (var ind in obj) {
		var temcombs = [];
		if (combs.length == 0) {
			for (var i in obj[ind]) {
				var n = {};
				n[ind] = obj[ind][i];
				temcombs.push(n);
			}
		} else {
			for (var i in obj[ind]) {
				for (var k in combs) {
					var n = {};
					n[ind] = obj[ind][i];
					n = _.merge(_.clone(combs[k]), n)
						temcombs.push(_.merge(_.clone(combs[k]), n));
				}
			}
		}
		combs = temcombs;

	}
	return combs;
};

// console.log(exports.list({ '1' : [1,2], '2' : [1]}))
