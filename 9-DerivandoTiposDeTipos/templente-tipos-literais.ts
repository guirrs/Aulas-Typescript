type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

//* Dessa forma, permite unir todas os possibilidades de arquivos sem ter q fazer manualmente
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;

type DataFile = {
    data: string,
    permissions: FilePermissions
}

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents ={
    //* Isso fez com que pegasse os atributos do DataFileEventsNames e transformasse em funções vazias
    //* Não se usa o keyof por conta q vai pegar todas as heranças, agr do queremos do DataFIleEventNames
    [key in DataFileEventNames]: () => void;
}