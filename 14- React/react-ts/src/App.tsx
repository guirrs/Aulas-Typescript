import { useState } from "react";

import Header from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import CourseGoals from "./components/CourseGoal.tsx";
import NewGoal from "./components/NewGoal.tsx";

function App() {
  const [goals, setGoals] = useState(
    [
      {
        id:1, 
        title: 'Aprendendo TS', 
        description: "Aprendendo TS com React"
      },
      {
        id:1, 
        title: 'Aprendendo TS', 
        description: "Trabalho pratico com TypeScript"
      },
      ]
  );

  function handleDeleteGoal(id: number){
    setGoals((prevGoals) => prevGoals.filter(g => g.id !== id))
  }

  function handleAddGoal(text: string, sumary: string) {
    setGoals(prevGoals => prevGoals.concat({id: Math.random(), title: text, description: sumary}))
  }

  return (
    <main>
      <Header imagem={{ src: goalsImg, alt: "Uma lista de metas" }}>
      <h1>Sua metas do curso</h1>
    </Header>
    <NewGoal onAdd={handleAddGoal}/>
    <CourseGoals 
    goals={goals} onDelete={handleDeleteGoal}/>
    </main >
  );
}

export default App
