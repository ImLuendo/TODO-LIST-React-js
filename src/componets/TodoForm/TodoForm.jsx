// TodoForm.js
import { useState } from "react";
import s from "./style.module.css";
import { LIST_OF_TODO } from "../DashbordList/AarrayItem";
import { DashboardList } from "../DashbordList/DashbordList";

export function TodoForm() {
    // État pour stocker les todos avec leur statut
    const [validerTodos, setValiderTodos] = useState(
        LIST_OF_TODO.map(todo => ({ task: todo, status: "Non Effectuée" }))
    );
    const [inputValue, setInputValue] = useState("");

    // Fonction pour ajouter une nouvelle tâche
    const addTodo = (e) => {
        e.preventDefault();
        if (inputValue.trim() === "") {
            return alert("Ce champs est obligatoire");
        }
        setValiderTodos([...validerTodos, { task: inputValue, status: "Non Effectuée" }]);
        setInputValue("");
    };

    // Fonction pour valider une tâche spécifique
    const validerOneTodo = (index) => {
        setValiderTodos(
            validerTodos.map((todo, i) =>
                i === index ? { ...todo, status: "Effectuée" } : todo
            )
        );
    };

    // Fonction pour supprimer une tâche spécifique
    const supprimerTodo = (index) => {
        setValiderTodos(validerTodos.filter((_, i) => i !== index));
    };
    return (
        <>
            <form onSubmit={addTodo}>
                <h2>My Todo App</h2>
                <p>Ajouter une tâche dans votre carnet électronique</p>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder="Ex: Achat Bonbons" 
                />
                <button className={s.buttonForm} type="submit">Ajouter</button>
            </form>

            {/* Passez les todos avec statut et la fonction pour valider une tâche */}
            <DashboardList arrayTodo={validerTodos} validerOneTodo={validerOneTodo} supprimerTodo = {supprimerTodo} />
        </>
    );
}
