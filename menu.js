var app = angular.module("app", []);
app.controller('menucontroller',function($scope){
	$scope.menuItems=[
  {
    "name": "Salad",
    "choices": [
      {
        "name": "Santa Fe"
      },
      {
        "name": "Greek"
      },
      {
        "name": "Asian"
      }
    ],
    "related": [
      {
        "name": "Dressing",
        "choices": [
          {
            "name": "Italian"
          },
          {
            "name": "Blue Cheese"
          },
          {
            "name": "Ranch"
          }
        ]
      },
      {
        "name": "Bread",
        "choices": [
          {
            "name": "Italian"
          },
          {
            "name": "Flat"
          },
          {
            "name": "Sourdough"
          }
        ]
      }
    ]
  },
  {
    "name": "Entree",
    "choices": [
      {
        "name": "Steak"
      },
      {
        "name": "Salmon"
      },
      {
        "name": "Rice"
      }
    ],
    "related": []
  },
  {
    "name": "Soup",
    "choices": [
      {
        "name": "Minestrone"
      },
      {
        "name": "Hot and sour"
      },
      {
        "name": "Miso"
      }
    ],
    "related": [
      {
        "name": "Bread",
        "choices": [
          {
            "name": "Breadsticks"
          }
        ]
      }
    ]
  }
];

$scope.anyOfChoiceIsChecked=function(subMenuItem){
	if(!subMenuItem)
		return false;
	if(!subMenuItem.choices)
		return false;
	
	if(Array.isArray(subMenuItem.choices)){
		for(var i=0;i<subMenuItem.choices.length;i++){
			var item=subMenuItem.choices[i];
			if(item.isChecked)
				return true;
		}
	}
	return false;
};
});
