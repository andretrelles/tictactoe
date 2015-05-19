angular
	.module ('playApp')
	.controller ('PlayController', PlayController);

	//builds a 9 cell grid
   	function PlayController($firebaseArray){
        var self = this;
        self.cellClicked = cellClicked;
        self.turn = true;
        self.p1score = 0;
        self.p2score = 0;
        self.boxes = playIt();
        self.gameinfo = infoGame();


        function infoGame(){
        	var ref = new Firebase ("https://tictacandre.firebaseio.com/Grid");
        	var gameinfo = $firebaseArray(ref);
        	return gameinfo;
        }
        function playIt() {
        	var ref = new Firebase ("https://tictacandre.firebaseio.com/grid");
        	var boxes = $firebaseArray(ref);
        	return boxes;
        }


		self.grid = [
    {
    	cell: 0,
    	clicked: ""
    },
    {
    	cell: 1,
    	clicked: ""
    },
    {
    	cell: 2,
    	clicked: ""
    },
    {
    	cell: 3,
    	clicked: ""
    },
    {
    	cell: 4,
    	clicked: ""
    },
    {
    	cell: 5,
    	clicked: ""
    },
    {
    	cell: 6,
    	clicked: ""
    },
    {
    	cell: 7,
    	clicked: ""
    },
    {
    	cell: 8,
    	clicked: ""
    }
    
    ]
    function cellClicked ($index) {
    	console.log($index)
    	if (self.boxes[$index].cell == undefined) {
    		console.log(self.boxes[$index].cell);
    		self.boxes[$index].cell = "X";
    		self.gameinfo[0].turn++;
			console.log(self.boxes[$index].cell);
		}
    	else if (self.boxes[$index].cell == "X") {
    		self.boxes[$index].cell = ""
    	}
    self.boxes.$save(self.boxes[$index]);
    self.gameinfo.$save(self.gameinfo[0])
  //   	else if (self.turn === false) {
  //   		self.grid[$index].cell = "O";
		// 	self.turn = true;
		// } 
    	//winner();
	}
	// function winner() {
	// 	console.log("You win!")

	// 	var tokens = ["X", "O"];
	// 	var winner_found = false;

	// 	for(var i = 0; i < tokens.length; i++){
	// 		var t = tokens[i]

	// 		//Find a winner 
	// 		if ( (( self.cell[0]==t) && (self.cell[1]==t) && (self.cell[2])==t) ||
	// 			(( self.cell[3]==t) && (self.cell[4]==t) && (self.cell[5])==t) ||
	// 			(( self.cell[6]==t) && (self.cell[7]==t) && (self.cell[8])==t) ||
	// 			(( self.cell[0]==t) && (self.cell[3]==t) && (self.cell[6])==t) ||
	// 			(( self.cell[1]==t) && (self.cell[4]==t) && (self.cell[7])==t) ||
	// 			(( self.cell[2]==t) && (self.cell[5]==t) && (self.cell[8])==t) ||
	// 			(( self.cell[0]==t) && (self.cell[4]==t) && (self.cell[8])==t) ||
	// 			(( self.cell[2]==t) && (self.cell[4]==t) && (self.cell[6])==t)
	// 		){
	// 			if (t == "X") {
	// 				alert("Player 1 Wins!");
	// 				slef.p1score++;
	// 			} else {
	// 				alert("Player 2 Wins!")
	// 				slef.p2score++;	
	// 			}
	// 			winner_found = true;
	// 			self.clearBoard();
	// 		}
	// 	}
	//}
	}

