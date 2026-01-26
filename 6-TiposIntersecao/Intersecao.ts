type FileData ={
    past: string,
    content: string
};

type Database = {
    connectionUrl: string,
    credetials: string
};

type Status = {
    open: boolean,
    errorMessage?: string
};

//* O & uni as 2 types em um uma só, que é a AccessedFile
type AccessedFile = FileData & Status;
//* Com interface voce poe extends e chaves no final
interface AccessefDataBase extends Database , Status{};