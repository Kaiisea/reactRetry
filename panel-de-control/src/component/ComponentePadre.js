import './ComponentePadre.css';

export function ComponentePadre(props) {
    return (
        <div className= "dad">
            <h2>logo</h2>
            {props.children}
        </div>
    );
}