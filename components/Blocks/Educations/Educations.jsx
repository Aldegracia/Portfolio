"use client";

import React from 'react';
import styles from './Educations.module.scss';
import Item from "@/components/Blocks/Educations/Item/Item";
import Title from "@/components/UI/Elements/Title/Title";
import Companies from '@/database/Educations.json';
import Blobs from "@/components/UI/Elements/Blobs/Blobs";

export default function EducationsBlock() {

    return (
        <section className={styles.section} id={'educations'}>
            <Blobs type={'v2'} classVariable={`${styles.blob}`}/>
            <header className={styles.header}>
                <Title color={'white'}><span>Education</span> <br/>Background</Title>
            </header>
            {Companies.map((item, index) => {
                return (
                    <Item index={index}
                          university={item.university}
                          course={item.course}
                          duration={item.duration}
                          location={item.location}
                          image={item.image}
                          url={item.url}
                          responsibilities={item.responsibilities}
                          color={item.color}
                          key={index}/>
                );
            })}
        </section>
    );
}