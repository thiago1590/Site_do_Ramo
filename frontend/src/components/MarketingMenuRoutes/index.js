import styles from "./styles.module.scss"
import { useRouter } from "next/router"

export default function MarketingMenuRoutes({ routesName, routes }) {
    const splittedRoutesName = routesName.split("/");
    const splittedRoute = routes.split("/");
    const router = useRouter();
    
    function handleChangeRoute(index) {
        const LOWERsplittedRoutes = splittedRoute.map(route => {
            return route.toLowerCase();
        }); 

        let selectedRoute = LOWERsplittedRoutes.slice(0, index+1).join("/");

        router.push(`/marketing/${selectedRoute}`);    
    }

    return (
        <div className={styles.all}>
            <section className={styles.content}>
                { splittedRoutesName.map((route, index) => {
                    return (
                        <>
                            <span onClick={() => handleChangeRoute(index)}> {route} </span>
                            <p> {">"} </p>
                        </>
                    )
                })}
            </section>
        </div>
    );
}