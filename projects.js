let cards = []

const invokeProto = (projIdx) => {
    cards[projIdx].display()
}

const Card = function(elem, plus, minus) {
    this.elem = elem;
    this.plus = plus;
    this.minus = minus;
    this.opened = false;
}

Card.prototype.display = function(){
    if (this.opened) {
        this.elem.style.maxHeight = '0px';
        this.plus.style.display = 'block';
        this.minus.style.display = 'none';
        this.opened = false
    } else {
        this.elem.style.maxHeight = '1300px';
        this.plus.style.display = 'none';
        this.minus.style.display = 'block';
        this.opened = true;
    }
}

function init() {
    const elemArr = document.querySelectorAll('.accordian-item');
    for(let i = 0; i < elemArr.length; ++i) {
        cards.push(new Card(document.querySelector(`#project${i + 1} .projectdescription`),
                            document.querySelector(`#project${i + 1} .accordian-link .fa-plus`),
                            document.querySelector(`#project${i + 1} .accordian-link .fa-minus`)));
    }
}

init();