import { useRef,type FormEvent } from "react";

interface NewGoalProps{
    onAdd: (text: string, sumary: string) => void;
}

export default function NewGoal({onAdd}: NewGoalProps) {
const goalRef = useRef<HTMLInputElement>(null);
const summaryRef = useRef<HTMLInputElement>(null);

    function handleSubmit(event:FormEvent<HTMLFormElement>) {
        event.preventDefault(); 

        const enteredGoal = goalRef.current!.value;
        const enteredSummary = summaryRef.current!.value;

        //validacao
        onAdd(enteredGoal, enteredSummary)
    }

    return (
    <form onSubmit={handleSubmit}>
        <p> 
        <label htmlFor="goal">Sua meta</label>
        <input id="goal" type="text" ref={goalRef}/>
        </p>
        <p> 
        <label htmlFor="sumary">Pequeno resumo</label>
        <input id="summary" type="text" ref={summaryRef}/>
        </p>
        <button>
            Adicionar meta
        </button>
    </form>)
}