import '../Feed.css'

export default function FeedList({ id, title, active, setSelected }) {
    return (
        <li
            className={active ? "projectList active1" : "projectList"}
            onClick={() => setSelected(id)}
        >
            {title}

        </li>
    );
}