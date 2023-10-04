import { useNavigate } from "react-router-dom";

import "./styles.css";

export default function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="side-bar">
                <div className="options">
                    <a>Meus Horarios</a>
                    <a>Entrar em uma escala</a>
                </div>
            </div>
        </div>
    );
}
