var element = document.querySelector(".door");
element.addEventListener("click", toggleDoor);

function toggleDoor() {
  element.classList.toggle("doorOpen");
}

function enterIn() {
    document.getElementById("exterior").style.display = 'none';
    document.getElementById("house").style.display = 'none';
    document.getElementById("inside").style.display = 'block';
    document.body.style.backgroundImage = "url('images/frontinside.png')";
}

function enterOut() {
    document.getElementById("exterior").style.display = 'block';
    document.getElementById("house").style.display = 'block';
    document.getElementById("inside").style.display = 'none';
    document.body.style.backgroundImage = "url('/images/tree.jpeg')";
}


function enterInn() {
    document.getElementById("exterior").style.display = 'none';
    document.getElementById("left").style.display = 'none';
    document.getElementById("right").style.display = 'none';
    document.getElementById("house").style.display = 'none';
    document.getElementById("inside").style.display = 'block';
    document.body.style.backgroundImage = "url('images/frontinside.png')";
}

//writing the java script for each buttons was slightly confusing and im sure there is a much easier and more organised
//way to sort these out, however i had followed the similar coding found from the last assignmetn to hide divs rather than
//using three seperate pages.

//i wanted to follow a more skeumorphic design hence the weirdly out of touch background with hand drawn interiors and realistic plants.
//the idea was for all the plants to be interactable, and when clicked on they change into a more cartoonish and handrawn version of themselves.
//however i had found this part to be quite difficult and only managed to get one plant working.

function enterLeft() {
    document.getElementById("exterior").style.display = 'none';
    document.getElementById("inside").style.display = 'none';
    document.getElementById("right").style.display = 'none';
    document.getElementById("house").style.display = 'none';
    document.getElementById("left").style.display = 'block';
    document.body.style.backgroundImage = "url('images/leftside.png')";
}

function enterRight() {
    document.getElementById("exterior").style.display = 'none';
    document.getElementById("inside").style.display = 'none';
    document.getElementById("left").style.display = 'none';
    document.getElementById("house").style.display = 'none';
    document.getElementById("right").style.display = 'block';
    document.body.style.backgroundImage = "url('images/rightside.png')";
}

var image = document.querySelector('#monstera');

let toggle = true;

image.onclick = function() {
    toggle = !toggle;
    if(toggle){
        image.src = 'images/monstera.png';
    }else{
        image.src = 'images/monstera2.png';
    }
};

let money = document.getElementById("money");

//even though this code is unfortunately not working i will still keep this here as a way to show my trial and errors/experimentations
//the toggle function is what stumped me as it seems you can only use it for one variable, therefore i tried using a different variable however it did not
//work as id like it to.
//i had also tried to combine multiple elements into the single function code which, yes that sounds extremely messy, but i still wanted to see if it would do any thing
//the code did work, however the images were only being replaced for one plant whilst both were interactable.
//this would result in clicking a middle plant and having the left side change to what the middle was supposed to be.


/* money.onclick = function toggleMoney() {
    var i = true;
    if(i){
        document.getElementById("money").src = 'images/moneyplant.png';
    }else{
        document.getElementById("money").src = 'images/moneyplant2.png';
    }
}
*/
money.onclick = function toggleMoney() {
    money.src = 'images/moneyplant2.png'
}