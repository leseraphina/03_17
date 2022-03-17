
// 형식

class Book{
  constructor(type,title){
    this.type = type;
    this.title = title;
  }
  list(){
    console.log(`${this.type}`);
  }
}

class Graphic extends Book{
  constructor(type,title,level){
    super(type,title);
    this.level = level;
  }
  list(){
    super.list();
    document.write(
      `<p>${this.type} : ${this.title} : ${this.level}</p>`
    );
  }
}

console.log(Graphic);
 const myGraphic = [
   new Graphic('photo','photoshop','1'),
   new Graphic('vector','illustor','3'),
   new Graphic('paint','painter','1')
 ]

myGraphic[1].list();

for (i of myGraphic){
  i.list();
}


//  const myBook = new Book('it','html');
//  myBook.list();