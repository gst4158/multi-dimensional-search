let data0 = {
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
};

let results0 = searchForKey(data0.dropdown, 'link1');
console.log(results0);

let data1 = {
	columneData: {
    column1: {
      title: "this is a long title",
      link: {
        tag: "a",
        base: "",
        content: "Link Text",
        attributes: {
          id: "uniqueID1",
          href: "google.com"
        }
      }
    },
    column2: {
      title: "title for column 2",
      link: {
        tag: "button",
        base: "",
        content: "Link 2 Text",
        attributes: {
          id: "uniqueID2",
          href: "gregorythomason.com"
        }
      }
    }  
  }
}

/**
* Search through object or array for key to return its data set
*/

function searchForKey(arrayToSearch, key, getResults) {
	let results = getResults || [];
  
  // if given an array map it then search for key
	if (arrayToSearch instanceof Array) {
  	arrayToSearch.map(function(item) {
    	if(key in item) {
				results.push(item[key])
        return results;
      }
      else {
      	searchForKey(item, key, results);
      }
    });
  }
  // else we were given an object and we can search that
  else if (arrayToSearch instanceof Object) {
  	if(key in arrayToSearch) {
      results.push(arrayToSearch[key]);
      return results;
    }
    else {
      Object.keys(arrayToSearch).forEach((itemKey, index) => {
        if (itemKey === key) {
          results.push(arrayToSearch[itemKey]);
        }
        else {
        	searchForKey(arrayToSearch[itemKey], key, results)
        }
      });
    }
  }
  
  return results;
};

let results1 = searchForKey(data1, 'column1');
console.log(results1);

/*
  Expected result:
[{
  text: "this shit is really deep"
}, {
  target: "_self",
  url: "www.george.com"
}]
[{
  link: {
    attributes: { ... },
    base: "",
    content: "Link Text",
    tag: "a"
  },
  title: "this is a long title"
}]
*/
