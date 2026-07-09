class Note {
    constructor(title, text){
        this.title = title;
        this.text = text;
    }
}

class App {
    constructor() {
        this.notes = []
    }

    addNote(id, { title, text}){
        const newNote = new Note(id, title, text);
        this.notes = [...this.notes, newNote];
    }

    editNote(id, {title, textt}) {
        this.notes = this.notes.map((note) => {
            if (note.id == id){
                note.title = title;
                note.text = text;
            }
            return note;
        })


    }

    displayNotes(){
        this,notes.map(note => console.log(`
            ID: ${note.id}
            Title: ${note.title}
            Text: ${note.text}
            `))

    }

    deleteNote({}){

    }

   
}


const app = new App()

