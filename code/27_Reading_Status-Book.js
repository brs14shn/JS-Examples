
//Reading status of books

let library = [ 
    {
        title: 'Monte Kristo Kontu',
        author: ' Alexandre Dumas',
        readingStatus: true
    },
    {
        title: 'Savas ve Barıs',
        author: 'Tolstoy',
        readingStatus: true
    },
    {
        title: 'Suc ve Ceza',
        author: 'Dostoyevski',
        readingStatus: false
    }];

for (let i of library) 
   {
    let book = "'" + i.title + "'" + ' by ' + i.author + ".";
    if (i.readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }

   //OR 

   /*for (let i = 0; i < library.length; i++) 
   {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
      console.log("Already read " + book);
    } else
    {
     console.log("You still need to read " + book);
    }
   }*/