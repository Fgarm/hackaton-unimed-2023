export default function Routes() {
    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <a href={`/hoem`} >Home</a>
                        </li>
                        <li>
                            <a href={`/contacts/2`}>Escalas</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"></div>
        </>
    );
}
