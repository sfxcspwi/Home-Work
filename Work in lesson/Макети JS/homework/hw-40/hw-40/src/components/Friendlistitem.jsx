import styles from "../components/Friendlist.module.css"

let FriendListItem = ({ avatar, isOnline, name }) => {

    let statusClass = `${styles.offline}`

    if (isOnline) 
    {
    statusClass = `${styles.online}`
    }

    return(
        <li className={styles.item}>
        <span className={`${styles.status} ${statusClass}`}></span>

        <img
            className={styles.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
        />

        <p className={styles.name}>{name}</p>
        </li>
    );
};

export default FriendListItem;