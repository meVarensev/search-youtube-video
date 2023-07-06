import {FC} from 'react';
import CardHover from "../../../../assets/icons/hover-card.svg"
import styles from "./card.module.scss"
import {classNames} from "../../../../lib/class-names";

interface CardProps {
    title: string;
    description: string;
    count: number;
    layoutMode: "flex" | "grid";
}

const Card: FC<CardProps> = ({title, description, count, layoutMode}) => {
    //TODO: refactor
    const layoutVue =  layoutMode === "grid" ? styles.cardFlexColumn : classNames(styles.cardFlexRow, {} , [styles.cardContentFlexRow ])
    const descriptionWidth = layoutMode === "grid" ? "" : styles.descriptionContentWidth
    const descriptionContent = layoutMode === "grid" ? styles.descriptionContent : classNames(styles.descriptionContent, {} , [styles.descriptionContentFlexRow ])


    return (
        <div className={layoutVue}>
            <div className={styles.cardContent}>
                <img src={CardHover} alt="card"/>
            </div>
            <div className={descriptionContent}>
                <p className={styles.title}>{description}</p>
                <p className={styles.description}>{title}</p>
                <p className={styles.count}>{count} тыс. просмотров</p>
            </div>
        </div>
    );
};

export {Card};
