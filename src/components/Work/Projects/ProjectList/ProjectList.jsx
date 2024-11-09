import "../Projects.css";

export default function ProjectList({ id, title, imageUrl, casestudy, active, setSelected }) {
    return (
        <li
            className={active ? "projectList active" : "projectList"}
            onClick={() => setSelected(id)}
        >
            {title}
            {imageUrl}
            {casestudy}
        </li>
    );
}