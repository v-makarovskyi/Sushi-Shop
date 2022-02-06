import './topbarList.scss'

export const TopbarList = ({title, setSelected, id, active}) => {
    return (
        <li className={active ? 'menuItem active' : 'menuItem'}
        onClick={() => setSelected(id)}
        >
            {title}
        </li>
    )
}
