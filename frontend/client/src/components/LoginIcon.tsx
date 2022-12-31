import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

interface PropsTypes {
    href: string
    src: string;
    alt: string;
}

const Icon = (props: PropsTypes) => {

    return (<a href={props.href} rel="noreferrer" >
        <ButtonContainer
            whileHover={{ scale: 1.2 }}
            src={props.src}
            alt={props.alt}
        />
    </a>)
}

const ButtonContainer = styled(motion.img)`
  display: flex;
  flex-direction: column;
  width: 15rem;
  height: auto;
  margin-bottom: 1rem;
`;

export default Icon