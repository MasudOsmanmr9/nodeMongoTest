var mongoose = require("mongoose");

mongoose.promise = global.promise;
//mongoose.connect('mongodb://localhost:27017/mongoosetest');
mongoose.connect("mongodb://masudosman:masud009@ds255319.mlab.com:55319/mtest");

module.exports ={mongoose}











// {
	
// 	"_id": 6,
// 	"doctor": {
	    
	    
//         "profile": {
//                 "photos": ["saasd"],
//                 "bio":"good photo",
//                 "speciality": [{"name":"cardiologist","description":"therapist"}],
//                 "expertise": [{"name":"consultency","description":"doing what i know"}],
//                 "education": [{"degree":"Mbbs","institute":"sfdd"}],
//                 "publications": [{"title":"asdasdasd","summary":"asdasdasd","url":"asdasdasd"}],
//                 "awards": [{"title":"noawards","year":"2018"}]
//             }
//         }
//     }

