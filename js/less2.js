//less 11/2
let age = document.getElementById('age');

function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}
showUser.apply(age,["John","Deere"]);

//lesson 12/2

class Options{
    constructor(height,width,bg,fontSize,textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    
    createDiv(){
        let div = document.createElement('div');
        document.body.appendChild(div);
        let par = `height: ${this.height}px; width:${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
        div.style.cssText = par;
    }

}

const item = new Options(300, 450, 'red', 12, 'center');

item.createDiv();