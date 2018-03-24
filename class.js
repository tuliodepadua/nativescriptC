class Message {
  constructor(text = "", created = Date.now()) {
    this.text = text;
    this._created = created;
  }
  get created() {
    return this._created;
  }
  set created(created) {
      if (!created || isNaN(created)){
          throw new Error('Invalid Created');
      }
    this._created = created;
  }

  toString() {
    return `Message's at: ${this.created} - Text: ${this.text}`;
  }
}


class ImageMessage extends Message {
    constructor(text = "", created = Date.now(), url = '', thumbnail = ''){
        super(text, created);

        this.url= url;
        this.thumbnail = thumbnail;
    }
    toString(){
      return `Photo${super.toString()} 
              - URL ddd ${this.url}
              thumbnail ${this.thumbnail}`;
    }
}
var emptyMessage = new Message(null, null);
var textMessage = new Message("Yesterday message", Date.now() - 86400);
var textMessage1 = new ImageMessage("Yesterday messsdasdage", Date.now() - 86400,'dsd','ss');

console.log(String(emptyMessage));
console.log(String(textMessage));
console.log(String(textMessage1));