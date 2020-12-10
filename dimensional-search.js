let searchedKey = "link1";
let data = {
	dropdown: [
    [
      {
        link0: {
          "url": "www.google.com",
          "target": "_blank",
          "evenDeeper": {
          	link11: {
            	"text": "this is some text really deep",
              "evenDeeperer": {
                link1: {
                  "text": "this shit is really deep"
                }
              }
            }
          }
        },
        link2: {
          "url": "www.reddit.com",
          "target": "_self"
        }
      },
      {
        link3: {
          "url": "www.google.com",
          "target": "_blank"
        },
        link4: {
          "url": "www.reddit.com",
          "target": "_self"
        }
      }   
    ],
		[
      {
        link5: {
          "url": "www.google.com",
          "target": "_blank"
        },
        link6: {
          "url": "www.reddit.com",
          "target": "_self"
        }
      },
      {
        link7: {
          "url": "www.frank.com",
          "target": "_blank"
        },
        link1: {
          "url": "www.george.com",
          "target": "_self"
        }
      }   
    ]
  ]
}

let results = [];

/**
* Search for a key through a multi-dimensional array or object
*/
function searchForKey(arrayToSearch, key) {
	// if given an array map it then search for key
	if (arrayToSearch instanceof Array) {
  	arrayToSearch.map(function(item) {
    	if(key in item) {
      	let pushedItem = {
        	[key]: item[key]
        }
				results.push(pushedItem)
        return;
      }
      else {
      	searchForKey(item, key);
      }
    });
  }
  // else we were given an object and we can search that
  else if (arrayToSearch instanceof Object) {
  	if(key in arrayToSearch) {
      results.push(item[key]);
      return;
    }
    else {
    	for (item in arrayToSearch) {
        if(arrayToSearch[item] instanceof Object && key in arrayToSearch[item]) {
          results.push(arrayToSearch[item]);
          return;
        }
      	searchForKey(arrayToSearch[item], key)
      }
    }
  }
};

searchForKey(data.dropdown, searchedKey);
console.log(results);

/*
Expected result:
[{
  link1: {
    text: "this shit is really deep"
  }
}, {
  link1: {
    target: "_self",
    url: "www.george.com"
  }
}]
*/
