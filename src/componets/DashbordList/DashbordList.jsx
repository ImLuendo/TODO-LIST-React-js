import { useState } from "react";
import s from "./style.module.css";

export function DashboardList({ arrayTodo, validerOneTodo, supprimerTodo }) {
    
    return (
        <div className={s.Container}>
            <table>
                <thead>
                    <tr>
                        <th>Tâches</th>
                        <th>Etat</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {arrayTodo.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo.task}</td>
                            <td>{todo.status}</td>
                            <td>
                                <button onClick={() => validerOneTodo(index)}>
                                    Valider
                                </button>
                                <button onClick={()=> supprimerTodo(index)}>Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
