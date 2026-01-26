//* Crie um atributo para poder identificar o conteudo como abaixo, classificando como file ou db
type FileSource = {type: 'file', path: string };
const fileSource: FileSource = {
  type: 'file',
  path: 'some/path/to/file.csv'
};

type DBSource = {type: 'db', connectionUrl: string };
const dbSource: DBSource = {
  type: 'db',
  connectionUrl: 'some-connection-url',
};

type Source = FileSource | DBSource;

//* Booleana mais completa
const isFile = (source: Source) =>{
    return source.type === 'file';
}

function loadData(source: Source) {
  //if('path' in source)
  //if(source.type === 'file')
  if(isFile(source))
  {
    //* Sabe que source eh um arquivo
    return;
  }
  //* Se nao eh um arquivo ent entende que eh um banco de dados
}

//======================================================
//* instanceof

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User('Max');
const admin = new Admin(['ban', 'restore']);

type Entity = User | Admin;

function init(entity: Entity) {
 //*instanceof verifica qual eh a classe
 if(entity instanceof Admin)
 {
    entity.scan()
 }
}