import styles from "@/app/styles/home.module.css";


function loading() {
    return (
        <div className=" bg-gray-500  h-[100vh] grid place-items-center ">
            <span className={styles.loader} ></span>
        </div>
    )
}

export default loading